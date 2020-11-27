import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <p id={styles.helloText}>
        Currently logged in as:{" "}
        <span
          style={{ color: "rgb(207, 207, 25)", textDecoration: "underline" }}
        >
          {" "}
          {user && user.name}
        </span>{" "}
      </p>

      <li onClick={onLogout}>
        <div className={styles.logIcon}>
          <a href="#">Logout</a>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </li>
      <li>
        <div className={styles.logIcon2}>
          <Link to="/addartist">Add Artist</Link>
          <i className="fas fa-user"></i>
        </div>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link className={styles.logIcon} to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link className={styles.logIcon} to="/login">
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div id={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link to="/">
          <i id={styles.mic} className="fas fa-microphone-alt fa-5x"></i>
        </Link>

        <div className="titleandVersion">
          <h1 id={styles.title}>{title}</h1>
          <p id={styles.version}>V1.0</p>
        </div>
      </div>

      <div className={styles.navbarRight}>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Voice Artist DB",
  icon: "fas fa-adjust",
};

export default Navbar;
