import { Horse } from "../../assets/types";

export interface InitState {
    raceStatus: "active" | "finished";
    round: Horse[];
    results: string[];
}
