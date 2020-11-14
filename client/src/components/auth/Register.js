import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/authContext";
import styles from "./login.module.css";

// functional component for user registration uses auth context and reducer to set all necessary info

const Register = (props) => {
  // setting up context for alert and auth state to be used within this component

  const authContext = useContext(AuthContext);

  //taking out necessary variable from alert context and auth context

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists!") {
      alert("user already exists");
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    //  on submit function for registering a user checks if fields are empty, if they are, the necessary alert is displayed
    //same thing for if the first password does not match the first
    //the alerts are being called from the alert context

    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Please enter all fields");
    } else if (password !== password2) {
      alert("Passwords do not match");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };
  //USER REGISTRATION FORM
  return (
    <div className={styles.loginForm}>
      <h1>Account Registration</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input type="text" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
