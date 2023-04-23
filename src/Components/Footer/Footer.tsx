import styles from './Footer.module.css'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Routes } from '~/constants';

const getActiveRoute = (currentRoute: string): Routes => {
    switch (true) {
        case currentRoute === Routes.Home:
            return Routes.Home
        case currentRoute === Routes.About:
            return Routes.About
        case currentRoute === Routes.Contact:
            return Routes.Contact
        case currentRoute.includes(Routes.Projects) === true:
            return Routes.Home
        default:
            return Routes.Home
    }
}


export const Footer = () => {

    const [areLinksDisplayed, setLinksDisplayed] = useState(false);
    const router = useRouter();

    const activeRoute = getActiveRoute(router.pathname);

    return <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <button
                onClick={() => setLinksDisplayed((linksDisplayed) => !linksDisplayed)}
                className={styles.plusSign}
            >
                <Image width={32} height={32} alt='plus icon' src="/icons/plus.svg" />
            </button>
            <div className={styles.linksWrapper}>
                <AnimatePresence>
                    {areLinksDisplayed &&
                        (<motion.div
                            className={styles.linksWrapper}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                initial={{ x: 18, opacity: 0 }}
                                // the first one should be different, to give padding to the left
                                animate={{ x: 38, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className={styles.routes}
                            >
                                <Link href={Routes.Home} className={`
                                ${styles.firstRoutesLink}
                                ${styles.routesLink} 
                                ${styles['routesLink--metis']} 
                                ${activeRoute === Routes.Home ? styles['routesLink--metis-active'] : ''}
                            `}>
                                    PROJECTS
                                </Link>
                            </motion.div >
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                                className={styles.routes}
                            >
                                <Link href={Routes.About} className={`
                                ${styles.routesLink} 
                                ${styles['routesLink--metis']} 
                                ${activeRoute === Routes.About ? styles['routesLink--metis-active'] : ''}
                            `}>
                                    ABOUT
                                </Link>
                            </motion.div >
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                                className={styles.routes}
                            >
                                <Link href={Routes.Contact} className={`
                                ${styles.routesLink} 
                                ${styles['routesLink--metis']} 
                                ${activeRoute === Routes.Contact ? styles['routesLink--metis-active'] : ''}
                            `}>
                                    CONTACT
                                </Link>
                            </motion.div >
                        </motion.div>)
                    }
                </AnimatePresence>
            </div>
        </div>
    </footer>

}
