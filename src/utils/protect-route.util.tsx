import { PublicRoutes } from '@/types/router.enum'
import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectRoute = ({ children }: PropsWithChildren) => {
    const location = useLocation()
    const token = localStorage.getItem('accessToken')

    if (!token) {
        return (
            <Navigate
                to={PublicRoutes.LOGIN}
                state={{ from: location }}
                replace
            />
        )
    }

    return children
}
