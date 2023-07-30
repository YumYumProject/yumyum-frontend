import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import { host } from '../constant'
import { useAuth } from '../providers/AuthProviders'

const CreateComment = () => {
  const navigate = useNavigate()
  const { _id } = useParams()
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
    <div className="w-full h-full bg-createCommentBg bg-cover">
      <div className="box-content bg-white w-full h-[50px] rounded-b-[100%] drop-shadow-lg" />
      <div className="w-full h-screen backdrop-blur-sm ">
        <div className="box-content max-w-[1280px] mx-auto flex items-center ">
          <div className="form-container w-full h-auto rounded-[20px] bg-white/50 my-[60px] p-[40px]">
            <p className="w-full mb-[40px] text-[40px] text-center text-orange">&ldquo; เพิ่มความคิดเห็น &rdquo;</p>
            <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleCreate}>
              <div>
                <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="comment">
                  ข้อความ:
                </label>
                <input
                  className="block w-[620px] border border-white/90 bg-white/90 text-[16px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                  type="text"
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="ข้อความ..."
                  required
                />
              </div>
              <div className="flex flex-col items-start w-[620px]">
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
      <div className="bottom-0 box-content bg-white w-full h-[50px] rounded-t-[100%]" />
    </div>
  )
}

export default CreateComment
