import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import heartLottie from 'public/lotties/heart.json'
import { simpleAppendAnimation } from "@/utils/simpleAppendAnimation.js";
import styles from './Final.module.scss'

export const Final = () => {
    return (
        <motion.div
            {...simpleAppendAnimation()}
        >
            <Lottie  animationData={heartLottie} loop/>
            <p className={styles.title}>А теперь выбирай дату и время...😈</p>
        </motion.div>
    )
}