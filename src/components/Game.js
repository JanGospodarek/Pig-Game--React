import Controls from "./Controls";
import classes from "./Game.module.css";
import Dice from "./Dice";
import Player from "./Player";
import { gameActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
function Game() {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.game.players);
  const activePlayer = useSelector((state) => state.game.activePlayer);
  const dice = useSelector((state) => state.game.dice);

  function roll() {
    dispatch(gameActions.diceRoll());
  }
  return (
    <main>
      {players.map((player, index) => (
        <Player
          id={player.id}
          score={player.score}
          currentScore={player.currentScore}
          key={index}
          isActive={activePlayer === index && true}
        ></Player>
      ))}

      <Dice dice={dice}></Dice>
      <Controls roll={roll}></Controls>
    </main>
  );
}
export default Game;
