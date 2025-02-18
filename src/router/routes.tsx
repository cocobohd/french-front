import { Home } from '@/pages/home.page'
import { Login } from '@/pages/login.page'
import { Signup } from '@/pages/signup.page'
import { PublicRoutes } from '@/types/router.enum'
import { JSX } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'

interface RouterItem {
    path?: string
    element?: JSX.Element
    children?: RouterItem[]
}

const routerElements = [
    { path: PublicRoutes.LOGIN, element: <Login /> },
    { path: PublicRoutes.SIGNUP, element: <Signup /> },
    { path: PublicRoutes.HOME, element: <Home /> },
]

const renderRoutes = (route: RouterItem): RouteObject => {
    return {
        path: route.path,
        element: route.element,
        children: route.children?.map(renderRoutes),
    }
}

export const routes = [
    {
        path: PublicRoutes.HOME,
        element: (
            <div className="flex justify-center">
                <Outlet />
            </div>
        ),
        children: routerElements.map(renderRoutes),
    },
]
