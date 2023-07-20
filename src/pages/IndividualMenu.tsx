import React from 'react'
import useMenu from '../hooks/useMenu'
import { Loading } from '../components/Loading'
import { Link, useParams } from 'react-router-dom'

const IndividualMenu = () => {
  const { id } = useParams()
  const { menu, isLoading, error } = useMenu(id || '')

  if (isLoading || !menu) return <Loading />

  if (error) return <p>{error}</p>

  return (
    <div>
      <div>
        <div>
          <img src={menu.menu_image_url} alt="img-menu" />
        </div>

        <p>{menu.menu_name}</p>
        <p>{menu.calories.value}</p>
        <p>{menu.calories.unit}</p>

        <div className="left">
          <p>วัตถุดิบ</p>
          <ol>
            {menu.material.map((x) => (
              <>
                <li>
                  <p>{x.name}</p>
                  <p>{x.quantity}</p>
                  <p>{x.unit}</p>
                </li>
              </>
            ))}
          </ol>
        </div>

        <div className="right">
          <p>วิธีทำ</p>
          <ol>
            {menu.cooking_step.map((x) => (
              <>
                <li>
                  <p>{x.order}</p>
                  <p>{x.description}</p>
                </li>
              </>
            ))}
          </ol>
        </div>
      </div>
      <div>
        <Link to={`/create`}>Create new review</Link>
      </div>
    </div>
  )
}

export default IndividualMenu
