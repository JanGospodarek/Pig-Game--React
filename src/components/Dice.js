import React from "react";
import classes from "./Dice.module.css";
function Dice(props) {
  return <img src={props.dice} alt="Playing dice" className={classes.dice} />;
}
export default Dice;
