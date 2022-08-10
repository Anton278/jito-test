import "./Results.css";

import { useSelector } from "react-redux";
import { selectResults } from "../../redux/race/selectors";

const Results = () => {
    const results = useSelector(selectResults);

    return (
        <div className="results">
            <h4 className="results__title">Results</h4>
            <ul className="results__list">
                {results.map((horseName: string) => (
                    <li key={horseName} className="results__list-item">
                        {horseName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { Results };
