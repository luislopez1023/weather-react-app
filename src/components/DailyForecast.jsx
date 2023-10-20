function DailyForecast({weather}) {
  console.log(weather)
  const daysWeather
  /**
  const date = new Date(weather.date_epoch * 1000);
  const precip = weather.day.totalprecip_mm;
  
  const temp_max = weather.day.maxtemp_c;
  const temp_min = weather.day.mintemp_c;
  const temp = Math.round((temp_max + temp_min)/2)
  */
  return (
    {/**
      <section className="rounded-lg shadow-lg p-4 w-max h-max flex flex-col gap-4 justify-center items-center">
      <p>{date.toLocaleDateString("es-MX", {timeZone: "UTC", })}</p>
      <p className="text-2xl font-bold">{temp}°</p>
      <p className="text-xs">{precip} mm</p>
      <article className="text-center">
        <p className="text-xs"><span className="text-error">{temp_max}°</span>/<span className="text-info">{temp_min}°</span></p>
      </article>
    </section>
  */}
  )
}

export default DailyForecast