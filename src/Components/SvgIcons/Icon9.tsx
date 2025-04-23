import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from './IconUtils';
import styles from './IconCommon.module.css';

export const Icon9 = ({ className, shouldAnimate = true, strokeWidth = '3px' }: { className: string, shouldAnimate?: boolean, strokeWidth: `${number}px` }) => {
    return <motion.svg
        x="0px"
        y="0px"
        viewBox="185 270 705 540"
        className={className}
        vectorEffect='non-scaling-stroke'
        stroke-alignment="inside"
        strokeWidth={strokeWidth}
        {...(shouldAnimate && { ...variantsDefinition })}
    >
        <motion.polygon points="206,561 206,789 446,789 446,562 483,562 483,672 874,672 874,292 
       620,292 620,361 478,361"
            variants={variants()}
            transition={transition}
            className={styles.stroke} />

    </motion.svg>


}
