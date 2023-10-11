import React from 'react'

const UserStatsItem = ({title, value, theme}) => {
  const titleStyle = { color: theme === "dark" ? "#fff" : "#4B6A9B" }
  const valueStyle = { color: theme === "dark" ? "#fff" : "#4B6A9B" }
  
  return (
    <li className='userstats__item'>
        <span
          className='userstats__state'
          style={titleStyle}>
          {title}
        </span>
        <span
          className='userstats__value'
          style={valueStyle}>
          {value}
        </span>
      </li>
  )
}

export default UserStatsItem