import React from 'react'
import ThemeToggle from './ThemeToggle'

const HeaderTop = ({ theme }) => {
  const logoColor = theme === "dark" ? "#fff" : "#222731"
  const logoStyle = { color: logoColor }

  return (
    <div className="header__top">
      <a
        href=""
        className='header__logo'
        style={logoStyle}>
        devfinder
      </a>
      <ThemeToggle />
    </div>
  )
}

export default HeaderTop