import wind from "../../public/viento.png";
import humedad from "../../public/humedad.png"

function WeatherCard({weather}) {
    const data = weather;
    /** Define localización */
    const location = data.location.name;
    const region = data.location.region;
    const country = data.location.country;
    /** Define clima actual  */
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const viento = data.current.wind_kph;
    const humidity = data.current.humidity;
    return (
    <>
        <article className="w-full h-full">
          <h3 className="text-xl text-left">{location}, {region}, {country}</h3>
          <section className="flex flex-row justify-center items-center gap-4">
            <h2 className="text-6xl lg:text-9xl font-bold lg:py-4">{temp} °C</h2>
            <article className="flex flex-col justify-center items-center gap-1">
            <div className="flex flex-row justify-start items-center gap-1">
              <img className="w-6 h-6" src={wind} alt="Icono velocidad del viento" />
              <p>{viento} kph</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-1">
              <img className="w-6 h-6" src={humedad} alt="Icono humedad" />
              <p>{humidity} %</p>
            </div>
            </article>
          </section>
          <h3 className="text-center text-sm lg:text-2xl lg:pt-4">{condition}</h3>
        </article>
    </>
  )
}

export default WeatherCard