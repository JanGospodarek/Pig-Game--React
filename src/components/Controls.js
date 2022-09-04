import React from "react";
import classes from "./Controls.module.css";
function Controls(props) {
  return (
    <React.Fragment>
      <button className={classes.btnNew}>🔄 New game</button>
      <button onClick={props.roll} className={classes.btnRoll}>🎲 Roll dice</button>
      <button className={classes.btnHold}>📥 Hold</button>
    </React.Fragment>
  );
}
export default Controls;
