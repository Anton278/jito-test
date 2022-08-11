import "./Card.css";
import { Horse } from "../../assets/types";

const Card: React.FC<Horse> = (props) => {
    const { name, distance } = props;

    return (
        <>
            <div className="card">
                <p className="card__title" data-testid="cardTitle">
                    {name}
                </p>
                <p data-testid="cardDistance">{distance} / 1000</p>
            </div>
            <hr />
        </>
    );
};

export { Card };
