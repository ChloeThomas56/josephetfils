import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import testimonies from "@/lib/testimonies";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function Testimonies() {
    const [translateX, setTranslateX] = useState(0);
    const [scrollOffset, setScrollOffset] = useState(0);

    return (
        <div className="testimonies">
            <ul 
                className="testimonies__list no-scrollbar"
                style={{ transform: `translateX(calc(${translateX}% - ${scrollOffset}px))` }}
            >
                {[...testimonies].reverse().map((testimony) => (
                    <li 
                        key={testimony.id}
                        className="testimony"
                    >
                        <div className="testimony__header">
                            <Image
                                src="/images/google.png" 
                                width={128}
                                height={128}
                                alt="Avis google"
                            />
                            <div>
                                <span className="testimony__name">
                                    {testimony.fullname}
                                </span>
                                <span className="testimony__date">
                                    {testimony.date}
                                </span>
                            </div>
                        </div>
                        <div className="testimony__rate">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={`${index < testimony.rate ? "testimony__rate--active" : "testimony__rate--inactive"}`}
                                />
                            ))}
                        </div>
                        <p className="testimony__review">
                            {testimony.review}
                        </p>
                        <a 
                            href={testimony.link} 
                            target="_blank"
                            className="testimony__link"
                        >
                            Voir l&apos;avis
                        </a>
                    </li>
                ))}
            </ul>
            {/* Arrows */}
            {testimonies.length > 4 &&
                <>
                    <AnimatePresence>
                        {translateX < 0 &&
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="icon arrow testimonies__arrow testimonies__arrow--left"
                                aria-label="Précédent"
                                onClick={() => {
                                    setTranslateX(prev => prev + 25);
                                    setScrollOffset(prev => prev - 1);
                                }}
                            >
                                <IoIosArrowRoundBack />
                            </motion.button>
                        }
                    </AnimatePresence>
                        {(translateX > (-(testimonies.length - 4) * 25)) &&
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }} 
                                className="icon arrow testimonies__arrow testimonies__arrow--right"
                                aria-label="Suivant"
                                onClick={() => {
                                    setTranslateX(prev => prev - 25);
                                    setScrollOffset(prev => prev + 1);
                                }}
                            >
                                <IoIosArrowRoundForward />
                            </motion.button>
                        }
                </>
            }
        </div>
    )
}