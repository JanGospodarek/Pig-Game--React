import classes from "./Player.module.css";
function Player() {
  return (
    <section className={classes.player}>
      <h2 className={classes.name} id="name--0">
        Player 1
      </h2>
      <p className={classes.score} id="score--0">
        43
      </p>
      <div className={classes.current}>
        <p className={classes.currentLabel}>Current</p>
        <p className={classes.currentScore} id="current--0">
          0
        </p>
      </div>
    </section>
  );
}
export default Player;
