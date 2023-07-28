import React, { Fragment } from 'react'
import { Loading } from '../components/Loading'
import { Link, useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import CommentList from '../components/CommentList'
import { FaWeightScale } from 'react-icons/fa6'
import ReactStars from 'react-stars'

const IndividualMenu = () => {
  const { _id } = useParams()
  const { content, isLoading, error } = useContent(_id || '')

  if (isLoading || !content) return <Loading />
  if (error) return <p>{error}</p>

  console.log(content)

  return (
    <div className="w-full h-full bg-individualMenuBg bg-cover">
      <div className="card max-w-[1440px] mx-auto px-[16px] flex flex-col justify-center items-center">
        <div className="contianer-menu relative box-border w-full h-auto flex justify-center pt-[50px]">
          <img
            className="absolute object-fill w-[990px] h-[660px] rounded-[20px]"
            src={content.menu_image_url}
            alt="img-menu"
          />
          <div className="rounded-[20px] bg-white/80 w-full h-auto px-[60px] pt-[80px] pb-[40px] mt-[610px] flex flex-col items-center">
            <div className="block w-full">
              <p className="max-h-[180px] font-black text-[58px] text-center overflow-hidden leading-[90px]">
                {content.menu_name}
              </p>
              <div className="w-full flex justify-center items-center text-[20px] gap-[10px] py-[20px]">
                <FaWeightScale />
                <p>{content.calories.value}</p>
                <p>{content.calories.unit}</p>
              </div>
              <hr className="w-full border-1 border-orange pb-[20px]" />
            </div>
            <div className="flex justify-center gx-[20px]">
              <div className="material w-1/2">
                <p className="font-bold text-[32px]">วัตถุดิบ</p>
                {content.material.map((material) => (
                  <>
                    <ul className="list-disc list-inside text-[18px]">
                      <Fragment key={material.name}>
                        <li>
                          {material.name} {material.quantity} {material.unit}
                        </li>
                      </Fragment>
                    </ul>
                  </>
                ))}
              </div>
              <div className="method w-1/2">
                <p className="font-bold text-[32px]">วิธีทำ</p>
                {content.cooking_step.map((step) => (
                  <>
                    <ol className="text-[18px]">
                      <li key={step.order}>
                        {step.order}. {step.description}
                      </li>
                    </ol>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full py-[20px]">
          <div>
            <p className="font-bold text-[32px]">คะแนน</p>
            <p className="font-bold text-[18px]">
              <span className="text-[30px]">{content.average_rating}</span> /5
            </p>
            <ReactStars
              key={content.average_rating}
              count={5}
              value={content.average_rating}
              size={24}
              color2="orange"
              edit={false}
            />
          </div>
          <div>
            {/* {isLogedIn && ( */}
            <Link
              className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
              to={`/menu/${_id}/create`}
            >
              เพิ่มความคิดเห็น
            </Link>
            {/* )} */}
          </div>
        </div>
        <div className=" items-center pb-[50px] w-full ">
          <CommentList comments={content.comment} contentId={content._id} />
        </div>
      </div>
    </div>
  )
}

export default IndividualMenu
