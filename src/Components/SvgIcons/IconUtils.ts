import { AnimationProps, MotionProps } from "framer-motion"

export const variants: (props?: {hoverDuration?: number, transitionDuration?: number, hoverOffsetDuration?: number}) => AnimationProps['variants'] = ({hoverDuration = 1, transitionDuration = 1.5, hoverOffsetDuration = 40} = {}) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1.4,
        opacity: 1,
        pathOffset: 0,
        transition: {
            pathLength: { type: "spring", duration: transitionDuration },
            opacity: { duration: 0.01 }
        }
    },
    hover: {
        pathOffset: 25,
        pathLength: 0.9,
        transition: {
            pathLength: { duration: hoverDuration },
            pathOffset: { ease: "linear", duration: hoverOffsetDuration, repeat: Infinity }
        }
    },
});

export const transition: AnimationProps['transition'] = {
    duration: 2
};

export const variantsDefinition: MotionProps = {
    initial: 'hidden',
    animate: 'visible',
    whileHover: 'hover',
    whileTap: 'visible'
};
