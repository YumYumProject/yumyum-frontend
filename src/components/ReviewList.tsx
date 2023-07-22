import React from 'react'
import { Loading } from './Loading'
import ReviewCard from './ReviewCard'
import useContentList from '../hooks/useContentList'

const ReviewList = () => {
  const { contentList, isLoading, error } = useContentList()

  if (isLoading) return <Loading />

  if (error || !contentList) return <p>{error}</p>

  return (
    <div>
      {contentList.map((review) => (
        <ReviewCard key={review.commentBy._id} review={review} />
      ))}
    </div>
  )
}

export default ReviewList
