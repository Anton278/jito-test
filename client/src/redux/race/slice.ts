import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Horse } from "../../assets/types";
import { InitState } from "./types";

const initialState: InitState = {
    raceStatus: "active",
    round: [],
    results: [],
};

const raceSlice = createSlice({
    name: "race",
    initialState,
    reducers: {
        setRaceStatus: (
            state,
            action: PayloadAction<"active" | "finished">
        ) => {
            state.raceStatus = action.payload;
        },
        setRound: (state, action: PayloadAction<Horse[]>) => {
            state.round = action.payload;
        },
        addResult: (state, action: PayloadAction<string>) => {
            state.results.push(action.payload);
        },
    },
});

export const { setRaceStatus, setRound, addResult } = raceSlice.actions;

export default raceSlice.reducer;
