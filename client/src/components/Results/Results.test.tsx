import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Results } from "./Results";
import race from "../../redux/race/slice";

describe("Results should", () => {
    test("render empty resultsList", () => {
        render(
            <Provider store={configureStore({ reducer: { race } })}>
                <Results />
            </Provider>
        );
        expect(screen.getByTestId("resultsList").childElementCount).toBe(0);
    });
    test("render resultsList", () => {
        render(
            <Provider
                store={configureStore({
                    reducer: { race },
                    preloadedState: {
                        race: {
                            results: ["horse-1", "horse-2", "horse-3"],
                            raceStatus: "active",
                            round: [],
                        },
                    },
                })}
            >
                <Results />
            </Provider>
        );
        expect(screen.getByTestId("resultsList").childElementCount).toBe(3);
    });
});
