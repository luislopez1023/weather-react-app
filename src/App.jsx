import data from "./data/response.json"
import WeatherCard from "./components/WeatherCard";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";


function App() {
  /** Extrae la hora actual */
  const currentHour = data.location.localtime_epoch;
  const hoursWeather = [];
  function getHoursLeft() {
    for(let i = 0; i < 24; i++){
      if(currentHour < data.forecast.forecastday[0].hour[i].time_epoch){
        hoursWeather.push(data.forecast.forecastday[0].hour[i])
      }
    }
  }
  getHoursLeft();
  return (
    <>
      <header className="flex flex-col justify-center items-center gap-4 bg-base-100 w-full lg:w-3/4 text-center p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl">Web del clima</h1>
        <form className="join join-horizontal w-full lg:w-3/4">
          <input className="join-item input p-2 bg-base-200" placeholder="Oaxaca, Mexico, Cancún ..." type="text" required />
          <button className="join-item btn btn-primary btn-outline" type="submit">Buscar</button>
        </form>
      </header>
      <section className="bg-base-100 w-max rounded-lg shadow-lg lg:w-3/4 flex flex-col justify-center items-center h-full gap-4 p-4">
        {data.location && <WeatherCard weather={data} />}
        <article className="box-border flex flex-row gap-4 w-max justify-center items-center">
          {data.forecast && <DailyForecast weather={data.forecast.forecastday[0]} />}
          {data.forecast && <DailyForecast weather={data.forecast.forecastday[1]} />}
          {data.forecast && <DailyForecast weather={data.forecast.forecastday[2]} />}
          {data.forecast && <DailyForecast weather={data.forecast.forecastday[3]} />}
          {data.forecast && <DailyForecast weather={data.forecast.forecastday[4]} />}
          {data.forecast && <DailyForecast weather={data.forecast.forecastday[5]} />}
          {data.forecast && <DailyForecast weather={data.forecast.forecastday[6]} />}
        </article>
      </section>
      <section className="bg-base-100 w-max rounded-lg shadow-lg lg:w-3/4 p-4">
        <h2>El tiempo hoy</h2>
        <section className="overflow-x-auto">
          <table className="table table-zebra">
            {/* Head */}
            <thead>
              <tr>
                <th>Hora</th>
                <th>Temperatura</th>
                <th>Condicion</th>
                <th>Viento</th>
                <th>Humedad</th>
                <th>Nubes</th>
              </tr>
            </thead>
            <tbody>
              {data.forecast.forecastday &&
              hoursWeather.map((item)=>{
                <HourlyForecast weather={item} />
              })
              }
            </tbody>
          </table>
        </section>
      </section>
    </>
  )
}

export default App
