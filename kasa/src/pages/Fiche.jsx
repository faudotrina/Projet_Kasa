import { useParams } from 'react-router-dom'
import Banner from '../components/Banner/Banner.jsx'
import logements from '../data/logements.json'
import { useNavigate } from 'react-router-dom'
import Collapse from '../components/Collapse/Collapse'
import { useEffect, useState } from 'react'
import '../styles/fiche.scss'
import { Star } from 'lucide-react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

function Fiche() {
  const navigate = useNavigate()
  const { id } = useParams() // récupère l'id de l'URL
  const currentIndex = logements.findIndex((logement) => logement.id === id)
  const logement = logements[currentIndex]

  const goToNextLogement = () => {
    const nextIndex = (currentIndex + 1) % logements.length
    const nextId = logements[nextIndex].id
    navigate(`/fiche/${nextId}`)
  }

  const goToPreviousLogement = () => {
    const prevIndex = (currentIndex - 1 + logements.length) % logements.length
    const prevId = logements[prevIndex].id
    navigate(`/fiche/${prevId}`)
  }

  useEffect(() => {
    if (currentIndex === -1) {
      navigate('/404', { replace: true })
    }
  }, [currentIndex, navigate])

  if (currentIndex === -1) return null // empêche le rendu avant la redirection

  return (
    <>
      <section className="fiche">
        <div className="banner-wrapper">
          <Banner image={logement.cover} className="banner-fiche" />
          <div className="chevron chevron-left">
            <ChevronLeft
              size={150}
              color="white"
              onClick={goToPreviousLogement}
            />
          </div>
          <div className="chevron chevron-right">
            <ChevronRight size={150} color="white" onClick={goToNextLogement} />
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
