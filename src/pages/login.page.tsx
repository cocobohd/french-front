import { useNavigate } from 'react-router-dom'
import LoginImage from '@/assets/images/login-image.jpg'
import { LoginForm } from '@/components/login-form.component'
import { PublicRoutes } from '@/types/router.enum'

export const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center w-full mt-20 max-w-8xl">
            <img src={LoginImage} alt="Login" className="w-1/2 rounded-lg" />
            <div className="w-full px-28">
                <h1 className="mb-12 text-center text-5xl font-bold text-gray text-opacity-70">
                    Welcome Back
                </h1>
                <LoginForm />
                <p className="my-5 text-center text-xl text-gray text-opacity-40">
                    - OR -
                </p>
                <p className="text-center text-xl text-gray text-opacity-40">
                    Don't have an account?{' '}
                    <button
                        onClick={() => navigate(PublicRoutes.SIGNUP)}
                        className="font-bold text-gray text-opacity-70"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    )
}
