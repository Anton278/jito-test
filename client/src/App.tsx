import "./App.css";

import { io } from "socket.io-client";

import { useSelector } from "react-redux";
import {
    selectRaceStatus,
    selectResults,
    selectRound,
} from "./redux/race/selectors";
import { useAppDispatch } from "./redux/store";
import { addResult, setRaceStatus, setRound } from "./redux/race/slice";

import { Card } from "./components/Card";
import { Results } from "./components/Results";

import { useEffect } from "react";

import { Horse } from "./assets/types";

const socket = io("http://localhost:3002");

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const round = useSelector(selectRound);
    const raceStatus = useSelector(selectRaceStatus);
    const results = useSelector(selectResults);

    useEffect(() => {
        socket.emit("start");
        socket.on("ticker", (round: Horse[]) => {
            dispatch(setRound(round));
        });
    }, [dispatch]);

    useEffect(() => {
        const trackRaceStatus = () => {
            let isRaceFinished = false;
            if (round.length)
                isRaceFinished = round.every(
                    (horse: Horse) => horse.distance === 1000
                );
            if (isRaceFinished) {
                dispatch(setRaceStatus("finished"));
            }
        };
        const trackResults = () => {
            round.forEach((horse: Horse) => {
                const isHorseFinished = results.find(
                    (horseName: string) => horseName === horse.name
                );
                if (horse.distance === 1000 && !Boolean(isHorseFinished)) {
                    dispatch(addResult(horse.name));
                }
            });
        };

        trackRaceStatus();
        trackResults();
    }, [dispatch, results, round]);

    useEffect(() => {
        if (raceStatus === "finished") {
            socket.removeAllListeners();
        }
    }, [raceStatus]);

    return (
        <>
            <h1>Horse betting status</h1>
            {raceStatus === "finished" ? <h2>The race is over!</h2> : null}
            <div className="wrapp">
                <div className="cards-wrapp">
                    {round.map((horse: Horse) => (
                        <Card {...horse} key={horse.name} />
                    ))}
                </div>
                <Results />
            </div>
        </>
    );
};

export { App };
