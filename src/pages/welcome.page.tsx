import WelcomeImage from '@/assets/images/welcome.jpg'

export const Welcome = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="mb-4 text-4xl">
                Hello, if you here, your credentials correct
            </h1>
            <img src={WelcomeImage} alt="two dogs" className="w-1/2 rounded" />
        </div>
    )
}
