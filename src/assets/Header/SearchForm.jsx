import React from 'react';

const SearchForm = ({ theme, setSearch }) => {

  const [username, setUsername] = React.useState("")

  const inputStyle = {
    backgroundColor: theme === "dark" ? "#1E2A47" : "#FEFEFE",
    color: theme === "dark" ? "#fff" : "#4B6A9B"
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearch(username)
  }

  return (
    <form className="header__form" onSubmit={handleSearch}>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Search GitHub username…"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inputStyle}
      />
      <button className="header__searchbtn">Search</button>
    </form>
  )
}

export default SearchForm