function Cards() {
  const nbCarres = 6

  return (
    <>
      {Array.from({ length: nbCarres }).map((_, i) => (
        <div key={i} className="petit-carre">
          <p className="text-carre">Titre de la location</p>
        </div>
      ))}
    </>
  )
}

export default Cards
