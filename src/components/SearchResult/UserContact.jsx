import React from 'react'
import iconTwitter from '../../assets/icon-twitter.svg'
import iconWebsite from '../../assets/icon-website.svg'
import iconCompany from '../../assets/icon-company.svg'
import iconLocation from '../../assets/icon-location.svg'
import UserContactItem from './UserContactItem'


const UserContact = ({ theme, data }) => {
  const contactInfos = [
    [iconLocation, "Location City", data.location],
    [iconTwitter, "Twitter User", data.twitter_username],
    [iconWebsite, "Website User", data.blog],
    [iconCompany, "User Company", data.company],
  ]

  return (
    <ul
      className="usercontact__list"
      style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}>
      {contactInfos.map(([icon, alt, dataValue]) => <UserContactItem icon={icon} alt={alt} dataValue={dataValue} />)}
    </ul>
  )
}

export default UserContact