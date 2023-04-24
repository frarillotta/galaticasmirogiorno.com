import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from './IconUtils';


export const Icon3 = ({ className }: { className: string }) => {
    return <motion.svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="259.22 278.3 77.56 285.45"
        {...variantsDefinition}
    >
        <motion.polyline
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} points="279.35,535.06 259.72,537.37 262.77,563.25 313.43,557.29 311.87,544.07 " />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="312.33" y1="278.8" x2="271.98" y2="284.26" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="271.98" y1="284.26" x2="280" y2="343.51" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="280" y1="343.51" x2="285.41" y2="383.49" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="285.41" y1="383.49" x2="278.99" y2="543.91" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="278.99" y1="543.91" x2="335.86" y2="544.2" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="335.86" y1="544.2" x2="336.28" y2="463.04" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="336.28" y1="463.04" x2="296.72" y2="462.84" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="296.72" y1="462.84" x2="296.82" y2="444.75" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="296.82" y1="444.75" x2="334.82" y2="444.94" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="334.82" y1="444.94" x2="321.34" y2="345.37" />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="321.34" y1="345.35" x2="312.33" y2="278.8" />
    </motion.svg>
}
