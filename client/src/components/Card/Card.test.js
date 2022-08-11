import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import race from "../../redux/race/slice";
import { Card } from "./Card";

describe("Card should", () => {
    test("render with props", () => {
        render(
            <Provider store={configureStore({ reducer: race })}>
                <Card name="horse-1" distance={200} />
            </Provider>
        );
        expect(screen.getByText("horse-1")).toBeInTheDocument();
        expect(screen.getByText("200 / 1000")).toBeInTheDocument();
    });
    test("render without props correctly", () => {
        render(
            <Provider store={configureStore({ reducer: race })}>
                <Card />
            </Provider>
        );
        expect(screen.getByTestId("cardTitle").innerText).toBeUndefined();
        expect(screen.getByTestId("cardDistance").innerText).toBeUndefined();
    });
});
