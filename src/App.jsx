import WeatherCard from "./components/WeatherCard";
/** Pendiente agregar DailyForecast,jsx */
import HourlyForecast from "./components/HourlyForecast";
import { useState } from "react";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState("");
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState('')

  const API_KEY = "993ba42994fe47b4a1e191246232010";
  function handleSubmit(event) {
    isLoading(true);
    setError("");
    setData("")
    event.preventDefault();
    getWeather(API_KEY);
  }
  function getWeather(API_KEY) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&lang=es`)
      .then(resolve => resolve.json())
      .then(res => {
        if(res.error) {
          setError(res.error.message)
        }
        else {
          setData(res)
        }})
      .catch(err => setError(err))
      .finally(()=> isLoading(false))
    
  }
  return (
    <>
      <header className="flex flex-col justify-center items-center gap-4 bg-base-100 w-full sm:w-3/4 text-center p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl">Web del clima</h1>
        <form id="weather_app" onSubmit={handleSubmit} className="w-full flex flex-row place-content-center join">
          <input name="weather_app" value={city} onChange={(e) => setCity(e.target.value)} className="input input-sm join-item w-1/2" placeholder="Oaxaca, Mexico, Cancún ..." type="search" required />
          <button name="weather_app" className="btn btn-primary btn-sm join-item" type="submit">Buscar</button>
        </form>
      </header>
      {error ? <Error error={error} /> : ""}
      {loading && <Loader />}
      {data.current ? <WeatherCard
        location={data.location.name}
        region={data.location.region}
        country={data.location.country}
        time={data.location.localtime_epoch}
        temp={data.current.temp_c}
        condition={data.current.condition.text}
        viento={data.current.wind_kph}
        humidity={data.current.humidity}
        cloud={data.current.cloud}
        precip={data.current.precip_mm}
      />
       : ""}

      {data.forecast ? <HourlyForecast
        clima={data.forecast.forecastday[0].hour} 
        currentHour={data.location.localtime_epoch}
      />
       : ""}
    </>
  )
}

export default App