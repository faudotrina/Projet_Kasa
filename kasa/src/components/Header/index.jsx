import { Link } from 'react-router-dom'
import kasaLogo from '../../assets/images/logo.svg'
 
function Header() {
    return (
        <header className='header'>
        <img src={kasaLogo} alt="logo" />

        <nav className='headernav'>
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/survey" className="nav-link">A Propos</Link>
        </nav>
        </header>
    )
}

export default Header