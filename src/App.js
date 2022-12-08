 import "./App.css";
import { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Contact from "../src/component/Pages/Contact/Contact"
import Footer from "../src/component/Layout/Footer/Footer"
import {CartContext} from "../src/component/StoreContext/CartContext"
import Home from "../src/component/Pages/Home/Home";
import About from "../src/component/Pages/About/About"
import Product from "../src/component/Layout/Products/Product"
import Login from "../src/component/Pages/Login/Login"
import UserProfile from "../src/component/Pages/Profile/UserProfile"
import SignUpPage from "../src/component/Pages/Login/signUp"
import Store from "../src/component/Pages/Store/Store"
import CartList from "../src/Cart/CartList"
import Header from "../src/component/Layout/Header/Header"



function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(false);

  const { cart, setCart, userId, setUserId } = useContext(CartContext);
  console.log(isLoggedIn, "==========login -app");
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      console.log(localStorage.getItem("userId"));
      setUserId(localStorage.getItem("userId"));
    }
  }, [setUserId]);

  const CartItems = () => {
    
    if (localStorage.getItem("userId")) {
      setCartItems(true);
      axios
        .get(
          `https://crudcrud.com/api/ed73ae893df54c24a0c603c6fb717516/cart${userId}`
        )
        .then((response) => {
          console.log(`userId: ${userId}`);
          response.data.map((item) => {
            console.log(`Response Data before ${item}`);
            setCart((prevState) => [...prevState, item]);
            console.log(`Response Data after ${item}`);
          });
        })
        .catch((err) => {
          console.log(`err:${err}`);
        });
    } else {
      alert("Please Login First");
    }
  };

  const cartItemsClose = () => {
    setCartItems(false);
  };

  useEffect(() => {
    if (localStorage.getItem("TokenId")) {
    }
  }, []);

  const addRequestHandler = async (contact) => {
    const response = await fetch(
      "https://react-http-55193-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Header showCartItem={CartItems} isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />
      {cartItems && <CartList Close={cartItemsClose} />}

      <Routes>
        <Route path="/" element={<SignUpPage />}></Route>
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/homepage" element={<Home />} />
        <Route
          exact
          path="/contact"
          element={<Contact addRequest={addRequestHandler} />}
        />
        <Route path="/product/:id" element={<Product />} />
        <Route
          exact
          path="/login"
          element={<Login checkLogin={setIsloggedIn} />}
        />
        {!isLoggedIn && (
          <Route path="/login" element={<Navigate to="/login"></Navigate>}></Route>
        )}
      </Routes>

      {isLoggedIn && (
        <button className="cartbtn" onClick={CartItems}>
          See the Cart
        </button>
      )}

      <Footer />
    </>
  );
}

export default App;
