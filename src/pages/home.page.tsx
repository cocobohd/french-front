import { PublicRoutes } from '@/types/router.enum'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={PublicRoutes.LOGIN}>Login</Link>
                    </li>
                    <li>
                        <Link to={PublicRoutes.SIGNUP}>Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
