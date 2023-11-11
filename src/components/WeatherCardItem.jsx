function WeatherCarditem({title, value, unit}) {
  return (
    <section className="w-32 bg-base-100 hover:scale-110 hover:bg-base-200 duration-150 p-4 rounded-lg shadow-lg">
      <p className="font-bold">{title}</p>
      <p>{value} <span>{unit}</span></p>
    </section>
  )
}
export default WeatherCarditem