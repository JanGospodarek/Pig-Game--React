import Controls from "./Controls";
import classes from "./Game.module.css";
import Dice from "./Dice";
import Player from "./Player";
import { gameActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function Game() {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.game.players);
  const activePlayer = useSelector((state) => state.game.activePlayer);
  const dice = useSelector((state) => state.game.dice);
  useEffect(() => {
    alert("Wins player who first score 100 points");
  }, []);
  function roll() {
    dispatch(gameActions.diceRoll());
  }
  function hold() {
    dispatch(gameActions.hold());
  }
  function reset() {
    dispatch(gameActions.reset());
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
      <Controls roll={roll} hold={hold} reset={reset}></Controls>
    </main>
  );
}
export default Game;
