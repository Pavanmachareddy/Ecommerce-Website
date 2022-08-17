import React from 'react';
import classes from './Merch.module.css';
import Merchproducts from './Merchproducts'

const Merch = () => {
  return (
    <div className={classes.merchBody}>
      <h2>MERCH</h2>
      <Merchproducts />
    </div>
  )
}

export default Merch
