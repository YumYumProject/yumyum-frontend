import { useEffect, useState } from 'react'
import { IContent } from '../types/types'
import { host } from '../constant'

const useMenuRanking = (_id: string) => {
  const [menuRanking, setMenuRanking] = useState<IContent | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/${_id}`)
        const data = await res.json()

        setMenuRanking(data)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { menuRanking, setMenuRanking, isLoading, error }
}

export default useMenuRanking
