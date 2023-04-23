import Head from 'next/head'
import Image from 'next/image'
import styles from '~/styles/Contact.module.css'
import { Header } from '~/Components/Header/Header'
import { Footer } from '~/Components/Footer/Footer'
import { AnimatePresence, motion } from 'framer-motion';

export default function Contact() {
    return (
        <main className={styles.contact}>
            <AnimatePresence >
                <motion.div 
                    className={styles.verticalLine} 
                    initial={{ scaleY: 0, originY: 0 }} 
                    animate={{ scaleY: 23 }} 
                    transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
                >
                    <Image width={4} height={48} alt='vertical line' src="/icons/line.svg" />
                </motion.div>
                <motion.p 
                    className={styles.contactDetails} 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <span>VIA DOTTOR CONSOLI 11, CATANIA, IT</span>
                    <br />
                    <br />
                    <span>INFO@GALATICASMIROGIORNO.COM</span><br />
                    <span>+39 346 37 266 07</span><br />
                    <span>+39 393 89 31 973</span><br />
                </motion.p>
            </AnimatePresence>
        </main>
    )
}
