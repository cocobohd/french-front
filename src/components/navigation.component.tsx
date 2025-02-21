import { Link } from 'react-router-dom'
import { PublicRoutes } from '@/types/router.enum'

import Icon from '@/assets/images/icon.png'
import { AuthButtons } from './auth-buttons.component'

export const NavMenu = () => {
    return (
        <nav className="bg-white shadow-sm w-full px-4 flex justify-center">
            <div className="flex justify-between h-16 items-center max-w-8xl w-full">
                <Link to={PublicRoutes.HOME}>
                    <img src={Icon} alt="icon" className="w-16" />
                </Link>
                <AuthButtons />
            </div>
        </nav>
    )
}
