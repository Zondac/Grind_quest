import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from '../states/InventoryManagement';

export const store = configureStore({
    reducer: {
        items: itemsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch 