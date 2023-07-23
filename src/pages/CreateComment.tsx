import React, { FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import { host } from '../constant'
import { toast } from 'react-hot-toast'

const CreateComment = () => {
  const navigate = useNavigate()
  const { _id } = useParams()
  const [displayName, setDisplayName] = useState<string>('')
  const [userId, setUserId] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [rating, setRating] = useState<number>(0)

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await fetch(`${host}/menu/${_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          display_name: displayName,
          user_id: userId,
          description: comment,
          rating: rating,
        }),
      })

      toast.success('ขอบคุณสำหรับความคิดเห็น!')
      navigate(`/menu/${_id}`)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
      <form className="flex justify-center items-center" onSubmit={handleCreate}>
        <label>display_name:</label>
        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
        <label>user_id:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        <label>ข้อความ:</label>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} required />
        <label>คะแนน:</label>
        <ReactStars
          count={5}
          value={rating}
          onChange={(rating) => setRating(rating)}
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

export default CreateComment
