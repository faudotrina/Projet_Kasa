import '../../styles/banner.scss'

function Cover({ image, text }) {
  return (
    <section
      className="cover"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="cover-text">{text}</h1>
    </section>
  )
}

export default Cover
