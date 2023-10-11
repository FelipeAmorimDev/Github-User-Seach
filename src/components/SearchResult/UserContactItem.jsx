import React from 'react'

const UserContactItem = ({ icon, alt, dataValue }) => {
  const userContactStyle = { opacity: !dataValue ? ".5" : "1" }
  return (
    <li className="usercontact__item" style={userContactStyle}>
      <img src={icon} alt={alt} />
      <span>{dataValue ? dataValue : "Not available"}</span>
    </li>
  )
}

export default UserContactItem