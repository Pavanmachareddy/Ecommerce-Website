import React, { useContext } from "react";
import classes from "./Header.module.css";
import { CartContext } from "../../StoreContext/CartContext";
import { NavLink } from "react-router-dom";
import "./NavLink.css";

const Header = (props) => {
  const { cart,contextValue } = useContext(CartContext);

  const isLoggedIn = contextValue.isLoggedIn;
  // console.log(cart)
  return (
    <div>
      <div className={classes.headBody}>
        <ul className={classes.list}>
          {/* <a href="/homepage"><li>HOME</li></a>
          <Link to="/"><li>STORE</li></Link>
          <Link to="/about"><li>ABOUT</li></Link> */}
          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/"
            >
              <li>Home</li>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/store"
            >
              <li>Store</li>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/about"
            >
              <li>About</li>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/contact"
            >
              <li>Contact</li>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/login"
            >
              <li>Login</li>
            </NavLink>
          )}
          {isLoggedIn && (
            <li>
              <button>Logout</button>
            </li>
          )}
          {isLoggedIn && (
          <button className={classes.cart} onClick={props.showCartItem}>
            <li>
              cart<span className={classes.cartnumber}>{cart.length}</span>
            </li>
          </button>)}
        </ul>

        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
