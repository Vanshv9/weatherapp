import React,{useEffect, useState} from "react";
import axios from "axios";




function App() {
  const [location,setLocation] = useState('');
  const [data,setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bc8191350edeee2fbcf7fcdee9407ebf`;

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
     })

     setLocation('');
    }
  }
  return (
    <div className="app"> 
      <div className="search">
        <input type="text"
         value= {location}
          onChange = {event => setLocation(event.target.value)}
          placeholder="Search Location"
          onKeyPress={searchLocation}>
          </input>
      </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            {data.name != undefined && 
           <div className="date"> {new Date().toLocaleString()} </div>}
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}&deg;C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name != undefined && 
           <div className="bottom">
           <div className="feels">
             {data.main ? <p className="bold">{data.main.feels_like.toFixed()}&deg;C</p>:null}
             <p>Feels Like</p>
           </div>
           <div className="humidity">
             {data.main ? <p className="bold">{data.main.humidity}%</p>:null}
             <p>Humidity</p>
           </div>
           <div className="wind">
             {data.wind ? <p className="bold">{data.wind.speed} KMPH</p>:null}
             <p>Wind speed</p>
           </div>
         </div>
          }
        </div>
     </div>
  );
}

export default App;
