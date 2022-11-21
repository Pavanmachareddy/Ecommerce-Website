import React, { useContext } from "react";
import classes from "./Header.module.css";
import { CartContext } from "../../StoreContext/CartContext";
import { NavLink } from "react-router-dom";
import "./NavLink.css";

const Header = (props) => {
  const { cart, contextValue } = useContext(CartContext);

  
  const logoutHandler = () => {
    contextValue.logout();
    props.setIsloggedIn(false)
  };

  return (
    <div>
      <div className={classes.headBody}>
        <ul className={classes.list}>
          {props.isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/profile"
            >
              <li>Profile</li>
            </NavLink>
          )}

          {props.isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/homepage"
            >
              <li>Home</li>
            </NavLink>
          )}
          {props.isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/store"
            >
              <li>Store</li>
            </NavLink>
          )}
          {props.isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/about"
            >
              <li>About</li>
            </NavLink>
          )}
          {!props.isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/login"
            >
              <li>About</li>
            </NavLink>
          )}
          {props.isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/contact"
            >
              <li>Contact</li>
            </NavLink>
          )}
          {!props.isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/login"
            >
              <li>Login</li>
            </NavLink>
          )}
          {props.isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/login"
            >
              <li onClick={logoutHandler}>Logout</li>
            </NavLink>
          )}
          {props.isLoggedIn && (
            <button className={classes.cart} onClick={props.showCartItem}>
              <li>
                cart<span className={classes.cartnumber}>{cart.length}</span>
              </li>
            </button>
          )}
        </ul>

        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
