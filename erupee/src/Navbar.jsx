// Navbar.js
import React from 'react';
import { NavLink} from 'react-router-dom';
import styles from "./style.module.css";
  
const Navbar = () => {
  
  return (
    <nav>
      <ul>
          
        
        <li> 
          <NavLink to="/" className={styles.active}>
          <i id="company">Bank</i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.active}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={styles.active}>
            Register
          </NavLink>
          <NavLink to="/deposit" className={styles.active}>
            Deposit
          </NavLink>
          <NavLink to="/withdraw" className={styles.active}>
            Withdraw
          </NavLink>
          <NavLink to="/transfer" className={styles.active}>
            Transfer
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
