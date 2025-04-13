import { Link } from 'react-router-dom'
import kasaLogo from '../../assets/images/logo.svg'
import '../../styles/header.scss'

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={kasaLogo} alt="logo" />
      </a>

      <nav className="headernav">
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/apropos" className="nav-link">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
