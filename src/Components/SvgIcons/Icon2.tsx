import { motion } from "framer-motion"
import { transition, variants, variantsDefinition } from "./IconUtils"


export const Icon2 = ({ className }: { className: string }) => {
    return <motion.svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="66.16 349.34 463.67 143.37"
        {...variantsDefinition}
    >
        <motion.path
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }}
            d="M140.29,363.4c7.99-8.64,19.22-13.56,30.99-13.56"
        />
        <motion.line
            variants={variants}
            transition={transition}
            style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }}
            x1="529.33"
            y1="364.85"
            x2="529.33"
            y2="349.84"
        />
        <motion.line
            variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="171.28" y1="349.84" x2="529.33" y2="349.84" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="140.29" y1="363.4" x2="139.03" y2="364.85" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="403.62" y1="449.59" x2="403.62" y2="377.44" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="371.66" y1="449.59" x2="371.66" y2="377.44" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="371.66" y1="492.21" x2="288.18" y2="492.21" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="256.22" y1="449.59" x2="256.22" y2="377.44" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="288.18" y1="449.59" x2="288.18" y2="377.44" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="288.18" y1="377.44" x2="371.66" y2="377.44" />
        <motion.path variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} d="M403.62,377.44h84.45v72.15h-0.97h-41.26h-42.23v42.61h42.23h41.26h42.23v-42.61v-72.15v-12.59v-15.01  l-358.05,0c-11.77,0-23,4.92-30.99,13.56l-1.27,1.45l-16.46,18.9l-45.19,51.89l-1.98,2.45l-1.8,2.59L72,443.38l-1.41,2.82l-1.2,2.91  l-1.09,3.34l-0.82,3.42l-0.55,3.47l-0.27,3.51l0.02,3.52l0.3,3.5l0.58,3.47l0.85,3.41l1.12,3.33l1.39,3.23l1.64,3.11l1.88,2.97  l2.12,2.81h64.21h30.99h43.19h41.26v-42.61h-41.26h-43.19v-72.15h84.45" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="371.66" y1="492.21" x2="371.66" y2="449.59" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="371.66" y1="449.59" x2="288.18" y2="449.59" />
        <motion.line variants={variants}
            transition={transition} style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round' }} x1="288.18" y1="449.59" x2="288.18" y2="492.21" />
    </motion.svg>
}
