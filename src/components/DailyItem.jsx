function DailyItem({data, text}) {
    const date = new Date(data.date_epoch * 1000).toLocaleDateString(undefined, {weekday: "long"})
    const temp_min = data.day.mintemp_c;
    const temp_max = data.day.maxtemp_c;
    const temp = data.day.avgtemp_c;
    const condition = data.day.condition.text;
    const precip = data.day.totalprecip_mm;
    const img = `https:${data.day.condition.icon}`
  return (
    <section className="w-44 bg-base-100 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
        <p>{text ? text : date.toUpperCase()}</p>
        <img src={img} alt={condition} />
        <p>{temp}°</p>
        <p><span className="text-error">{temp_max}°</span>/<span className="text-info">{temp_min}°</span></p>
        <p className="text-sm text-center">{condition}</p>
        <p className="text-sm">{precip} mm</p>
    </section>
  )
}

export default DailyItem