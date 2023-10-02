import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { Stats } from "../Game/Stats";

// Define a type for the slice state
interface statsState {
  stats: Stats;
}

// Define the initial state using that type
const initialState: statsState = {
  stats: {
    Attack: 0,
    Believing: 0,
    Constitution: 0,
    Defense: 0,
    Emotion: 0,
    Forgiving: 0,
    Grit: 0,
    Heart: 0,
    Imagination: 0,
    Jovial: 0,
    Kindness: 0,
    Love: 0,
    Magic: 0,
    Navigation: 0,
    Openness: 0,
    Piety: 0,
    Questioning: 0,
    Responsibility: 0,
    Strength: 0,
    Toughness: 0,
    Utilitarianism: 0,
    Vengefulness: 0,
    Will: 0,
    Xenophobia: 0,
    Yeehaw: 0,
    Zeal: 0,
  },
};

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    increaseAttack: (state, index: PayloadAction<number>) => {
      state.stats.Attack ? (state.stats.Attack += index.payload) : null;
    },
  },
});

export const { increaseAttack } = statsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const itemsCount = (state: RootState) => state.stats;

export default statsSlice.reducer;
