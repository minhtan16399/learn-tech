import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./slices/rootSlice.ts";

const store = configureStore({
    reducer: {
        root: rootReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
