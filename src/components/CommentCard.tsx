import { IComment } from '../types/types'
import { Link, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import moment from 'moment'
import { host } from '../constant'
import { toast } from 'react-hot-toast/headless'
import { FaCommentDots } from 'react-icons/fa'
import { RiDeleteBin5Fill, RiEdit2Fill } from 'react-icons/ri'
import { useAuth } from '../providers/AuthProviders'

interface CommentCardProps {
  comment: IComment
  contentId: string
}

const CommentCard = ({ comment, contentId }: CommentCardProps) => {
  const { _id } = useParams()
  const { isOwnComment } = useAuth()

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
      <div className="flex justify-between items-end py-[20px] px-[40px] w-full bg-white/50 rounded-[20px]">
        <div className="text-[14px] pr-[30px]">
          <p className="flex gap-[8px]">
            {comment.comment_by.display_name} <FaCommentDots />
          </p>
          <p>{moment(comment.comment_by.commentedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
          <ReactStars key={comment.rating} count={5} value={comment.rating} size={24} color2="orange" edit={false} />
          <br />

          <p>&ldquo; {comment.description} &rdquo;</p>
        </div>
        <div className="flex gap-5">
          {isOwnComment && isOwnComment(comment) && (
            <>
              <Link
                className="flex justify-center items-center gap-[6px] text-[14px] font-medium hover:text-orange"
                to={`/menu/${contentId}/edit/${comment._id}`}
              >
                <RiEdit2Fill className="text-orange" />
                <p>แก้ไข</p>
              </Link>
              <p>|</p>
              <button
                className="flex justify-center items-center gap-[6px] text-[14px] font-medium hover:text-orange"
                onClick={handleDelete}
              >
                <RiDeleteBin5Fill className="text-orange" />
                ลบ
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommentCard
