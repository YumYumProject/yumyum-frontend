import React from 'react'
import { IComment } from '../types/types'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'

interface CommentCardProps {
  comment: IComment
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <Link to={`/create/:${comment._id}`}>
      <div>
        <p>{comment.comment_by.display_name}</p>
        <ReactStars key={comment.rating} count={5} size={24} color2={'#ffd700'} edit={false} />
        <p>{comment.comment_by.commentedAt}</p>
        <p>{review.comment.description}</p>
      </div>
    </Link>
  )
}

export default CommentCard
