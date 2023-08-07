import { configureStore } from '@reduxjs/toolkit'
import isBlackHandler  from './features/isBlackValue/blackState';



export const store = configureStore({
    reducer: { 
        black: isBlackHandler,
    },
})