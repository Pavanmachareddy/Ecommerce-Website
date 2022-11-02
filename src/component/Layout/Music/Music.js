import React from "react";
import classes from "./Music.module.css";
import Musicproducts from "./Musicproducts";

const Music = (props) => {
  return (
    <div className={classes.music}>
      <h2>MUSIC</h2>
      <Musicproducts />
    </div>
  );
};

export default Music;
