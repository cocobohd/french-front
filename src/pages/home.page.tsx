import Image1 from '@/assets/images/home-page.jpg'
import Image2 from '@/assets/images/health.jpg'
import Image3 from '@/assets/images/training.jpg'
import Image4 from '@/assets/images/community.jpg'
import { FeaturesItemInterface } from '@/types'
import { AuthButtons } from '@/components/auth-buttons.component'

const FeaturesItemsArray: FeaturesItemInterface[] = [
    {
        image: Image2,
        title: 'Health & Care Tips',
        subtitle: 'Expert advice on keeping your Frenchie healthy and happy.',
    },
    {
        image: Image3,
        title: 'Community Stories',
        subtitle:
            'Share and read heartwarming stories from fellow Frenchie owners.',
    },
    {
        image: Image4,
        title: 'Training Guides',
        subtitle: 'Professional training tips for your French Bulldog.',
    },
]

export const Home = () => {
    const renderFeaturesItem = (item: FeaturesItemInterface) => (
        <div className="bg-white p-6 rounded-xl shadow-sm" key={item.title}>
            <img
                src={item.image}
                alt="Health Tips"
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-black text-opacity-80">{item.subtitle}</p>
        </div>
    )

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                <div className="md:w-1/2">
                    <img
                        src={Image1}
                        alt="Cute French Bulldog"
                        className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
                    />
                </div>
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold text-black">
                        Welcome to the World of French Bulldogs
                    </h2>
                    <p className="text-lg text-black text-opacity-80">
                        Discover the charm and personality of French Bulldogs.
                        Our community brings together Frenchie lovers to share
                        experiences, tips, and adorable moments.
                    </p>
                </div>
            </div>

            {FeaturesItemsArray.map(renderFeaturesItem)}

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold text-black mb-4">
                    Join Our Frenchie Community
                </h2>
                <p className="text-lg text-black text-opacity-80 mb-8 max-w-2xl mx-auto">
                    Register now to access exclusive content, connect with other
                    French Bulldog owners, and get expert advice for your furry
                    friend.
                </p>
                <AuthButtons className="justify-center" />
            </div>
        </main>
    )
}
