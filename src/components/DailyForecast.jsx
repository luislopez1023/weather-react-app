import DailyItem from "./DailyItem";

function DailyForecast({weather}) {
  const dailyWeather = weather;
  return (
    <section className="flex flex-row flex-wrap place-content-center gap-4">
      <DailyItem text={"HOY"} data={dailyWeather[0]}/>
      <DailyItem text={"MAÑANA"} data={dailyWeather[1]}/>
      <DailyItem data={dailyWeather[2]}/>
    </section>
  )
}

export default DailyForecast