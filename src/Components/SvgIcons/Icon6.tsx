import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from './IconUtils';
import styles from './IconCommon.module.css'

export const Icon6 = ({ className, strokeWidth = '2px' }: { className: string, strokeWidth: `${number}px` }) => {
    return <motion.svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        strokeWidth={strokeWidth}
        viewBox="167.69 349.34 260.62 143.37"
        {...variantsDefinition}
    >
        <motion.polyline
            variants={variants()}
            transition={transition}
            className={styles.stroke}
            points="173.19,349.84 173.19,492.21 343.65,492.21 343.65,464.25 " />
        <motion.polyline
            variants={variants()}
            transition={transition}
            className={styles.stroke}
            points="173.19,349.84 262.59,349.84 266.05,366.61 358.87,349.84 422.81,349.84 422.81,464.25 343.65,464.25   " />
        <motion.path
            variants={variants()}
            transition={transition}
            className={styles.stroke}
            d="M224.91,461.14c10.31-0.18,18.52-8.68,18.35-18.99c-0.17-10.06-8.29-18.17-18.35-18.35" />
        <motion.path
            variants={variants()}
            transition={transition}
            className={styles.stroke}
            d="M224.91,423.8c-10.31,0.18-18.52,8.68-18.35,18.99c0.17,10.06,8.29,18.17,18.35,18.35" />
    </motion.svg>
}
