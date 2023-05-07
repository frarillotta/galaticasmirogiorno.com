import { Variants, motion } from "framer-motion";
import { useState } from "react";

const iconVariants: Variants = {
    initial : {
        transformOrigin: '50% 50%'
    },
    tapped: {
        rotate: '90deg',
        transition: {
            duration: 0.3
        }
    },
    nonTapped: {
        rotate: '0deg',
        transition: {
            duration: 0.4,
        }
    }
}

export const PlusIcon = ({className = ''}) => {
    
    const [isTapped, setIsTapped] = useState(false);
    console.log({isTapped})
    
    return <motion.svg 
        onTap={() => {
            setIsTapped(!isTapped)
        }}
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <motion.line 
            variants={iconVariants}
            initial='initial'
            animate={isTapped ? 'tapped' : 'nonTapped'}
            x1="12" 
            y1="5" 
            x2="12" 
            y2="19" 
        />
        <line x1="5" y1="12" x2="19" y2="12" />
    </motion.svg>
}
