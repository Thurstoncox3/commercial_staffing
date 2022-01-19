import { Link } from 'react-router-dom';

const Header = () => (
    <div className='nav-wrapper'>
        <nav className='nav'>
            <Link to='/' className='nav-link'><p>Home</p></Link>
            <Link to='/about' className='nav-link'><p>About</p></Link>
            <Link to='/contact' className='nav-link'><p>Contact</p></Link>
        </nav>
    </div>
);

export default Header;