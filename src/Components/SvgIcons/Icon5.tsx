import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from './IconUtils';
import styles from './IconCommon.module.css'

export const Icon5 = ({ className, strokeWidth = '1px' }: { className: string, strokeWidth: `${number}px` }) => {
    return <motion.svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        strokeWidth={strokeWidth}
        viewBox="168.89 349.34 258.22 143.37"
        {...variantsDefinition}
    >
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="217.19" y1="491.68" x2="255.09" y2="491.68" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="398.2" y1="349.84" x2="398.2" y2="492.21" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="398.2" y1="492.21" x2="421.61" y2="468.8" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="398.2" y1="492.21" x2="374.28" y2="468.28" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="313.56" y1="349.84" x2="313.56" y2="491.68" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="279.11" y1="349.84" x2="279.11" y2="491.68" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="279.11" y1="491.68" x2="313.56" y2="491.68" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="213.42" y1="465.04" x2="174.39" y2="465.04" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="174.39" y1="465.04" x2="174.39" y2="349.84" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="174.39" y1="349.84" x2="213.42" y2="349.84" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="213.42" y1="465.04" x2="213.42" y2="349.84" />
    </motion.svg>
}
