import React from 'react';
import Input from '../SearchResult/Input';

const SearchForm = ({ theme, setSearch, error }) => {
  const [username, setUsername] = React.useState("")
  
  function handleSearch(e) {
    e.preventDefault();

    if (username) setSearch(username)
  }

  return (
    <form className="header__form" onSubmit={handleSearch}>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} theme={theme} />
      {error && <span className='search__error'>No results</span>}
      <button className="header__searchbtn">Search</button>
    </form>
  )
}

export default SearchForm