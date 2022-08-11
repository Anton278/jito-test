import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import race from "./redux/race/slice";
import { App } from "./App";

describe("App should", () => {
    test("render 'the race is over!'", () => {
        render(
            <Provider
                store={configureStore({
                    reducer: { race },
                    preloadedState: {
                        race: {
                            raceStatus: "finished",
                            round: [],
                            results: [],
                        },
                    },
                })}
            >
                <App />
            </Provider>
        );
        expect(screen.getByText("The race is over!")).toBeInTheDocument();
    });
    test("track race status", () => {
        const store = configureStore({
            reducer: { race },
            preloadedState: {
                race: {
                    raceStatus: "active",
                    round: [{ name: "horse-1", distance: 1000 }],
                    results: [],
                },
            },
        });
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(store.getState().race.raceStatus).toBe("finished");
    });
    test("track results", () => {
        const store = configureStore({
            reducer: { race },
            preloadedState: {
                race: {
                    raceStatus: "active",
                    round: [
                        { name: "horse-1", distance: 1000 },
                        { name: "horse-2", distance: 800 },
                    ],
                    results: [],
                },
            },
        });
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(store.getState().race.results).toEqual(["horse-1"]);
    });
    test("render cards", () => {
        render(
            <Provider
                store={configureStore({
                    reducer: { race },
                    preloadedState: {
                        race: {
                            raceStatus: "active",
                            round: [
                                { name: "horse-1", distance: 200 },
                                { name: "horse-2", distance: 300 },
                            ],
                            results: [],
                        },
                    },
                })}
            >
                <App />
            </Provider>
        );
        expect(screen.getByTestId("cardsWrapp").childElementCount).toBe(4); // because of <hr />
    });
});
