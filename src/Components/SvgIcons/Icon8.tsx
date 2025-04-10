import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from './IconUtils';
import styles from './IconCommon.module.css';

export const Icon8 = ({ className, shouldAnimate = true, strokeWidth = '2px' }: { className: string, shouldAnimate?: boolean, strokeWidth: `${number}px` }) => {
    return <motion.svg
        x="0px"
        y="0px"
        viewBox="300 250 452 517"
        className={className}
        vectorEffect='non-scaling-stroke'
        stroke-alignment="inside"
        strokeWidth={strokeWidth}
        {...(shouldAnimate && { ...variantsDefinition })}
    >
        <motion.line
            x1="414"
            y1="364"
            x2="638"
            y2="364"
            variants={variants()}
            transition={transition}
            className={styles.stroke}
        />
        <motion.rect
            x="302"
            y="252"
            width="448"
            height="511"
            variants={variants()}
            transition={transition}
            className={styles.stroke}
        />
    </motion.svg>

}
