import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <header className='header'>
        <h1>Kasa</h1>

        <nav className='headernav'>
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/survey" className="nav-link">A Propos</Link>
        </nav>
        </header>
    )
}

export default Header