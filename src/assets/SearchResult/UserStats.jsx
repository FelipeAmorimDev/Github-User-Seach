import React from 'react'

const UserStats = ({ theme, data }) => {
  return (
    <ul
      className="userstats__list"
      style={{ backgroundColor: theme === "dark" ? "#141D2F" : "#F6F8FF" }}
    >
      <li className='userstats__item'>
        <span
          className='userstats__state'
          style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
          Repos
        </span>
        <span
          className='userstats__value'
          style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
          {data.public_repos}
        </span>
      </li>
      <li className='userstats__item'>
        <span className='userstats__state'
          style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
          Followers
        </span>
        <span
          className='userstats__value'
          style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
          {data.followers}
        </span>
      </li>
      <li className='userstats__item'>
        <span
          className='userstats__state'
          style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
          Following
        </span>
        <span
          className='userstats__value'
          style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
          {data.following}
        </span>
      </li>
    </ul>
  )
}

export default UserStats