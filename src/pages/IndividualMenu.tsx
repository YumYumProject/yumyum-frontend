import React from 'react'
import useMenu from '../hooks/useContent'
import { Loading } from '../components/Loading'
import { Link, useParams } from 'react-router-dom'
import ReviewList from '../components/ReviewList'

const IndividualMenu = () => {
  const { _id } = useParams()
  const { content, isLoading, error } = useMenu(_id || '')

  if (isLoading || !content) return <Loading />
  if (error) return <p>{error}</p>

  return (
    <div>
      <div className="card">
        <div>
          <img src={content.menu_image_url} alt="img-menu" />
        </div>

        <p>{content.menu_name}</p>
        <p>{content.calories.value}</p>
        <p>{content.calories.unit}</p>

        <div className="material">
          {content.material.map((material) => (
            <>
              <p>วัตถุดิบ</p>
              <p>{material.name}</p>
              <p>{material.quantity}</p>
              <p>{material.unit}</p>
            </>
          ))}
        </div>

        <div className="method">
          {content.cooking_step.map((step) => (
            <>
              <p>วิธีทำ</p>
              <p>{step.order}</p>
              <p>{step.description}</p>
            </>
          ))}
        </div>
      </div>
      <div>
        <Link to={`/create`}>Create new review</Link>
      </div>
      <ReviewList />
    </div>
  )
}

export default IndividualMenu
