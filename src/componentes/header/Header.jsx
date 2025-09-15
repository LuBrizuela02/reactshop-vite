import './header.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header className="site-header">
            <h1> <Link to="/">React Shop</Link></h1>
            <nav className='nav'>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/registro">Registro</Link></li>
                    <li> <Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header