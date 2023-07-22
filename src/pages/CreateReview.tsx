import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'
import { host } from '../constant'
import { toast } from 'react-hot-toast'

const CreateReview = () => {
  const navigate = useNavigate()
  const [url, setUrl] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [rating, setRating] = useState<number>(0)

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await fetch(`${host}/content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          menu_image_url: url,
          comment,
          rating: rating,
        }),
      })

      toast.success('ขอบคุณสำหรับการรีวิว!')
      navigate('/menu/:_id')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
      <form className="flex justify-center items-center" onSubmit={handleCreate}>
        <label>รูปภาพ:</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
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
          รีวิว
        </button>
      </form>
    </div>
  )
}

export default CreateReview
