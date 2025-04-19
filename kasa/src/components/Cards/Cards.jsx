import '../../styles/cards.scss'

function Cards({ props }) {
  return (
    <>
      {props.map((prop) => (
        <article key={prop.id} className="petit-carre">
          <img
            src={prop.cover}
            alt={prop.title}
            className="image-carre"
          />
          <p className="text-carre">{prop.title}</p>
        </article>
      ))}
    </>
  )
}

export default Cards
