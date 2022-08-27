import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Cart } from "../../StoreContext/CartContext";
import { NavLink } from "react-router-dom";
import './NavLink.css'

const Header = (props) => {
  const { cart } = useContext(Cart);
  return (
    <div>
      <div className={classes.headBody}>
        <ul className={classes.list}>
        {/* <a href="/homepage"><li>HOME</li></a>
          <Link to="/"><li>STORE</li></Link>
          <Link to="/about"><li>ABOUT</li></Link> */}
          <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/homepage"><li>Home</li></NavLink>
          <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/"><li>Store</li></NavLink>
          <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/about"><li>About</li></NavLink>
          <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/contact"><li>Contact</li></NavLink>
          <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/login"><li>Login</li></NavLink>
          <button className={classes.cart} onClick={props.showCartItem}>
            cart<span className={classes.cartnumber}>{cart.length}</span>
          </button>
        </ul>

        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
