import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import useContent from '../hooks/useContent'

const EditComment = () => {
  const navigate = useNavigate()
  const { _id } = useParams()
  const { content, isLoading, error } = useContent(_id || '')
  const [newComment, setNewComment] = useState<string>('')
  const [rating, setRating] = useState<number>(0)

  return (
    <div>
      <form className="flex justify-center items-center">
        <label>ข้อความ:</label>
        <input type="text" required />
        <label>คะแนน:</label>
        <ReactStars count={5} size={24} color2={'#ffd700'} half={false} char="&#10032;" />
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
