import React from 'react'
import classes from './Music.module.css';
import Musicproducts from './Musicproducts';

const Music = () => {
  return (
    <div className={classes.music}>
      <h2>MUSIC</h2>
      <Musicproducts />
    </div>
  )
}

export default Music
