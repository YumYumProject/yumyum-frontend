import { useEffect, useState } from 'react'
import { IComment } from '../types/types'
import { host } from '../constant'

const useComment = (_id: string, comment_id: string) => {
  const [comment, setComment] = useState<IComment | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/comment/${_id}?comment_id=${comment_id}`)
        const data = await res.json()

        setComment(data)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { comment, isLoading, error }
}

export default useComment
