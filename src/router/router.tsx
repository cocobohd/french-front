import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { PublicRoutes } from '@/types/router.enum'

export const appRouter = createBrowserRouter(routes, {
    basename: PublicRoutes.HOME,
})
