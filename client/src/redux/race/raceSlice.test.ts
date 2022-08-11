import { store } from "../store";
import { addResult, setRaceStatus, setRound } from "./slice";

describe("raceSlice should", () => {
    test("set init state", () => {
        const race = store.getState().race;
        expect(race).toEqual({ raceStatus: "active", round: [], results: [] });
    });
    test("should set race status", () => {
        store.dispatch(setRaceStatus("finished"));
        expect(store.getState().race.raceStatus).toBe("finished");
    });
    test("should set round", () => {
        store.dispatch(setRound([{ name: "horse-1", distance: 200 }]));
        expect(store.getState().race.round).toEqual([
            { name: "horse-1", distance: 200 },
        ]);
    });
    test("add result", () => {
        store.dispatch(addResult("horse-1"));
        expect(store.getState().race.results).toEqual(["horse-1"]);
    });
});
