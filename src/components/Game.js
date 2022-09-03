import Controls from "./Controls";
import diceOne from "../images/dice-1.png";
import diceTwo from "../images/dice-2.png";
import diceThree from "../images/dice-3.png";
import diceFour from "../images/dice-4.png";
import diceFive from "../images/dice-5.png";
import diceSix from "../images/dice-6.png";
import classes from "./Game.module.css";
import Dice from "./Dice";
import Player from "./Player";
function Game() {
  return (
    <main>
      <Player></Player>
      <Player></Player>
      <Dice dice={diceFive}></Dice>
      <Controls></Controls>
    </main>
  );
}
export default Game;
