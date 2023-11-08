import HourlyItem from "./HourlyItem"

function HourlyForecast({clima, currentHour}) {
  /** Extrae las horas restantes del dia para mostrar el clima de ellas */
  const hours = clima;
  const hoursWeather = hours.filter((hour)=> hour.time_epoch >= currentHour);
  const listLeftHourWeather = hoursWeather.map(item =>
    <tr key={item.time_epoch} >
      <HourlyItem 
        time={item.time_epoch} 
        temp={item.temp_c} 
        condition={item.condition.text} 
        cloud={item.cloud} 
        wind={item.wind_kph} 
        wind_dir={item.wind_dir}/>
    </tr>
    );
  return (
    <section className="mx-auto bg-base-200 w-max rounded-lg shadow-lg p-4">
      <h2 className="my-4 text-2xl font-bold">El tiempo hoy</h2>
      <table className="table">
        {/* Head */}
        <thead>
          <tr>
            <th className="w-10 sm:w-max">Hora</th>
            <th>Temp.</th>
            <th className="w-10 sm:w-max border-r rounded-r pr-2 sm:border-0 sm:rounded-none sm:pr-0">Condición</th>
            <th className="hidden sm:table-cell text-sm">Nubosidad</th>
            <td className="hidden sm:table-cell text-sm bg-gray-3  sm:border-r sm:rounded-r lg:border-r-0 lg:rounded-none">Viento</td>
            <td className="hidden lg:table-cell text-sm bg-gray-3 border-r rounded-r pr-2">Dirección del viento</td>
          </tr>
        </thead>
        <tbody>
          {hoursWeather ? listLeftHourWeather : <p className="font-bold">Nada que mostrar</p>}
        </tbody>
      </table>
  </section>
  )
}

export default HourlyForecast