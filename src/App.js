import { useState, useEffect } from 'react';
import './App.css';
import react from 'react-dom'
import axios from 'axios';
function App() {
  //   var longu = 0;
  const [location, set_location] = useState(false);
  const [weather, set_wheather] = useState(false);
  const [temperatura, set_temperatura] = useState();
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
    // console.log(res.data)
    // console.log(res.data)
    // console.log(res.main)
  }

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      set_location(true)
    })
  }, [])

  if (location == false) {
    return (
      <>
        Você precisa habilitar a localização no browser o/
      </>
          )
  } else {
    return (
      <>
        <h3>Clima nas suas Coordenadas (Exemplo)</h3>
        <hr />
        <ul>
          <li>Temperatura atual: x°{console.log(weather)}</li>
          <li>Temperatura máxima: x°{weather?.name}</li>
          <li>Temperatura minima: x°</li>
          <li>Pressão: x hpa</li>
          <li>Umidade: x%</li>
        </ul>
      </>
    );
  }
}

export default App;
