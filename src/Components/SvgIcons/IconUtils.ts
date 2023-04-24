import { AnimationProps } from "framer-motion"

export const variants: AnimationProps['variants'] = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
        return {
            pathLength: 1,
            opacity: 1,
            pathOffset: 0,
            transition: {
                pathLength: { type: "spring", duration: 1.5, bounce: 0 },
                opacity: { duration: 0.01 }
            }
        };
    },
    hover: () => {
        return {
            pathOffset: 10,
            pathLength: 0.9,
            transition: {
                pathLength: { duration: 1 },
                pathOffset: { duration: 20 }
            }
        };
    },
};


export const transition: AnimationProps['transition'] = {
    duration: 2
};

export const variantsDefinition = {
    initial: 'hidden',
    animate: 'visible',
    whileHover: 'hover'
};
