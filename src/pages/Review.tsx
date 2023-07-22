import React from 'react'
import { useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import { Loading } from '../components/Loading'

const Review = () => {
  const { _id } = useParams()
  const { content, isLoading, error } = useContent(_id || '')

  if (isLoading || !content) return <Loading />
  if (error) return <p>{error}</p>
  return (
    <div>
      <p>{content.commentBy.display_name}</p>
      <p>{content.comment.rating}</p>
      <p>{content.comment.commentedAt}</p>
      <p>{content.comment.description}</p>
    </div>
  )
}

export default Review
