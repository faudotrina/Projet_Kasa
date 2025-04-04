import '../../styles/App.scss'
import '../../styles/error.scss'
import '../../styles/cards.scss'

function App() {
  const nbCarres = 6

  return (
    <div className="grand-carre">

      {Array.from({ length: nbCarres }).map((_, i) => (
        <div key={i} className="petit-carre">
          <p className='text-carre'>Titre de la location</p>
        </div>
      ))}
      
    </div>
  )
}

export default App
