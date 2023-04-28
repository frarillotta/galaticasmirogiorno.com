import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'
import { Routes } from '../../constants';
import { useRouter } from 'next/router';
import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

//TODO: spacer nel centro - sarebbe carino fare qualche animazione di transizione?
export const Header = () => {
    const router = useRouter();
    const [scope, animate] = useAnimate();
    
    useEffect(() => {
        if (router.asPath === Routes.Projects) {
            animate(scope.current, {
                originY: 0,
                scaleY: 0
            })
        } else {
            animate(scope.current, {
                originY: 0,
                scaleY: 1
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
        <Image ref={scope} className={styles.verticalLine} width={4} height={48} alt='vertical line' src="/icons/line.svg" />

        <div >
            <h1 className={styles.label}>
                ARCHITECTURE
            </h1>
        </div>
    </header>
}
