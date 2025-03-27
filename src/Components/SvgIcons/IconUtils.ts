import { AnimationProps, MotionProps } from "framer-motion"

export const variants: (props?: { 
    hoverPathLengthDuration?: number, 
    transitionDuration?: number, 
    hoverOffsetDuration?: number, 
    hoverPathLength?: number,
    hoverPathSpacing?: number,
    pathOffset?: number,
    pathSpacing?: number,
}) => AnimationProps['variants'] = ({ 
    hoverPathLengthDuration = 1, 
    pathOffset = 0.2,
    hoverPathLength = 0.8, 
    transitionDuration = 2.5, 
    hoverOffsetDuration = 1.5,
    hoverPathSpacing = 0.2,
    pathSpacing = 0.4,
} = {}) => ({
    hidden: { 
        pathLength: 0.001, 
        opacity: 0,
        pathSpacing,
        pathOffset,
    },
    visible: {
        pathLength: 1.4,
        opacity: 1,
        pathOffset: 0,
        pathSpacing: 0,
        transition: {
            duration: transitionDuration,
            bounce: 0,
            ease: 'easeOut',
            pathLength: { duration: transitionDuration, bounce: 0 },
            opacity: { duration: 0.1 },
            pathOffset: {duration: transitionDuration/1.5},
        }
    },
    hover: {
        pathOffset: 2,
        pathLength: hoverPathLength,
        pathSpacing: hoverPathSpacing,
        transition: {
            pathLength: {duration: 0.75, ease: 'easeIn', bounce: 0},
            pathSpacing: {duration: 0.75, ease: 'easeIn', bounce: 0},
            pathOffset: { ease: "linear", duration: hoverOffsetDuration, repeat: Infinity, bounce: 0 }
        }
    },
});

export const transition: AnimationProps['transition'] = {
    duration: 3,
    ease: 'easeOut'
};

export const variantsDefinition: MotionProps = {
    initial: 'hidden',
    animate: 'visible',
    whileHover: 'hover',
    whileTap: 'visible',
};
