import { Navigate, Outlet } from 'react-router-dom'

interface IGuardedRouteProps {
  isRouteAccessible: boolean
  redirectRoute: string
}

const GuardRoute = (props: IGuardedRouteProps) => {
  const { isRouteAccessible, redirectRoute } = props

  return isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} replace />
}

export default GuardRoute
