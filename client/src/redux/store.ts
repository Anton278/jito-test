import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import race from "./race/slice";

export const store = configureStore({
    reducer: { race },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
