function HourlyForecast({clima, currentHour}) {
  const data = clima;
  /** Extrae las horas restantes del dia para mostrar el clima de ellas */
  const hoursWeather = [];
  function getHoursLeft() {
    for(let i = 0; i < 24; i++){
      if(currentHour <= data[i].time_epoch){
        hoursWeather.push(data[i])
      }
    }
  }
  getHoursLeft();
  const listLeftHourWeather = hoursWeather.map(item => 
    <tr key={item.time_epoch}>
      <td className="uppercase">
        {item.time}
      </td>
      <td>{item.temp_c}°</td>
      <td>{item.condition.text}</td>
    </tr>
    );
  return (
    <section className="mx-auto bg-base-100 w-max rounded-lg shadow-lg p-4">
      <h2>El tiempo hoy</h2>
      <table className="table table-zebra">
        {/* Head */}
        <thead>
          <tr>
            <th>Hora</th>
            <th>Temp.</th>
            <th className="w-10">Condición</th>
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