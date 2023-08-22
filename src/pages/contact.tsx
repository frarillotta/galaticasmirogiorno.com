import styles from '~/styles/Contact.module.css'
import { motion, Variants } from 'framer-motion';
import { Line } from '~/Components/SvgIcons';
import { Link } from '~/Components/Link/Link';

const variants: Variants = {
    initial: {
        scaleY: 0, 
        originY: 0,
        //workaround cause safari sucks
        z: 0.1
    },
    animate: {
        scaleY: 40,
        originY: 0,
        z: 0.1,
        transition: { duration: 2, ease: 'easeInOut', delay: 0.5 }
    },
    // exit: {
    //     scaleY: 0,
    //     origin: 0,
    //     transition: {duration: 0.5, ease: 'linear'}
    // }
}
const MotionLine = motion(Line)

export default function Contact() {
    return (
        <main className={styles.contact}>
            <motion.div
                className={styles.verticalLineWrapper}
            >
                <MotionLine 
                    className={styles.verticalLine} 
                    initial={'initial'}
                    animate={'animate'}
                    // exit={'exit'}
                    variants={variants}
                />
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
            <motion.p
                className={styles.credits}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* <span>DESIGN BY </span><u className={styles.names}>CLAUDIA GIORNO</u>
                <br /> */}
                <span>CODE BY </span><Link href={'https://frannn.co'}><u className={styles.names}>FRANCESCO ARILLOTTA</u></Link>
            </motion.p>
        </main>
    )
}
