import Card from "./Card"
import profilePic from "./assets/gattu.jpg"
import shubhamPic from "./assets/shubhamPic.jpg"
import prachiPic from "./assets/prachiPic.jpg"

import CrimeList from "./CrimeList.jsx"
import Button from "./Button.jsx"


function App() {
  const citiesIndia = [{ id: 1, country: "India", cityName: "Mumbai", chances: 60 },
  { id: 2, country: "India", cityName: "Pune", chances: 70 },
  { id: 3, country: "India", cityName: "Banglore", chances: 60 },
  { id: 4, country: "India", cityName: "Delhi", chances: 80 }]
  const citiesUS = [{ id: 1, country: "US", cityName: "Scranton", chances: 60 },
  { id: 2, country: "US", cityName: "Newyork", chances: 70 },
  { id: 3, country: "US", cityName: "Miami", chances: 60 },
  { id: 4, country: "US", cityName: "Vegas", chances: 80 }]
  const isFBI = true;
  return (
    <>
      <div className="main-container">
        {isFBI ? <><h3 className="FBI-Log-Message">FBI Logged In</h3>
          <h1>Most Wanted List 💀</h1>
          <div className="group">
            <Card name="Gattu" age={4} profilePic={profilePic} />
            <Card name="Shubham" age={24} profilePic={shubhamPic} />
            <Card name="Prachi" age={21} profilePic={prachiPic} /></div>
            <Button />
          <div className="crime-city-list">
            {citiesIndia.length > 0 && <CrimeList items={citiesIndia} location="Locations in India" />}
            {citiesUS.length > 0 && <CrimeList items={citiesUS} location="Locations in US" />}

          </div></>
          : <h3 className="No-FBI-MEssage">Please Log In</h3>}
      </div>
    </>
  )
}

export default App
