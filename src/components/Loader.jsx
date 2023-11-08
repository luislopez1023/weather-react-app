function Loader() {
  return (
    <section className="flex flex-col place-content-center h-[50vh]">
        <svg className="spinner-ring spinner-primary spinner-xl" viewBox="25 25 50 50" strokeWidth="5">
          <circle cx="50" cy="50" r="20" />
        </svg>
    </section>
  )
}

export default Loader