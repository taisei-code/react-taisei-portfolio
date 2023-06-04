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
                <Link to="/about">私について</Link>
              </li>
              <li>
                <Link to="/service">サービス</Link>
              </li>
              <li>
                <Link to="/works">制作実績</Link>
              </li>
              <li>
                <Link to="/contact">お問い合わせ</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header