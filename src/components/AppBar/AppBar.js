import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <NavLink
          exact
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className={styles.list__item}>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
export default AppBar;
