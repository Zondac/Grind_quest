import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../states/InventoryManagement";
import statsReducer from "../states/stats";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    stats: statsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
