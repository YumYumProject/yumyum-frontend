import { useEffect, useState } from 'react'
import { host } from '../constant'
import { IContent } from '../types/types'

const useMenu = (_id: string) => {
  const [menu, setMenu] = useState<IContent | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/menu/${_id}`)
        const data = await res.json()

        setMenu(data)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData
  }, [])

  return { menu, isLoading, error }
}

export default useMenu
