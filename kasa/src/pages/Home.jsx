import Cards from '../components/Cards/Cards'
import logements from '../data/logements.json'
import Banner from '../components/Banner/Banner.jsx'
import mer from '../assets/images/mer.png'

function Home() {
  return (
    <>
      <Banner image={mer} text={'Chez vous, partout et ailleurs'} />
      <section className="grand-carre">
        <Cards props={logements} />
      </section>
    </>
  )
}

export default Home
