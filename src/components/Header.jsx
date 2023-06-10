import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header-inner'>
          <h1 className='logo'></h1>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header