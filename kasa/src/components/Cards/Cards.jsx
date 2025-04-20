import '../../styles/cards.scss'
import { Link } from 'react-router-dom'

function Cards({ props }) {
  return (
    <section className="grand-carre">
      {props.map((prop) => (
        <Link to={`/fiche/${prop.id}`} key={prop.id}>
          <article className="petit-carre">
            <img src={prop.cover} alt={prop.title} className="image-carre" />
            <p className="text-carre">{prop.title}</p>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default Cards
