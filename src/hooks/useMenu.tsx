import { useEffect, useState } from 'react'
import { MenuDto } from '../types/types'
import { host } from '../constant'

const useMenu = (id: string) => {
  const [menu, setMenu] = useState<MenuDto | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/menu/${id}`)
        const data = await res.json()

        setMenu(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData
  }, [])

  return { menu, isLoading, error }
}

export default useMenu
