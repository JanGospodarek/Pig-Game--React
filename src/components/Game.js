import Controls from "./Controls";
import classes from "./Game.module.css";
import Dice from "./Dice";
import Player from "./Player";

import { useSelector } from "react-redux";
function Game() {
  const players = useSelector((state) => state.game.players);
  return (
    <main>
      {players.map((player, index) => (
        <Player
          id={player.id}
          score={player.score}
          currentScore={player.currentScore}
          key={index}
        ></Player>
      ))}

      <Dice></Dice>
      <Controls></Controls>
    </main>
  );
}
export default Game;
