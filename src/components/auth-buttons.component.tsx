import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PublicRoutes } from '@/types/router.enum'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    className?: string
}

export const AuthButtons: FC<Props> = ({ className }) => {
    return (
        <ul className={twMerge('flex gap-4', className)}>
            <li>
                <Link to={PublicRoutes.LOGIN}>
                    <Button variant="outline">Login</Button>
                </Link>
            </li>
            <li>
                <Link to={PublicRoutes.SIGNUP}>
                    <Button>Sign Up</Button>
                </Link>
            </li>
        </ul>
    )
}
