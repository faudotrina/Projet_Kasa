import '../../styles/banner.scss'

function Banner({ image, text, className = '' }) {
  return (
    <section
      className={`banner ${className}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="banner-text">{text}</h1>
    </section>
  )
}

export default Banner
