import { AnimatePresence, motion } from 'motion/react';
import { useSmoothScrolling } from '@/hooks/useSmoothScrolling';
import { IoCloseOutline } from "react-icons/io5";

export default function Modal({ children, show, close }: { children?: React.ReactNode, show: boolean, close: () => void }) {
    const lenis = useSmoothScrolling();

    return (
        <AnimatePresence>
            {show && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
                        transition={{ duration: 0.3 }}
                        className="underlay"
                    />
                    <motion.div
                        initial={{ scale: 0, x:"-50%", y:"-50%" }}
                        animate={{
                            scale: 1,
                            x: "-50%",
                            y: "-50%",
                            transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
                        }}
                        exit={{
                            scale: 0,
                            x: "-50%",
                            y: "-50%",
                            transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
                        }}
                        className="modal"
                        role="dialog"
                        onAnimationStart={(variant) => {
                            if (variant === 'enter') {
                                lenis?.stop();
                                document.documentElement.style.overflowY = 'hidden';
                            }
                        }}
                        onAnimationComplete={(variant) => {
                            if (variant === 'exit') {
                                lenis?.start();
                                document.documentElement.style.overflowY = 'auto'; 
                            }
                        }}>
                            <button className="modal__close-btn" onClick={close}>
                                <IoCloseOutline />
                            </button>
                            {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )

}