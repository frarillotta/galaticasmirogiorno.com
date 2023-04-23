import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'
import { Routes } from '../../constants';

//TODO: spacer nel centro - sarebbe carino fare qualche animazione di transizione?
export const Header = () => {
    return <header className={styles.header}>
        <Link href={Routes.Home} className={styles.namesWrapper}>
            <h1 className={styles.name}>
                RUGGIERO GALATI CASMIRO
            </h1>
            <h1 className={styles.name}>
                CLAUDIA GIORNO
            </h1>
        </Link>
        <Image className={styles.verticalLine} width={4} height={48} alt='vertical line' src="/icons/line.svg" />

        <div >
            <h1 className={styles.label}>
                ARCHITECTURE
            </h1>
        </div>
    </header>
}
