import React from 'react'

const Input = ({value, onChange, theme}) => {
  const inputStyle = {
    backgroundColor: theme === "dark" ? "#1E2A47" : "#FEFEFE",
    color: theme === "dark" ? "#fff" : "#4B6A9B"
  }

  return (
    <input
        type="text"
        name="username"
        id="username"
        placeholder="Search GitHub username…"
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
  )
}

export default Input