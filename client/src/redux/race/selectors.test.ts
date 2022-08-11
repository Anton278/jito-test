import { store } from "../store";
import { selectRaceStatus, selectResults, selectRound } from "./selectors";

test("selectRaceStatus should return raceStatus", () => {
    const raceStatus = selectRaceStatus(store.getState());
    expect(raceStatus).toEqual("active");
});
test("selectRound shoul return round", () => {
    const round = selectRound(store.getState());
    expect(round).toEqual([]);
});
test("selectResults should return results", () => {
    const results = selectResults(store.getState());
    expect(results).toEqual([]);
});
