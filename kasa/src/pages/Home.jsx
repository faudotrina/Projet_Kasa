import Cards from '../components/Cards/Cards'
import logements from '../data/logements.json'

function Home() {
  return (
    <section className="grand-carre">
      <Cards logements={logements} />
    </section>
  )
}

export default Home
