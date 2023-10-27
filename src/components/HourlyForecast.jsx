
function HourlyForecast({clima, currentHour}) {
  /** Extrae las horas restantes del dia para mostrar el clima de ellas */
  const hours = clima;
  const hoursWeather = hours.filter((hour)=> hour.time_epoch >= currentHour);
  const listLeftHourWeather = hoursWeather.map(item =>
    <tr key={item.time_epoch} >
      <td>{item.time}</td>
      <td>{item.temp_c}°</td>
      <td>{item.condition.text}</td>
      <td className="hidden sm:table-cell">{item.cloud}%</td>
    </tr>
    );
  return (
    <section className="mx-auto bg-base-100 w-max rounded-lg shadow-lg p-4">
      <h2>El tiempo hoy</h2>
      <table className="table table-zebra">
        {/* Head */}
        <thead>
          <tr>
            <th className="w-10 sm:w-max">Hora</th>
            <th>Temp.</th>
            <th className="w-10 sm:w-max">Condición</th>
            <th className="hidden sm:table-cell">Nubosidad</th>
          </tr>
        </thead>
        <tbody>
          {listLeftHourWeather}
        </tbody>
      </table>
  </section>
  )
}

export default HourlyForecast