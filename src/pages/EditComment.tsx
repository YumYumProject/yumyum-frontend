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
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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
    <div className="w-full h-full bg-editCommentBg bg-cover">
      <div className="w-full h-[1000px] backdrop-blur-sm ">
        <div className="box-content max-w-[1280px] mx-auto flex items-center ">
          <div className="form-container w-full h-auto rounded-[20px] bg-white/70 my-[60px] p-[40px]">
            <p className="w-full mb-[40px] text-[40px] text-center">&ldquo; แก้ไขความคิดเห็น &rdquo;</p>
            <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleEdit}>
              <div>
                <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="editComment">
                  ข้อความ:
                </label>
                <input
                  className="block w-[620px] border border-white/90 bg-white/90 text-[16px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                  type="text"
                  id="editComment"
                  defaultValue={comment.description}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="ข้อความ..."
                  required
                />
              </div>
              <div className="flex flex-col items-start w-[620px]">
                <label className="flex gap-2 mb-2 text-[16px] font-medium">คะแนน:</label>
                <ReactStars
                  count={5}
                  value={newRating}
                  onChange={(rating) => setNewRating(rating)}
                  size={30}
                  color2="orange"
                  half={false}
                />
              </div>
              <div>
                <button
                  className="text-[16px] font-medium px-5 py-2.5 mt-[20px] text-white rounded-full drop-shadow-sm bg-[#FF9642] hover:bg-[#7dac59]"
                  type="submit"
                >
                  ส่ง
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditComment
