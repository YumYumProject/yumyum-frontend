import React from 'react'
import { IComment } from '../types/types'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import moment from 'moment'

interface CommentCardProps {
  comment: IComment
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <Link to={`/create/:${comment._id}`}>
      <div>
        <p>{comment.comment_by.display_name}</p>
        <ReactStars key={comment.rating} count={5} size={24} color2={'#ffd700'} edit={false} />
        <p>{moment(comment.comment_by.commentedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <p>{comment.description}</p>
      </div>
    </Link>
  )
}

export default CommentCard
