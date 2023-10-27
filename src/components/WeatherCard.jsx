import wind from "../images/viento.png";
import humedad from "../images/humedad.png"

function WeatherCard({weather}) {
    /** Define localización */
    const location = weather.location.name;
    const region = weather.location.region;
    const country = weather.location.country;
    /** Define clima actual  */
    const temp = weather.current.temp_c;
    const condition = weather.current.condition.text;
    const viento = weather.current.wind_kph;
    const humidity = weather.current.humidity;
    return (
    <>
        <article className="flex flex-col justify-center items-center gap-4 bg-base-100 rounded-lg shadow-lg p-4">
          <h3 className="text-xl">{location}, {region}, {country}</h3>
          <section className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-6xl lg:text-8xl font-bold lg:py-4 text-primary">{temp}°</h2>
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