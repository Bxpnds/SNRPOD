import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(click);
    const  closeMobileMenu = () => setClick(false);
    return (
    

    <>
        <nav className="navBar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    SNR THE PODCAST <i className='fab fa-typo3' />
                </a>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href ='/' className='nav-links' onClick={closeMobileMenu}>
                            Home 
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href ='/Snackin' className='nav-links' onClick={closeMobileMenu}>
                            Snackin 
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Rappin' className='nav-links' onClick={closeMobileMenu}>
                            Rappin 
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-links' onClick={closeMobileMenu}>
                            Merch
                        </a>
                    </li>
                </ul>``
            </div>
        </nav>
    </>
    );
}

export default NavBar
