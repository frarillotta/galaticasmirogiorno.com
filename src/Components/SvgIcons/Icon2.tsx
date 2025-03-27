import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from "./IconUtils"
import styles from './IconCommon.module.css'

export const Icon2 = ({ className, shouldAnimate = true, strokeWidth = '2px' }: { className: string, shouldAnimate?: boolean, strokeWidth: `${number}px` }) => {
    return <motion.svg
        {...(shouldAnimate && { ...variantsDefinition })}
        className={className}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="133 363 328 118"

        vectorEffect='non-scaling-stroke'
        stroke-alignment="inside"
        strokeWidth={strokeWidth}
    >
        <motion.polyline variants={variants()}
            transition={transition} className={styles.stroke}
            points="370,365 341,365 341,435 341,436 341,477 370,477 370,436 370,435" />
        <motion.rect variants={variants()}
            transition={transition} x="255" y="365" className={styles.stroke}
            width="86" height="70" />
        <motion.polyline variants={variants()}
            transition={transition} className={styles.stroke}
            points="255,365 225,365 225,435 225,436 225,475 225,477 255,477 255,475 255,435" />
        <motion.rect variants={variants()}
            transition={transition} x="370" y="365" className={styles.stroke}
            width="86" height="70" />
        <motion.polyline variants={variants()}
            transition={transition} className={styles.stroke}
            points="225,365 139,365 139,435 225,435" />
    </motion.svg>

}
