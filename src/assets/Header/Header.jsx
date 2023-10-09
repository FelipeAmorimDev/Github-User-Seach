import React from 'react'
import './Header.css'
import { GlobalContext } from '../GlobalContext'

import SearchForm from './SearchForm'
import HeaderTop from './HeaderTop'

const Header = () => {

  const { theme } = React.useContext(GlobalContext)

  return (
    <header className='header__container'>
      <HeaderTop theme={theme} />
      <SearchForm theme={theme} />
    </header>
  )
}

export default Header