/* eslint-disable react/jsx-key */

import './App.css'
import VacationCard from './components/VacationCard';

function App() {
  
  let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",    price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]
  

  return (
    <>
      <div id="app-container">
        <ul>
          {vacationSpots.map((spot) => {
            
            return (
            <li><VacationCard
                  place={spot.place}
                  price={spot.price}
                  timeToGo={spot.timeToGo} 
                />
            </li>
          )})}
        </ul>
      </div>
    </>
  )
}

export default App
