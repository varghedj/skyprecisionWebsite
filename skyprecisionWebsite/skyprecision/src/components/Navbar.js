import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Icon from './icon.svg'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

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

  useEffect(() =>  {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value = {{ color: '#fff'}}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link className="navbar-logo" onClick={closeMobileMenu} to='/'>
              <img className='navbar-icon' src={Icon} alt='icon' />
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
                    to='/about'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/team'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Team
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/gallery'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Gallery
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
      </IconContext.Provider>
    </>
  )
}

export default Navbar
