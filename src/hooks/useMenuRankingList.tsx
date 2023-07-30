import { useEffect, useState } from 'react'
import { host } from '../constant'
import { IContent } from '../types/types'

const useMenuRankingList = () => {
  const [menuRankingList, setMenuRankingList] = useState<IContent[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/`)
        const data = await res.json()

        setMenuRankingList(data.data)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { menuRankingList, setMenuRankingList, isLoading, error }
}

export default useMenuRankingList
