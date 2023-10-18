import data from "./data/response.json"
import WeatherCard from "./components/WeatherCard";

function App() {
  const weather = data;
  return (
    <>
      <header className="flex flex-col justify-center items-center gap-4 bg-base-100 w-full lg:w-3/4 text-center m-4 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl">Web del clima</h1>
        <form className="join join-horizontal lg:join-horizontal w-full lg:w-3/4">
          <input className="join-item input w-full p-2 bg-base-200" placeholder="Oaxaca, Mexico, Cancún ..." type="text" required />
          <button className="join-item btn btn-primary btn-outline" type="submit">Buscar</button>
        </form>
      </header>
      <section className="flex flex-col justify-center items-center min-h-full">
        {data.location && <WeatherCard weather={data} />}
      </section>
    </>
  )
}

export default App
