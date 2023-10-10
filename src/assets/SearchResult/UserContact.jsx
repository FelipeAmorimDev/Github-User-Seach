import React from 'react'

const UserContact = ({ theme, data }) => {
  return (
    <ul
      className="usercontact__list"
      style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
      <li className="usercontact__item" style={{opacity: data.location === null ? ".5" : "1"}}>
        <img src="./assets/icon-location.svg" alt="" />
        <span>{data.location !== null ? data.location : "Not available"}</span>
      </li>
      <li className="usercontact__item" style={{opacity: data.twitter_username === null ? ".5" : "1"}}>
        <img src="./assets/icon-twitter.svg" alt="" />
        <span>{data.twitter_username !== null ? data.twitter_username : "Not available"}</span>
      </li>
      <li className="usercontact__item" style={{opacity: data.blog === "" ? ".5" : "1"}}>
        <img src="./assets/icon-website.svg" alt="" />
        <span>{data.blog !== "" ? data.blog : "Not available"}</span>
      </li>
      <li className="usercontact__item" style={{opacity: data.company=== null ? ".5" : "1"}}>
        <img src="./assets/icon-company.svg" alt="" />
        <span>{data.company !== null ? data.company : "Not available"}</span>
      </li>
    </ul>
  )
}

export default UserContact