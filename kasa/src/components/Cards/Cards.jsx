import '../../styles/cards.scss'

function Cards({ logements }) {
  return (
    <>
      {logements.map((logement) => (
        <article key={logement.id} className="petit-carre">
          <img
            src={logement.cover}
            alt={logement.title}
            className="image-carre"
          />
          <p className="text-carre">{logement.title}</p>
        </article>
      ))}
    </>
  )
}

export default Cards
