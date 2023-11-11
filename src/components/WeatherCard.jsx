import { formatHourDate } from "../services/formatDate";
import WeatherCardItem from "./WeatherCardItem";

function WeatherCard({location, region, country, time, temp, condition, viento, humidity, cloud, precip}) {
    return (
    <>
        <article className="bg-base-100 flex flex-row flex-wrap items-center justify-evenly gap-4 bg-gray-2 rounded-lg shadow-lg p-4 lg:py-12 w-3/4">
          <section className="font-bold text-center">
            <h3 className="text-xl">{location}, {region}, {country}</h3>
            <h3>{formatHourDate(time)}</h3>
            <h2 className="text-6xl font-bold text-primary">{temp}°</h2>
            <h3 className="text-center text-sm lg:text-2xl lg:pt-4">{condition}</h3>
          </section>
          <section className="flex flex-row flex-wrap place-content-center gap-4 w-72">
            <WeatherCardItem
              title="Viento"
              value={viento}
              unit="km/h"
            />
            <WeatherCardItem 
              title="Humedad"
              value={humidity}
              unit="%"
            />
            <WeatherCardItem 
              title="Nubosidad"
              value={cloud}
              unit="%"
            />
            <WeatherCardItem 
              title="Precipitación"
              value={precip}
              unit="mm"
            />
          </section>
        </article>
    </>
  )
}

export default WeatherCard