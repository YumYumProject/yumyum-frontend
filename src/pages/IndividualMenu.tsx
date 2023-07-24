import React, { Fragment } from 'react'
import { Loading } from '../components/Loading'
import { Link, useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import CommentList from '../components/CommentList'
import ReactStars from 'react-stars'

const IndividualMenu = () => {
  const { _id } = useParams()
  const { content, isLoading, error } = useContent(_id || '')

  if (isLoading || !content) return <Loading />
  if (error) return <p>{error}</p>

  console.log(content)

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
          <p>วัตถุดิบ</p>
          {content.material.map((material) => (
            <Fragment key={material.name}>
              <p>{material.name}</p>
              <p>{material.quantity}</p>
              <p>{material.unit}</p>
            </Fragment>
          ))}
        </div>

        <div className="method">
          <p>วิธีทำ</p>
          {content.cooking_step.map((step) => (
            <Fragment key={step.order}>
              <p>{step.order}</p>
              <p>{step.description}</p>
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <p>คะแนน</p>
        <p>{content.average_rating} /5</p>
        <ReactStars key={content.average_rating} count={5} size={24} color2={'#ffd700'} edit={false} char="&#10032;" />
      </div>
      <div>
        <Link
          className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
          to={`/menu/${_id}/create`}
        >
          เพิ่มความคิดเห็น
        </Link>
      </div>
      <CommentList comments={content.comment} />
    </div>
  )
}

export default IndividualMenu
