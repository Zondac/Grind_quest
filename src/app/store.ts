import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        gold: goldReducer,
        items: itemsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch