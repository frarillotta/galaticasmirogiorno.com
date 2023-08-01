import Link from 'next/link'
import styles from './Header.module.css'
import { Routes } from '../../constants';
import { useRouter } from 'next/router';
import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { Line } from '../SvgIcons';

export const Header = () => {
    const router = useRouter();
    const [scope, animate] = useAnimate();
    
    useEffect(() => {
        if (router.asPath === Routes.Projects) {
            animate(scope.current, {
                originY: 0,
                scaleY: 0,
            }, {delay: 0.49, ease: 'linear', duration: 0.1})
        } else {
            animate(scope.current, {
                originY: 0,
                scaleY: 1,
            })
        }
    }, [router, animate, scope])

    return <header className={styles.header}>
        <Link href={Routes.Home} className={styles.namesWrapper}>
            <h1 className={styles.name}>
                RUGGIERO GALATI CASMIRO
            </h1>
            <h1 className={styles.name}>
                CLAUDIA GIORNO
            </h1>
        </Link>
        <Line className={styles.verticalLine} ref={scope} />

            <h1 className={styles.label}>
                ARCHITECTURE
            </h1>
    </header>
}
