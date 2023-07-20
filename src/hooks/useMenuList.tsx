import { useEffect, useState } from 'react'
import { IContent } from '../types/types'
import { host } from '../constant'

const useMenuList = () => {
  const [menuList, setMenuList] = useState<IContent[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/menus`)
        const data = await res.json()

        setMenuList(data.data)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { menuList, setMenuList, isLoading, error }
}

export default useMenuList
