import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../../sass/main.scss';

const Navbar = () => {

    const location = useLocation();
    const currentRoute = location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/'>
                        Accueil
                    </Link>
                </li>    
                    <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/about'>
                        A propos
                    </Link>                
                </li>                
            </ul>
        </nav>
    )
}

export default Navbar;