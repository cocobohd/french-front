import { useNavigate } from 'react-router-dom'
import SignUpImage from '@/assets/images/signup-image.jpg'
import { PublicRoutes } from '@/types/router.enum'
import { SignupForm } from '@/components/signup-form'

export const Signup = () => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center w-full mt-20 max-w-8xl">
            <div className="w-full px-28">
                <h1 className="mb-12 text-center text-5xl font-bold text-gray text-opacity-70">
                    Create an account
                </h1>
                <SignupForm />
                <p className="my-5 text-center text-xl text-gray text-opacity-40">
                    - OR -
                </p>
                <p className="text-center text-xl text-gray text-opacity-40">
                    Already have an account?{' '}
                    <button
                        onClick={() => navigate(PublicRoutes.LOGIN)}
                        className="font-bold text-gray text-opacity-70"
                    >
                        Login
                    </button>
                </p>
            </div>
            <img src={SignUpImage} alt="Login" className="w-1/2 rounded-lg" />
        </div>
    )
}
