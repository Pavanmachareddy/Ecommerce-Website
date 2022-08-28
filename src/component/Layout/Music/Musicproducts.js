import React, { useContext } from 'react';
import classes from './Musicproducts.module.css';
import { CartContext } from '../../StoreContext/CartContext';

const productsArr = [
  {
    album: "Album 1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
   quantity:1,
  },
  {
    album: "Album 2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity:1,
  },
  {
    album: "Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity:1,  
  },
  {
    album: "Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity:1,
  },
];
const Musicproducts = (props) =>{
  const {cart,setCart} = useContext(CartContext)

  return(
    <section className={classes.musicSection}>
      {productsArr.map((items)=>{
        return(
          <ul key={items.album} className={classes.musicContainer}>
            <h3>{items.album}</h3>
            <li className={classes.musicImage}><img  src={items.imageUrl} alt='Music pictures'/></li>
          <li className={classes.musicDetail}>
            <span>{items.title}: ₹{items.price}</span>
            {cart.includes(items)?(
              <button className={classes.musicBtn} onClick={()=> {
                      setCart(cart.filter((c) => c.album !==items.album));
                    }}>Remove From Cart</button>
                  ): <button className={classes.musicBtn} onClick={()=> {
                    setCart([...cart, items])
                  }}>ADD TO CART</button>}
          </li>
          </ul>
        )
      })}
      {console.log(`props.cartMusic ${cart}`)}
    </section>

  )
}

export default Musicproducts; 
