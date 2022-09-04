import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialGameState = {
  players: [
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
  ],
  activePlayer: 0,
  dice: 1,
};
const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {},
});

const store = configureStore({
  reducer: { game: gameSlice.reducer },
});
export const gameActions = gameSlice.actions;
export default store;
