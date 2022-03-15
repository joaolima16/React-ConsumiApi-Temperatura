import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/Card';
function UsingApi() {
  const [location, set_location] = useState(false);
  const [weather, set_wheather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: lat,
          lon: long,
          appid: "246e721ddcd748f9acfe8943a2176f02",
          lang: "pt",
          units: "metric"
      }
    });

    set_wheather(res.data)
  }

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
        set_location(true)
        
      
    })
  }, [])

  if (location === false) {
    return (
      <>
        Você precisa habilitar a localização no browser o/
      </>
          )
  } else {
        if(Number(weather['main']?.temp_max) > 20){
          console.log("passei aqui")
          
        }
    return (
      <>
      {console.log(weather)}
        
        <Card cidade={weather?.name} tempmax={weather['main']?.temp_max} 
              tempmin={weather['main']?.temp_min} pressao={weather['main']?.pressure} 
              umidade={weather['main']?.humidity}
              descricao={weather.weather?.[0].description}
        />
      </>
    );
  }
}

export default UsingApi;
