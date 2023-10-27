import DailyItem from "./DailyItem";

function DailyForecast({weather}) {
  const dailyWeather = weather;
  return (
    <section className="flex flex-row flex-wrap gap-4">
      <DailyItem data={dailyWeather[0]}/>
      <DailyItem data={dailyWeather[1]}/>
      <DailyItem data={dailyWeather[2]}/>
    </section>
  )
}

export default DailyForecast