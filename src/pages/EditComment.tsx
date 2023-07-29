import { FormEvent, useEffect, useState } from 'react'
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
      const res = await fetch(`${host}/comment/${_id}?comment_id=${comment_id}`, {
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
    <div className="form-container w-full h-auto mt-[30px] box-content py-[32px]">
      <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleEdit}>
        <div>
          <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="comment">
            ข้อความ:
          </label>
          <input
            className="block w-[620px] border border-white/80 bg-white/60 text-[14px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
            type="text"
            id="comment"
            defaultValue={comment.description}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="flex gap-2 mb-2 text-[16px] font-medium">คะแนน:</label>
          <ReactStars
            count={5}
            value={newRating}
            onChange={(rating) => setNewRating(rating)}
            size={24}
            color2="orange"
            half={false}
          />
        </div>
        <div>
          <button
            className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
            type="submit"
          >
            ส่ง
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditComment
