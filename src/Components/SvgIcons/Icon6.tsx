import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from './IconUtils';
import styles from './IconCommon.module.css'

export const Icon6 = ({ className, shouldAnimate = true, strokeWidth = '3px' }: { className: string, shouldAnimate?: boolean, strokeWidth: `${number}px` }) => {
    return <motion.svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        strokeWidth={strokeWidth}
        viewBox="168 347 260 149"
        
        vectorEffect='non-scaling-stroke'
        stroke-alignment="inside"
        {...(shouldAnimate && { ...variantsDefinition })}
    >
        <motion.polyline
            variants={variants()}
            transition={transition}
            shape-rendering="crispEdges"
            className={styles.stroke}
            points="173,350 173,492 344,492 344,464" />
        <motion.polyline
            variants={variants()}
            transition={transition}
            className={styles.stroke}
            points="173,350 263,350 266,367 359,350 423,350 423,464 344,464" />
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
