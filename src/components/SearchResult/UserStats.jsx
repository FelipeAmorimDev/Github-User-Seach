import React from 'react'
import UserStatsItem from './UserStatsItem'

const UserStats = ({ theme, data }) => {

  const userStats = [
    ["Repos", data.public_repos],
    ["Followers", data.followers],
    ["Following", data.following]
  ]

  return (
    <ul
      className="userstats__list"
      style={{ backgroundColor: theme === "dark" ? "#141D2F" : "#F6F8FF" }}
    >
      {userStats.map(([title, value]) => (
        <UserStatsItem key={title} title={title} value={value} theme={theme} />))}
    </ul>
  )
}

export default UserStats