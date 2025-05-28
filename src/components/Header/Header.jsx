import { useRef, useState } from "react";
import { motion } from 'framer-motion'
import backgroundImage from '@/../public/background.jpg'
import { Main } from "@/components/Main/Main.jsx";

import styles from './Header.module.scss'
import {Final} from "@/components/Final/Final.jsx";

const TOTAL_PAGES = 3;

export const Header = () => {
    const [currentPage, setCurrentPage] = useState(0)

    const startPosition = useRef(0)
    const onTouchStart = (e) => {
        startPosition.current = e.changedTouches[0].clientY
    }

    const onTouchEnd = (e) => {
        if (startPosition.current - e.changedTouches[0].clientY > 100) {
            setCurrentPage(prev => prev + 1 === TOTAL_PAGES ? 0 : prev + 1)
        } else if (e.changedTouches[0].clientY - startPosition.current > 100) {
            setCurrentPage(prev => prev - 1 < 0 ? TOTAL_PAGES - 1 : prev - 1)
        }
        startPosition.current = 0
    }
    return (
        <div
            className={styles.wrapper}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {currentPage === 0 && (
                <>
                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, translateY: '-50px' }}
                        animate={{ opacity: 1, translateY: '0' }}
                        transition={{
                            delay: 0.4,
                       }}
                    >
                        <img src={backgroundImage} alt="Gayshit" />
                    </motion.div>
                    <div className={styles.titleContainer}>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateX: '-250px',
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 0.3,
                    }}
                >
                    Сертификат
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateX: '250px',
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 0.3,
                    }}
                >
                    на&nbsp;свидание
                </motion.div>
            </div>
            </>
            )}
            {currentPage === 1 && <Main />}
            {currentPage === 2 && <Final />}
        </div>
    )
}