import React from "react";
import classes from "./Controls.module.css";
function Controls() {
  return (
    <React.Fragment>
      <button className={classes.btnNew}>🔄 New game</button>
      <button className={classes.btnRoll}>🎲 Roll dice</button>
      <button className={classes.btnHold}>📥 Hold</button>
    </React.Fragment>
  );
}
export default Controls;
