import React, { useState } from "react";
import AuthContext from "../../context/authContext";
import { useContext, useEffect } from "react";
import styles from "./login.module.css";

// functional component for login form uses auth and alert contexts to display alerts and validate

const Login = (props) => {
  const authContext = useContext(AuthContext);

  // taking the necessary fields from auth context to use within component
  const { login, error, clearErrors, isAuthenticated } = authContext;

  // the use effect hook mimics the componentdidmount lifecycle
  // method i am using it to check if the user is authenticated and setting necessary alerts
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      alert("Invalid Login");
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  // taking the user and setUser values from the auth state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    // checking if the fields are blank, if they are, set an appropriate alert
    if (email === "" || password === "") {
      alert("please fill in all fields");
    } else {
      login({
        email,
        password,
      });
    }
  };
  // USER LOGIN FORM
  return (
    <div className={styles.loginForm}>
      <h1>Account Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Email</label>
          <input type="text" name="email" value={email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <input type="submit" value="Login" className={styles.logIcon} />
      </form>
    </div>
  );
};

export default Login;
