import { RootState } from "../store";

export const selectRaceStatus = (state: RootState) => state.race.raceStatus;
export const selectRound = (state: RootState) => state.race.round;
export const selectResults = (state: RootState) => state.race.results;
