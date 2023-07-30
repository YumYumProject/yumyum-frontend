import { FaWeightScale } from 'react-icons/fa6'
import { Link, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import CommentList from '../components/CommentList'
import { Loading } from '../components/Loading'
import useContent from '../hooks/useContent'
import { useAuth } from '../providers/AuthProviders'

const IndividualMenu = () => {
  const { _id } = useParams()
  const { content, isLoading, error } = useContent(_id || '')
  const { isLoggedIn } = useAuth()

  if (isLoading || !content) return <Loading />
  if (error) return <p>{error}</p>

  console.log(content)

  return (
    <div className="w-full h-full bg-individualMenuBg bg-cover">
      <div className="box-content bg-white w-full h-[50px] rounded-b-[100%] drop-shadow-lg" />
      <div className="w-full h-full backdrop-blur-sm">
        <div className="card max-w-[1280px] mx-auto px-[16px] flex flex-col justify-center items-center">
          <div className="contianer-menu relative box-border w-full h-auto flex justify-center mt-[60px]">
            <img
              className="absolute object-fill w-[990px] h-[660px] rounded-[20px] drop-shadow-xl"
              src={content.menu_image_url}
              alt="img-menu"
            />
            <div className="rounded-[20px] bg-white/50 w-full h-auto px-[60px] pt-[80px] pb-[40px] mt-[610px] flex flex-col items-center">
              <div className="block w-full">
                <p className="max-h-[180px] font-bold text-[40px] text-orange text-center overflow-hidden leading-[/0px]">
                  {content.menu_name}
                </p>
                <div className="w-full flex justify-center items-center text-[18px] text-orange gap-[10px] py-[20px]">
                  <FaWeightScale />
                  <p>{content.calories.value}</p>
                  <p>{content.calories.unit}</p>
                </div>
                <hr className="w-full border-1 border-orange pb-[20px]" />
              </div>
              <div className="grid grid-cols-2 gap-[90px] overflow-hidden">
                <div className="material w-full">
                  <p className="font-bold text-[20px]">วัตถุดิบ</p>
                  {content.material.map((material) => (
                    <>
                      <ul className="list-disc list-inside text-[16px] pl-[20px]">
                        <li key={material.name}>
                          {material.name} {material.quantity} {material.unit}{' '}
                        </li>
                      </ul>
                    </>
                  ))}
                </div>
                <div className="method w-full">
                  <p className="font-bold text-[20px]">วิธีทำ</p>
                  {content.cooking_step.map((step) => (
                    <>
                      <ol className="text-[16px] pl-[20px]">
                        <li key={step.order}>
                          {step.order}. {step.description}{' '}
                        </li>
                      </ol>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center w-full py-[20px] px-[40px]">
            <div>
              <p className="font-bold text-[20px]">คะแนน</p>
              <p className="font-bold text-[16px]">
                <span className="text-[20px]">{content.average_rating}</span> /5
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
              {isLoggedIn && (
                <Link
                  className="text-[16px] font-medium px-5 py-2.5 mt-[20px] text-white rounded-full drop-shadow-sm bg-[#FF9642] hover:bg-[#7dac59]"
                  to={`/menu/${_id}/create`}
                >
                  เพิ่มความคิดเห็น
                </Link>
              )}
            </div>
          </div>
          <div className=" items-center pb-[50px] w-full ">
            <CommentList comments={content.comment} contentId={content._id} />
          </div>
        </div>
      </div>
      <div className="bottom-0 box-content bg-white w-full h-[50px] rounded-t-[100%]" />
    </div>
  )
}

export default IndividualMenu
