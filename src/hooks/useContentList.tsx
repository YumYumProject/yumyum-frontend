import { useEffect, useState } from 'react'
import { IContent } from '../types/types'
import { host } from '../constant'

const useContentList = () => {
  const [contentList, setContentList] = useState<IContent[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/menus`)
        const data = await res.json()

        setContentList(data.data)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { contentList, setContentList, isLoading, error }
}

export default useContentList
