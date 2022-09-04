import { createSlice, configureStore } from "@reduxjs/toolkit";
function changePlayer(state) {
  state.activePlayer === 0
    ? (state.activePlayer = 1)
    : (state.activePlayer = 0);
}
function clearPlayerCurScore(state) {
  state.players[state.activePlayer].currentScore = 0;
}
const initialGameState = {
  players: [
    {
      id: 1,
      score: 0,
      currentScore: 0,
    },
    {
      id: 2,
      score: 0,
      currentScore: 0,
    },
  ],
  activePlayer: 0,
  dice: Math.trunc(Math.random() * 6),
};
const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    diceRoll(state) {
      state.dice = Math.trunc(Math.random() * 6);
      if (state.dice === 0) {
        clearPlayerCurScore(state);
        changePlayer(state);
      } else {
        state.players[state.activePlayer].currentScore += state.dice + 1;
      }
    },
    hold(state) {
      state.players[state.activePlayer].score +=
        state.players[state.activePlayer].currentScore;
      clearPlayerCurScore(state);
      changePlayer(state);
    },
    reset(state) {
      state.players.map((player) => {
        player.score = 0;
        player.currentScore = 0;
      });
      state.activePlayer = 0;
      state.dice = Math.trunc(Math.random() * 6);
    },
  },
});

const store = configureStore({
  reducer: { game: gameSlice.reducer },
});
export const gameActions = gameSlice.actions;
export default store;
