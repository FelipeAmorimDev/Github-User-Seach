import React, { useEffect } from 'react'

const useFetch = (userSearch) => {

  const [data, setData] = React.useState("")
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    setError(false)
    setLoading(true)
    fetch(`https://api.github.com/users/${userSearch}`)
      .then((response) => {
        if (response.status === 200) return response.json()
        
        throw new Error('Não foi possivel fazer a busca.')
      })
      .then((json) => {
        setData(json)
      })
      .catch((err) => {
        setError(err)
        setData("")
      })
      .finally(() => setLoading(false))
  }, [userSearch])

  return { data, error, loading }
}

export default useFetch