import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from "./IconUtils"
import styles from './IconCommon.module.css'

export const Icon1 = ({ className }: { className: string }) => {
    return <motion.svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        strokeWidth='1px'
        viewBox="259.87 349.33 76.25 143.37"
        {...variantsDefinition}
    >
        <motion.path
            className={styles.stroke}
            d="M265.37,415.09v71.18l60.23,5.93V385.43l5.02-32.63l-48.82-2.97C280.17,372.38,274.61,394.46,265.37,415.09z"
            variants={variants()}
            transition={transition}
        />
    </motion.svg>
}
