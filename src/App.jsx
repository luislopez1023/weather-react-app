import data from "./data/response.json"
import WeatherCard from "./components/WeatherCard";
/** Pendiente agregar DailyForecast,jsx */
import DailyForecast from "./components/DailyForecast";
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
          console.log(res)
        }})
      .catch(err => setError(err))
      .finally(()=> isLoading(false))
    
  }
  return (
    <>
      <header className="flex flex-col justify-center items-center gap-4 bg-gray-2 w-full lg:w-3/4 text-center p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl">Web del clima</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-row place-content-center">
          <input value={city} onChange={(e) => setCity(e.target.value)} className="input input-solid p-2 rounded-r-none rounded-l-2xl" placeholder="Oaxaca, Mexico, Cancún ..." type="search" required />
          <button className="btn btn-primary rounded-l-none rounded-r-2xl" type="submit">Buscar</button>
        </form>
      </header>
      {error ? <Error error={error} /> : ""}
      {loading && <Loader />}
      {data.current ? <WeatherCard weather={data}/> : ""}
      {data.forecast ? <DailyForecast weather={data.forecast.forecastday}/> : ""}
      {data.forecast ? <HourlyForecast clima={data.forecast.forecastday[0].hour} currentHour={data.location.localtime_epoch}/> : ""}
    </>
  )
}

export default App