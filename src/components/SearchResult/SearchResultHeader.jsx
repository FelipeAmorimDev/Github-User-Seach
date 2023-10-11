import React from 'react'

const SearchResultHeader = ({ theme, data }) => {
  const titleStyle = { color: theme === "dark" ? "#fff" : "#2B3442" }
  const joinDateStyle = { color: theme === "dark" ? "#fff" : "#697C9A" }
  const bioStyle = { color: theme === "dark" ? "#fff" : "#4B6A9B" }
  const joinDate = data.created_at.slice(0, 10).split("-").reverse()

  const joinDateMes = joinDate[1]
  
  switch (joinDateMes) {
    case "01":
      joinDate[1] = "Jan"
      break

    case "02":
      joinDate[1] = "Feb"
      break

    case "03":
      joinDate[1] = "Mar"
      break

    case "04":
      joinDate[1] = "Apr"
      break

    case "05":
      joinDate[1] = "May"
      break

    case "06":
      joinDate[1] = "June"
      break

    case "07":
      joinDate[1] = "July"
      break

    case "08":
      joinDate[1] = "Aug"
      break

    case "09":
      joinDate[1] = "Sept"
      break

    case "10":
      joinDate[1] = "Oct"
      break

    case "11":
      joinDate[1] = "Nov"
      break
      
    default:
      joinDate[1] = "Dec"
  }
 
  return (
    <>
      <img src={data.avatar_url} alt="Avatar Usuario" className='searchresult__userlogo' />
      <header className='searchresult__top'>
        <div>
          <h1 className='searchresult__nickname' style={titleStyle}>{data.name}</h1>
          <span className='searchresult__id'>@{data.login}</span>
        </div>
        <span className='searchresult__joindate' style={joinDateStyle}>Joined {joinDate.join(" ")}</span>
      </header>
      <p className='searchresult__description' style={bioStyle}>{data.bio ? data.bio : "This profile has no bio"}</p>
    </>
  )
}

export default SearchResultHeader