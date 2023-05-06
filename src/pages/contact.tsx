import Image from 'next/image'
import styles from '~/styles/Contact.module.css'
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
    initial: {
        scaleY: 0, originY: 0
    },
    exit: {
        scaleY: 0,
        transition: { duration: 1, ease: 'easeIn' }
    },
    animate: {
        scaleY: 43,
        origin: 0,
        transition: { duration: 2, ease: 'easeInOut', delay: 0.5 }
    }
}

export default function Contact() {
    return (
        <main className={styles.contact}>
            <motion.div
                className={styles.verticalLine}
                exit={'exit'}
                animate={'animate'}
                variants={variants}
            >
                <Image width={4} height={48} alt='vertical line' src="/icons/line.svg" />
            </motion.div>
            <motion.p
                className={styles.contactDetails}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <span>VIA DOTTOR CONSOLI 11, CATANIA, IT</span>
                <br />
                <br />
                <span>INFO@GALATICASMIROGIORNO.COM</span><br />
                <span>+39 346 37 266 07</span><br />
                <span>+39 393 89 31 973</span><br />
            </motion.p>
        </main>
    )
}
