import "./App.css";
import { useState } from "react";
import Header from "./component/Layout/Header/Header";
import Store from "./component/Pages/Store";
import Home from "./component/Pages/Home/Home";
import About from "./component/Pages/About/About";
import Footer from "./component/Layout/Footer/Footer";
import CartList from "./Cart/CartList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContext from "./component/StoreContext/CartContext";
import Contact from "./component/Pages/Contact/Contact";

function App() {
  const [cartItems, setCartItems] = useState(false);

  const CartItems = () => {
    setCartItems(true);
  };

  const cartItemsClose = () => {
    setCartItems(false);
  };

  const addRequestHandler = async(contact) =>{
    const response = await fetch("https://react-http-55193-default-rtdb.firebaseio.com/contact.json",{
      method: 'POST',
      body:JSON.stringify(contact),
      headers:{
        'Content-Type':'application/json'
      }
    }

    );
    const data = await response.json();
    console.log(data)
  }

  return (
    <CartContext>
      <Header showCartItem={CartItems} />
      {cartItems && <CartList Close={cartItemsClose} />}

      <Routes>
        <Route exact path="/" element={<Store />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/homepage" element={<Home />} />
        <Route exact path="/contact" element={<Contact  addRequest={addRequestHandler}/>} />
      </Routes>
      <button className="cart-btn-bottom">See the Cart</button>
      <Footer />
    </CartContext>
  );
}

export default App;
