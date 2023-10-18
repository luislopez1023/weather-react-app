

function DailyForecast({weather}) {
  console.log(weather)
  const date = new Date(weather.date_epoch * 1000)
  const temp = weather.day.maxtemp_c - weather.day.mintemp_c;
  return (
    <section className="">
      <p>{date.toLocaleString("es-MX", {hour12: true, timeZone: "UTC"})}</p>
      <p>{temp}</p>
    </section>
  )
}

export default DailyForecast