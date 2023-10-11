import React from 'react'

const UserStatsItem = ({title, value, theme}) => {
  return (
    <li className='userstats__item'>
        <span
          className='userstats__state'
          style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
          {title}
        </span>
        <span
          className='userstats__value'
          style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
          {value}
        </span>
      </li>
  )
}

export default UserStatsItem