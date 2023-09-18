import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface InventoryState {
  items: String[];
  gold: number; 
}

// Define the initial state using that type
const initialState: InventoryState = {
  items: [],
  gold: 0,
}

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    removeItem: (state, index: PayloadAction<number>) => {
      state.items.splice(index.payload, 1);
    },
    addGold: (state, action: PayloadAction<number>) => {
     state.gold += action.payload;   
    },
    removeGold: (state, action: PayloadAction<number>) => {
     state.gold -= action.payload;   
    },
    addItemToInventory: (state, action: PayloadAction<String>) => {
      state.items.push(action.payload)
    },
  },
})

export const { removeItem, addGold, removeGold, addItemToInventory } = inventorySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const goldCount = (state: RootState) => state.gold;
export const itemsCount = (state: RootState) => state.items;

export default inventorySlice.reducer