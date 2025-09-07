import CustomImage from "../ui/CustomImage"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__overlay" />
            <CustomImage
                src="/images/home_1.jpg"
                fill
                sizes="100vw"
                alt="Copeaux de bois"
            />
            <div className="hero__img-container">
                <CustomImage
                    src="/images/home_2.jpg"
                    fill
                    sizes="100vw"
                    alt="Copeaux de bois"
                />
            </div>
            <div className="hero__content">
                <h1>Joseph & Fils</h1>
                <h2>
                    - Menuiserie -
                </h2>
            </div>
        </div>
    )
}