import { motion } from "motion/react";
import CustomImage from "../ui/CustomImage";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero"
        >
            <CustomImage
                src="/images/hero_1.jpg"
                fill
                sizes="95vw"
                alt="Copeaux de bois"
                priority
            />
            <CustomImage
                src="/images/hero_2.jpg"
                fill
                sizes="95vw"
                alt="Copeaux de bois"
                className="hero__overlay-img"
                priority
            />
            <h1 className="hero__title">
                Joseph & Fils
            </h1>
            <div className="hero__ticker-container">
                <div className="hero__ticker">
                    <span className="hero__ticker-words">
                        <span>Menuiserie</span>
                        <span>Agencement</span>
                        <span aria-hidden="true">Menuiserie</span>
                    </span>
                </div>
            </div>
        </motion.section>
    )
}