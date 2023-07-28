import React from 'react'
import { IComment } from '../types/types'
import { Link, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import moment from 'moment'
import { host } from '../constant'
import { toast } from 'react-hot-toast/headless'
import { FaCommentDots } from 'react-icons/fa'

interface CommentCardProps {
  comment: IComment
  contentId: string
}

const CommentCard = ({ comment, contentId }: CommentCardProps) => {
  const { _id } = useParams()

  const handleDelete = async () => {
    try {
      await fetch(`${host}/comment/${_id}?comment_id=${comment._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      toast.success('ความคิดเห็นของคุณถูกลบ!')
      location.reload()
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-end p-[20px] w-full bg-white/70 rounded-[20px]">
        <div className="text-[18px]">
          <p>{comment.comment_by.display_name}</p>
          <ReactStars key={comment.rating} count={5} value={comment.rating} size={24} color2="orange" edit={false} />
          <p>{moment(comment.comment_by.commentedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
          <FaCommentDots />
          <p>{comment.description}</p>
        </div>
        <div className="flex gap-5">
          {/* {user_id === comment.comment_by.user_id && ( */}
          <>
            <Link
              className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
              to={`/menu/${contentId}/edit/${comment._id}`}
            >
              แก้ไข
            </Link>
            <button
              className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
              onClick={handleDelete}
            >
              ลบ
            </button>
          </>
          {/* )} */}
        </div>
      </div>
      {/* <hr className="w-full border-1 border-orange" /> */}
    </div>
  )
}

export default CommentCard
