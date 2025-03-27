import styles from './Header.module.css'
import { Routes } from '../../constants';
import { Line } from '../SvgIcons';
import { Link } from '../Link/Link';

export const Header = () => {

    return <header className={styles.header}>
        <Link ariaLabel="RUGGIERO GALATI CASMIRO CLAUDIA GIORNO" href={Routes.Home} className={styles.namesWrapper}>
            <h1 className={styles.name}>
                RUGGIERO GALATI CASMIRO
            </h1>
            <h1 className={styles.name}>
                CLAUDIA GIORNO
            </h1>
        </Link>
        <div className={styles.lineWrapper}>
            <Line className={styles.verticalLine} />
        </div>
            <h1 className={styles.label}>
                ARCHITECTURE
            </h1>
    </header>
}
