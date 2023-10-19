function HourlyForecast({weather}) {
  console.log(weather)
  const hora = new Date(weather.time_epoch * 1000);
  const temp = weather.temp_c;
  const condition = weather.condition.text;
  const wind = weather.wind_kph;
  const humidity = weather.humidity;
  const clouds = weather.cloud;
  return (
    <>
      <tr>
        <th className="uppercase">{hora.toLocaleTimeString("es-MX", {hour: "2-digit", minute: "2-digit", hour12: true })}</th>
        <td>{temp}°</td>
        <td>{condition}</td>
        <td>{wind} km/h</td>
        <td>{humidity}%</td>
        <td>{clouds}%</td>
      </tr>
    </>
  )
}

export default HourlyForecast