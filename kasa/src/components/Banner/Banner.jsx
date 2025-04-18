import '../../styles/banner.scss'

function Banner({ image, text }) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="banner-text">{text}</h1>
    </section>
  )
}

export default Banner
