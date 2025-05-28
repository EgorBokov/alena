import { motion } from 'framer-motion'
import massage from 'public/massage.jpg'
import mac from 'public/mac.jpg'
import horse from 'public/horse.jpg'

import styles from './Main.module.scss'

const images = [
    { img: horse, title: 'Лошадиная гулянка' },
    { img: mac, title: 'Интеллигентная обжираловка' },
    { img: massage, title: 'Массажка :)' },
]

export const Main = () => {
    return (
        <motion.div
            className={styles.container}
            initial={{opacity: 0, translateY: '-50px'}}
            animate={{opacity: 1, translateY: '0'}}
            transition={{
                delay: 0.4,
            }}
        >
            <div className={styles.screen}>
                {images.map(({ img, title }, idx) => (
                    <motion.div
                        className={styles.block}
                        animate={{ opacity: 1, translateX: 0 }}
                        initial={{ opacity: 0, translateX: (idx + 1) % 2 !== 0 ? '-250px': '250px' }}
                        transition={{
                            delay: 0.7 * (idx + 1),
                            duration: 0.2,
                        }}
                    >
                        <img src={img} alt="Изображение 1"/>
                        <p>{title}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}