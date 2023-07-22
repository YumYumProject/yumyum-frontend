import React from 'react'
import { IContent } from '../types/types'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'

interface ReviewCardProps {
  review: IContent
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Link to={`/create/:${review._id}`}>
      <div>
        <p>{review.commentBy.display_name}</p>
        <ReactStars key={review.comment.rating} count={5} size={24} color2={'#ffd700'} edit={false} />
        <p>{review.comment.commentedAt}</p>
        <p>{review.comment.description}</p>
      </div>
    </Link>
  )
}

export default ReviewCard
