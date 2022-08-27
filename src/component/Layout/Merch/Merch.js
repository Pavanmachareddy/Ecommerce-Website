import React from 'react';
import classes from './Merch.module.css';
import Merchproducts from './Merchproducts'

const Merch = () => {
  return (
    <div className={classes.merchBody}>
      <h2>MERCH</h2>
      <Merchproducts />
      <button className={classes.cartbtn}>See the Cart</button>
    </div>
  )
}

export default Merch
