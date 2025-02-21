import { NavMenu } from '@/components/navigation.component'
import { Home } from '@/pages/home.page'
import { Login } from '@/pages/login.page'
import { Signup } from '@/pages/signup.page'
import { Welcome } from '@/pages/welcome.page'
import { PrivateRoutes, PublicRoutes } from '@/types/router.enum'
import { ProtectRoute } from '@/utils/protect-route.util'
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
    {
        path: PrivateRoutes.WELCOME,
        element: (
            <ProtectRoute>
                <Welcome />
            </ProtectRoute>
        ),
    },
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
            <>
                <NavMenu />
                <Outlet />
            </>
        ),
        children: routerElements.map(renderRoutes),
    },
]
