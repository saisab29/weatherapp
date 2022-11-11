import React, { useState } from "react";
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=fd1072f00c319fc31615c1b9c01b11d9`

  const searchLoacation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className="app">
      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLoacation} placeholder='Enter Loacation' type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}

          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}

          </div>
        </div>


        {data.name != undefined && <div className="bottom">
          <div className="feels">

            <p>Feels like</p>
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}


          </div>


          <div className="humidity">

            <p>Humididty</p>
            {data.main ? <p className="bold">{data.main.humidity}</p> : null}

          </div>
          <div className="wind">
            <p>Wind Speed</p>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
          </div>
        </div>}



      </div>


    </div>

  );
}

export default App;
