import '../../styles/banner.scss'
import mer from '../../assets/images/mer.png'

function Cover() {
  return (
    <section
      className="cover"
      style={{
        backgroundImage: `url(${mer})`,
      }}
    >
      <h1 className="cover-text">Chez vous, partout et ailleurs</h1>
    </section>
  )
}

export default Cover
