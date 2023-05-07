import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from './IconUtils';
import styles from './IconCommon.module.css'

export const Icon4 = ({ className }: { className: string }) => {
    return <motion.svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        stroke-width='1px'
        viewBox="241.81 278.16 112.38 285.73"
        {...variantsDefinition}
    >
        <motion.line
            variants={variants}
            transition={transition}
            className={styles.stroke}
            x1="332.84" y1="563.39" x2="242.31" y2="278.66" />
        <motion.rect
            variants={variants}
            transition={transition}
            x="321.69" y="278.66" className={styles.stroke}
            width="32" height="51.62" />
    </motion.svg>
}
