import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import { host } from '../constant'
import { useAuth } from '../providers/AuthProviders'

const CreateComment = () => {
  const navigate = useNavigate()
  const { _id } = useParams()
  const [displayName, setDisplayName] = useState<string>('')
  const [userId, setUserId] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [rating, setRating] = useState<number>(0)
  const { userInfo } = useAuth()

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await fetch(`${host}/menu/${_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` },
        body: JSON.stringify({
          display_name: displayName,
          user_id: userId,
          description: comment,
          rating: rating,
        }),
      })

      toast.success('ขอบคุณสำหรับความคิดเห็น!')
      navigate(`/menu/${_id}`)
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div className="form-container w-full h-auto mt-[30px] box-content py-[32px]">
      <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleCreate}>
        <div>
          <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="display-name">
            display_name:
          </label>
          <input
            className="block w-[620px] border border-white/80 bg-white/60 text-[14px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
            type="text"
            id="display-name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="user-id">
            user_id:
          </label>
          <input
            className="block w-[620px] border border-white/80 bg-white/60 text-[14px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
            type="text"
            id="user-id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="comment">
            ข้อความ:
          </label>
          <input
            className="block w-[620px] border border-white/80 bg-white/60 text-[14px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="flex gap-2 mb-2 text-[16px] font-medium">คะแนน:</label>
          <ReactStars
            count={5}
            value={rating}
            onChange={(rating) => setRating(rating)}
            size={30}
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

export default CreateComment
