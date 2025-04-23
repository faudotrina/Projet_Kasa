import Banner from '../components/Banner/Banner.jsx'

import logements from '../data/logements.json'

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse/Collapse'
import '../styles/fiche.scss'

import { Star } from 'lucide-react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

function Fiche() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!logement) {
    return <div>Logement introuvable</div>
  }

  const next = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % logement.pictures.length,
    )
  }

  const prev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + logement.pictures.length) % logement.pictures.length,
    )
  }

  return (
    <>
      <section className="fiche">
        <div className="banner-wrapper">
          <Banner
            image={logement.pictures[currentImageIndex]}
            className="banner-fiche"
          />
          <span className='nombreImage'>{currentImageIndex + 1 % logement.pictures.length} / {logement.pictures.length}</span>
          <div className="chevron chevron-left">
            <ChevronLeft size={150} onClick={prev} />
          </div>
          <div className="chevron chevron-right">
            <ChevronRight size={150} onClick={next} />
          </div>
        </div>

        <div className="fiche-content">
          <div className="fiche-main">
            <h2 className="fiche-title">{logement.title}</h2>
            <p className="fiche-paragraph">{logement.location}</p>
            <div className="fiche-tags">
              <div className="tags">
                {logement.tags.map((tag) => (
                  <span key={tag} className="tags-name">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="fiche-host">
            <div className="host">
              <p className="host-p">{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt="profil"
                className="host-picture"
              />
            </div>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  color={index < logement.rating ? '#FF6060' : '#E3E3E3'}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="fiche-collapse">
          <Collapse
            className="collapse-block"
            title="Description"
            text={logement.description}
          />
          <Collapse
            className="collapse-block"
            title="Équipements"
            text={
              <ul className="liste-equipements">
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
