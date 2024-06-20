import "../VacationCard.css";

function VacationCard(props) {
    return (
        <div id="vacation-card-container">
            <h1>{props.place}</h1>
            <h1>{props.price}</h1>
            <h1>{props.timeToGo}</h1>
        </div>
    )
}

export default VacationCard;
