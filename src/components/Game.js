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
  const players = [
    {
      id: 1,
      score: 1,
      currentScore: 0,
    },
    {
      id: 2,
      score: 2,
      currentScore: 0,
    },
  ];
  return (
    <main>
      <Player
        id={players[0].id}
        score={players[0].score}
        currentScore={players[0].currentScore}
      ></Player>
      <Player
        id={players[1].id}
        score={players[1].score}
        currentScore={players[1].currentScore}
      ></Player>
      <Dice dice={diceFive}></Dice>
      <Controls></Controls>
    </main>
  );
}
export default Game;
