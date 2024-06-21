/* eslint-disable react/prop-types */
import "../VacationCard.css";

function VacationCard(props) {
    return (
        <div id="vacation-card-container" 
        style={{ backgroundColor: props.timeToGo === "Spring" ? "green" : props.timeToGo === "Summer" ? "yellow" 
            : props.timeToGo === "Fall" ? "brown" : "white"
         }}
        >
            <h1>{props.place}</h1>
            <h1>{props.price < 500 ? "$" : props.price < 1000 ? "$$" : "$$$"}</h1>
            <h1>{props.timeToGo}</h1>
        </div>
    )
}

export default VacationCard;
