import React from 'react'
import { IComment } from '../types/types'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import moment from 'moment'
import { host } from '../constant'
import { toast } from 'react-hot-toast/headless'

interface CommentCardProps {
  comment: IComment
  contentId: string
}

const CommentCard = ({ comment, contentId }: CommentCardProps) => {
  const navigate = useNavigate()
  const { _id } = useParams()

  const deleteComment = async () => {
    try {
      await fetch(`${host}/menu/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      toast.success('ความคิดเห็นของคุณถูกลบ!')
      navigate(`/menu/${_id}`)
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <Link to={`/create/:${comment._id}`}>
      <div>
        <p>{comment.comment_by.display_name}</p>
        <ReactStars key={comment.rating} count={5} size={24} color2={'#ffd700'} edit={false} />
        <p>{moment(comment.comment_by.commentedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <p>{comment.description}</p>
        {user_id === comment.comment_by.user_id && (
          <>
            <Link
              className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
              to={`/menu/${contentId}/edit/${comment._id}`}
            >
              แก้ไข
            </Link>
            <button
              className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
              onClick={deleteComment}
            >
              ลบ
            </button>
          </>
        )}
      </div>
    </Link>
  )
}

export default CommentCard
