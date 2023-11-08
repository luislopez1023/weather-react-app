import NoLocation from "../../public/no_location.png"
function Error({error}) {
  return (
    <section className="h-[60vh] flex flex-col place-content-center gap-4">
        <img className="w-32 self-center" src={NoLocation} alt={error} />
        <p className="text-error font-bold">No se encontraron ubicaciones</p>
    </section>
  )
}
export default Error