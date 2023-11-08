
function HourlyItem({time, temp, condition, cloud, wind, wind_dir}) {
  const date = new Date(time * 1000).toLocaleTimeString("es-MX", {hour: "2-digit", minute: "2-digit"})
  return (
    <>
      <td>{date}</td>
      <td>{temp}°</td>
      <td className="w-10 sm:w-max">{condition}</td>
      <td className="hidden sm:table-cell">{cloud}%</td>
      <td className="hidden sm:table-cell">{wind} km/h</td>
      <td className="hidden lg:table-cell">{wind_dir}</td>
    </>
  )
}

export default HourlyItem