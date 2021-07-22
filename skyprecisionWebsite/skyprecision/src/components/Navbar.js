import React,  { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Icon from './icon.svg'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setbutton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setbutton(false)
    } else {
      setbutton(true)
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo" onClick={closeMobileMenu}>
            <img className='navbar-icon'
              src={Icon} alt='icon'
              width='auto'
              height='60px'
              position='flex' />
            SKYPRECISION
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Team
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn-outline'>LOG-IN</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn-outline'
                      buttonSize='btn-mobile'
                      onClick={closeMobileMenu}
                    >
                      LOG-IN
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
