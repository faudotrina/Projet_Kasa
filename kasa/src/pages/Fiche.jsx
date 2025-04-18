import { useParams } from 'react-router-dom'
import Banner from '../components/Banner/Banner.jsx'
import logements from '../data/logements.json'
import { useNavigate } from 'react-router-dom'
import Collapse from '../components/Collapse/Collapse'
import { useEffect } from 'react'
import '../styles/fiche.scss'

function Fiche() {
  const navigate = useNavigate()
  const { id } = useParams() //recupere l'id de l'URL
  const logement = logements.find((logement) => logement.id === id)

  useEffect(() => {
    if (!logement) {
      navigate('/404', { replace: true })
    }
  }, [logement, navigate])

  if (!logement) return null // empêche le rendu avant la redirection

  return (
    <>
      <section className="fiche">
        <Banner image={logement.cover} style={{ minHeight: '300px'}} />

        <div className="fiche-content">
          <div className="fiche-main">
            <h2 className='fiche-title'>{logement.title}</h2>
            <p className='fiche-paragraph'>{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag) => (
                <button key={tag}>{tag}</button>
              ))}
            </div>
          </div>

          <div className="fiche-host-rating">
            <div className="host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt="profil" />
            </div>
            <div className="rating">
              {/* on peut afficher ici des étoiles plus tard */}
              <p>{logement.rating}</p>
            </div>
          </div>
        </div>

        <div className="fiche-collapse">
          <Collapse title="Description" text={logement.description} />
          <Collapse
            title="Équipements"
            text={
              <ul>
                {logement.equipments.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </>
  )
}

export default Fiche
