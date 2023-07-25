import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import { host } from '../constant'
import { toast } from 'react-hot-toast'
import { Loading } from '../components/Loading'
import useComment from '../hooks/useComment'

const EditComment = () => {
  const navigate = useNavigate()
  const { _id, comment_id } = useParams()
  const { comment, isLoading, error } = useComment(_id || '', comment_id || '')
  const [newComment, setNewComment] = useState<string>('')
  const [newRating, setNewRating] = useState<number>(0)

  useEffect(() => {
    if (comment) {
      setNewComment(comment.description)
      setNewRating(comment.rating)
    }
  }, [comment])

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch(`${host}/menu/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment_id: comment_id,
          description: newComment,
          rating: newRating,
        }),
      })
      const data = await res.json()

      if (data.statusCode >= 400) {
        throw new Error(data.message)
      }

      toast.success('ความคิดเห็นของคุณถูกแก้ไขแล้ว!')
      navigate(`/menu/${_id}`)
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  if (isLoading || !comment) return <Loading />
  if (error) return <p>{error}</p>

  return (
    <div>
      <form className="flex justify-center items-center" onSubmit={handleEdit}>
        <label htmlFor="comment">ข้อความ:</label>
        <input
          type="text"
          id="comment"
          defaultValue={comment.description}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <label>คะแนน:</label>
        <ReactStars
          count={5}
          value={newRating}
          onChange={(rating) => setNewRating(rating)}
          size={24}
          color2={'#ffd700'}
          half={false}
          char="&#10032;"
        />
        <button
          className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
          type="submit"
        >
          ส่ง
        </button>
      </form>
    </div>
  )
}

export default EditComment
