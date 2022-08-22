import React from 'react';
import classes from './Merchproducts.module.css';


const merchArr = [
    {
        title: "T-Shirt",
        price:200,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    },
    {
        title: "Coffee Cup",
        price:10,
        imageUrl:  "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",

    },
];

const Merchproducts = () => {
  return (
    <section className={classes.merchSection}>
    {merchArr.map((items) =>{
        return(
            <ul className={classes.merchContainer}>
            <h3>{items.title}</h3>
            <li className={classes.merchImage}>
                <img src={items.imageUrl} alt="Merch Pictures"/>
            </li>
            <li className={classes.merchDetail}>
                <span>₹{items.price}</span>
                <button className={classes.merchBtn}>ADD TO CART</button>
            </li>

            </ul>
        )
    })}
      
    </section>
  )
}

export default Merchproducts
