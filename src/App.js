import "./App.css";
import { useState } from "react";
import Header from "./component/Layout/Header/Header";
import Store from "./component/Pages/Store";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Footer from "./component/Layout/Footer/Footer";
import CartList from "./Cart/CartList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContext from "./component/StoreContext/CartContext";

function App() {
  const [cartItems, setCartItems] = useState(false);

  const CartItems = () => {
    setCartItems(true);
  };

  const cartItemsClose = () => {
    setCartItems(false);
  };

  return (
    <CartContext>
      <Header showCartItem={CartItems} />
      {cartItems && <CartList Close={cartItemsClose} />}

      <Routes>
        <Route exact path="/" element={<Store />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/homepage" element={<Home />} />
      </Routes>
      <button className="cart-btn-bottom">See the Cart</button>
      <Footer />
    </CartContext>
  );
}

export default App;
