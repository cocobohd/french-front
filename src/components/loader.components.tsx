import Icon from '@/assets/images/icon.png'

export const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="animate-spin">
                <img src={Icon} alt="Loading..." className="size-12" />
            </div>
        </div>
    )
}
