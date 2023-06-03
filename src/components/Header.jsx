import React from 'react'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header-inner'>
          <h1 className='logo'></h1>
          <nav>
            <ul className="nav-list">
              <li><a href="#about">私について</a></li>
              <li><a href="#service">サービス</a></li>
              <li><a href="#works">制作実績</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header