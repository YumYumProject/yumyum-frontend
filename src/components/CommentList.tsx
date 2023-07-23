import React from 'react'
import CommentCard from './CommentCard'
import { IComment } from '../types/types'

interface ICommentListProps {
  comments: IComment[]
}

const CommentList = (props: ICommentListProps) => {
  const { comments } = props

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </div>
  )
}

export default CommentList
