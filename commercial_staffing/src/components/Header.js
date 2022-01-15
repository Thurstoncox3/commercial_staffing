import { Link } from 'react-router-dom';

const Header = () => (
    <div className='nav-wrapper'>
        <nav className='nav'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
        </nav>
    </div>
);

export default Header;