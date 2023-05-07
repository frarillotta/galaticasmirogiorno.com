import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from "./IconUtils"


export const Icon2 = ({ className }: { className: string }) => {
    return <motion.svg {...variantsDefinition} className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="138.6 364.3 318 113.3">
        <motion.polyline variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} points="369.8,364.8 340.8,364.8 340.8,434.5 340.8,436.4 340.8,477.1 369.8,477.1 369.8,436.4 369.8,434.5 	 		" />
        <motion.rect variants={variants}
            transition={transition} x="254.5" y="364.8" style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} width="86.3" height="69.7" />
        <motion.polyline variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} points="254.5,364.8 225.4,364.8 225.4,434.5 225.4,436.4 225.4,475.1 225.4,477.1 254.5,477.1 254.5,475.1  		254.5,434.5 	" />
        <motion.rect variants={variants}
            transition={transition} x="369.8" y="364.8" style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} width="86.3" height="69.7" />
        <motion.polyline variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} points="225.4,364.8 139.1,364.8 139.1,434.5 225.4,434.5 	" />
    </motion.svg>

}
