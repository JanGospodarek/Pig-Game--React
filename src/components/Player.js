import classes from "./Player.module.css";
function Player(props) {
  return (
    <section
      className={`${classes.player} ${props.isActive && classes.playerActive}`}
    >
      <h2 className={classes.name} id={`name--${props.id}`}>
        {`Player ${props.id}`}
      </h2>
      <p className={classes.score} id={`score--${props.id}`}>
        {props.score}
      </p>
      <div className={classes.current}>
        <p className={classes.currentLabel}>Current</p>
        <p className={classes.currentScore} id={`current--${props.id}`}>
          {props.currentScore}
        </p>
      </div>
    </section>
  );
}
export default Player;
