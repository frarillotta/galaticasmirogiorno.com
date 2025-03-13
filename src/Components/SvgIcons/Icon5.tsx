import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from './IconUtils';
import styles from './IconCommon.module.css'

export const Icon5 = ({ className, strokeWidth = '2px' }: { className: string, strokeWidth: `${number}px` }) => {
    return <motion.svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        strokeWidth={strokeWidth}
        viewBox="172 349 260 149"
        shape-rendering="crispEdges"
        vector-effect='non-scaling-stroke'
        stroke-alignment="inside"
        {...variantsDefinition}
    >
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="217" y1="492" x2="255" y2="492" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="398" y1="350" x2="398" y2="492" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="398" y1="492" x2="422" y2="469" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="398" y1="492" x2="374" y2="468" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="313" y1="350" x2="313" y2="492" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="279" y1="350" x2="279" y2="492" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="279" y1="492" x2="313" y2="492" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="213" y1="465" x2="174" y2="465" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="174" y1="465" x2="174" y2="350" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="174" y1="350" x2="213" y2="350" />
        <motion.line variants={variants()}
            transition={transition} className={styles.stroke}
            x1="213" y1="465" x2="213" y2="350" />
    </motion.svg>
}
