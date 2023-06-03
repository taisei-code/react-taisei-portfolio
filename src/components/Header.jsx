import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <h3>ポートフォリオ</h3>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#">ホーム</a></li>
          <li><a href="#">ブログ</a></li>
          <li><a href="#">SNS</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header