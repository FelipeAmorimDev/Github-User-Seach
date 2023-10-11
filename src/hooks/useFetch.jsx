import React, { useEffect } from 'react'

const useFetch = (userSearch) => {

  const [data, setData] = React.useState("")
  const [error, setError] = React.useState(false)


  useEffect(() => {
    setError(false)
    fetch(`https://api.github.com/users/${userSearch}`)
      .then((response) => response.json())
      .then((json) => {
        if (!json.message) return setData(json)

        return setError(true)
      })
  }, [userSearch])

  return { data, error }
}

export default useFetch