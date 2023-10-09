import React from 'react';

const SearchForm = ({ theme }) => {
  const inputStyle = {
    backgroundColor: theme === "dark" ? "#1E2A47" : "#FEFEFE",
    color: theme === "dark" ? "#fff" : "#4B6A9B"
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log("teste")
  }

  return (
    <form className="header__form" onSubmit={handleSearch}>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Search GitHub username…"
        style={inputStyle}
      />
      <button className="header__searchbtn">Search</button>
    </form>
  )
}

export default SearchForm