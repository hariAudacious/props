import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const Header = () => {
  return (
    <div>
      <ul className={styles.container}>
        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
