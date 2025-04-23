import { Variants, motion } from "framer-motion";

const iconVariants: Variants = {
    tapped: {
        scaleY: 0,
        transition: {
            duration: 0.3
        }
    },
    nonTapped: {
        scaleY: 1,
        transition: {
            duration: 0.4,
        }
    }
}

export const PlusIcon = ({ className = '', isTapped = false }) => {

    return <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3px"
        vectorEffect='non-scaling-stroke'
        stroke-alignment="inside"
        className={className}
    >
        <motion.line
            vectorEffect={'non-scaling-stroke'}
            variants={iconVariants}
            initial='initial'
            animate={isTapped ? 'tapped' : 'nonTapped'}
            x1="12"
            y1="4"
            shape-rendering="crispEdges"
            x2="12"
            y2="20"
        />
        <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            vectorEffect={'non-scaling-stroke'}
            shape-rendering="crispEdges" 
        />
    </motion.svg>
}
