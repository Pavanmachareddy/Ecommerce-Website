import React, { useContext } from "react";
import { CartContext } from "../../StoreContext/CartContext";
import classes from "./Merchproducts.module.css";

const merchArr = [
  {
    title: "T-Shirt",
    price: 200,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    quantity: 1,
  },
  {
    title: "Coffee Cup",
    price: 10,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    quantity: 1,
  },
];

const Merchproducts = () => {
  const { cart, setCart, userId, setUserId, price, setPrice } =
    useContext(CartContext);

  function addItemHandler(product) {
    setCart((prevState) => {
      return [...prevState, product];
    });
    setPrice(price + product.price);
  }

  const removeItemHandler = (items) => {
    setCart(cart.filter((c) => c.title !== items.title));
    setPrice(price - items.price);
  };
  return (
    <section className={classes.merchSection}>
      {merchArr.map((items) => {
        return (
          <ul className={classes.merchContainer}>
            <h3>{items.title}</h3>
            <li className={classes.merchImage}>
              <img src={items.imageUrl} alt="Merch Pictures" />
            </li>
            <li className={classes.merchDetail}>
              <span>₹{items.price}</span>
              {/* <span>₹{items.quantity}</span> */}
              {cart.includes(items) ? (
                <button
                  className={classes.merchBtn}
                  onClick={() => removeItemHandler(items)}
                  // setCart(cart.filter((c) => c.title !==items.title));
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  className={classes.merchBtn}
                  onClick={() => addItemHandler(items)}
                  // setCart([...cart, items])
                >
                  ADD TO CART
                </button>
              )}
            </li>
          </ul>
        );
      })}
    </section>
  );
};

export default Merchproducts;
