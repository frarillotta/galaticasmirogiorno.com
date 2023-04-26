import { AnimationProps, MotionProps } from "framer-motion"

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
            pathOffset: 25,
            pathLength: 0.9,
            transition: {
                pathLength: { duration: 1 },
                pathOffset: { ease: "linear" ,duration: 40, repeat: Infinity }
            }
        };
    },
};


export const transition: AnimationProps['transition'] = {
    duration: 2
};

export const variantsDefinition: MotionProps = {
    initial: 'hidden',
    animate: 'visible',
    whileHover: 'hover',
};
