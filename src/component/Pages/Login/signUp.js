import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../StoreContext/CartContext";
import classes from "./Login.module.css";

const SignUpPage = (props) => {
  console.log(props.checkLogin, "llllllllllllllllllllllllllllllll");
  const { cart, setCart, userId, setUserId, contextValue } =
    useContext(CartContext);
  console.log(contextValue);

  const navigate = useNavigate();

  const loginEmailRef = useRef();
  const loginPassRef = useRef();



  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredLoginEmail = loginEmailRef.current.value;
    const enteredLoginPass = loginPassRef.current.value;

    let userSavedId = (Math.random() + 1).toString(36).substring(7);
    console.log(userSavedId);
    localStorage.setItem("userId", userSavedId);
    setUserId(userSavedId);

    setLoading(true);
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzCs8RmN9nrIBGq7S29BvVcvef7exgKCo";
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredLoginEmail,
        password: enteredLoginPass,
        // returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // setLoading(true);
        setIsLogin(false);
        // if (isLogin) {
        //   contextValue.isLoggedIn = true
        //   alert("Logged In SuccesFully");
        // } else {
        //   alert("Sign up SuccesFully");
        // }

        console.log(data);
        localStorage.setItem("TokenId", data.idToken);
         navigate("/login");
         props.checkLogin(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  }; 

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={loginEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={loginPassRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpPage;
