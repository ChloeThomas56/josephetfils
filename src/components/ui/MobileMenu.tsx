import { AnimatePresence, motion } from "motion/react";
import { useSmoothScrolling } from "@/hooks/useSmoothScrolling";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

interface MobileMenuProps {
    links: { path: string; label: string }[];
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ links, isOpen, onClose }: MobileMenuProps) {
    const lenis = useSmoothScrolling();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
                        transition={{ duration: 0.3 }}
                        className="underlay"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.8, ease: [.6,.14,0,1] }}
                        className="mobile-menu"
                        onAnimationStart={(variant) => {
                            if (typeof variant !== "string" && "x" in variant) {
                                if (variant.x === 0) {
                                    lenis?.stop();
                                    document.documentElement.style.overflowY = "hidden";
                                }
                            }
                        }}
                        onAnimationComplete={(variant) => {
                            if (typeof variant !== "string" && "x" in variant) {
                                if (variant.x !== 0) {
                                    lenis?.start();
                                    document.documentElement.style.overflowY = 'auto'; 
                                }
                            }
                        }}
                    >
                        <div className="mobile-menu__inner">
                            <div>
                                <div className="mobile-menu__header">
                                    <button onClick={onClose}>
                                        <IoCloseOutline />
                                    </button>
                                </div>
                                <nav className="mobile-menu__nav">
                                    <ul>
                                        {links.map((link) => (
                                            <li
                                                key={link.label} 
                                                className="mobile-menu__nav-item"
                                            >
                                                <Link 
                                                    href={link.path}
                                                    onClick={onClose}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <span className="mobile-menu__footer">
                                J&F
                            </span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}