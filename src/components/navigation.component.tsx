import { Link } from 'react-router-dom'
import { PublicRoutes } from '@/types/router.enum'

import Icon from '@/assets/images/icon.png'
import { AuthButtons } from './auth-buttons.component'
import { Button } from './ui/button'
import { useStore } from '@/store'
import { useEffect, useState } from 'react'

export const NavMenu = () => {
    const token = localStorage.getItem('accessToken')
    const store = useStore((state) => state)

    const [name, setName] = useState<string | null>('')

    useEffect(() => {
        setName('bohdan')
        console.log(store)
        console.log(token)
    }, [store.name])

    return (
        <nav className="bg-white shadow-sm w-full px-4 flex justify-center">
            <div className="flex justify-between h-16 items-center max-w-8xl w-full">
                <Link to={PublicRoutes.HOME}>
                    <img src={Icon} alt="icon" className="w-16" />
                </Link>

                {!token ? <AuthButtons /> : <Button>Hello {name}</Button>}
            </div>
        </nav>
    )
}
