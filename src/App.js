import "./App.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "./component/Layout/Header/Header";
import Store from "./component/Pages/Store/Store";
import Home from "./component/Pages/Home/Home";
import About from "./component/Pages/About/About";
import Footer from "./component/Layout/Footer/Footer";
import CartList from "./Cart/CartList";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartContext } from "./component/StoreContext/CartContext";
import Contact from "./component/Pages/Contact/Contact";
import Product from "./component/Layout/Products/Product";
import Login from "./component/Pages/Login/Login";
import UserProfile from "./component/Pages/Profile/UserProfile";

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(false);

  const { cart, setCart, userId, setUserId } = useContext(CartContext);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      console.log(localStorage.getItem("userId"))
      setUserId(localStorage.getItem("userId"));
    }
  }, [setUserId]);


  const CartItems = () => {
    // setCartItems(true);
    if (localStorage.getItem("userId")) {
      setCartItems(true);
      axios
        .get(
          `https://crudcrud.com/api/e96748c24e794ce1b3cfc61fda23dea9/cart${userId}`
        )
        .then((response) => {
          // console.log(`Axios: ${response}`);
          console.log(`userId: ${userId}`);
          // console.log("Response Data ${response.data}");
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
      setIsloggedIn(true);
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
      <Header showCartItem={CartItems} />
      {cartItems && <CartList Close={cartItemsClose} />}

      <Routes>
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
          <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
        )}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
