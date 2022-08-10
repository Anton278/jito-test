import "./Card.css";
import { Horse } from "../../assets/types";

const Card: React.FC<Horse> = (props) => {
    const { name, distance } = props;

    return (
        <>
            <div className="card">
                <p className="card__title">{name}</p>
                <p>{distance} / 1000</p>
            </div>
            <hr />
        </>
    );
};

export { Card };
