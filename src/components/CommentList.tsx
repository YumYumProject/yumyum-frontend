import React from 'react'
import CommentCard from './CommentCard'
import { IComment } from '../types/types'

interface ICommentListProps {
  comments: IComment[]
  contentId: string
}

const CommentList = (props: ICommentListProps) => {
  const { comments, contentId } = props

  return (
    <div>
      {comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} contentId={contentId} />
      ))}
    </div>
  )
}

export default CommentList
