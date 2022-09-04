import React from "react";
import classes from "./Dice.module.css";
import diceOne from "../images/dice-1.png";
import diceTwo from "../images/dice-2.png";
import diceThree from "../images/dice-3.png";
import diceFour from "../images/dice-4.png";
import diceFive from "../images/dice-5.png";
import diceSix from "../images/dice-6.png";
import { useSelector } from "react-redux";
function Dice() {
  const dice = useSelector((state) => state.game.dice);
  let selectedDice;
  switch (dice) {
    case 0:
      selectedDice = diceOne;
      break;
    case 1:
      selectedDice = diceTwo;
      break;
    case 2:
      selectedDice = diceThree;
      break;
    case 3:
      selectedDice = diceFour;
      break;
    case 4:
      selectedDice = diceFive;
      break;
    case 5:
      selectedDice = diceSix;
      break;
  }
  console.log(selectedDice);
  return <img src={selectedDice} alt="Playing dice" className={classes.dice} />;
}
export default Dice;
