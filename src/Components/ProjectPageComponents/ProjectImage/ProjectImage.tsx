import Image, { StaticImageData } from 'next/image'
import styles from './ProjectImage.module.css';
import { AnimatePresence, Variants, motion, useAnimate } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { mouseOutInEventListener } from '~/Components/Cursor/Cursor';

type ProjectImageProps = {
    pictureName: string;
    projNumber: number;
    width: number;
    height: number;
    image: StaticImageData;
    quality?: number;
    priority?: boolean;
    loading?: 'eager' | 'lazy';
    className?: string;
}

const MotionImage = motion(Image);

const imageVariants: Variants = {
    initial: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 1px, 0% 1px)',
    },
    whileHover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    }
}
const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

function calcTransformImage(el: HTMLElement, winHeight: number, winWidth: number) {
    const rect = el.getBoundingClientRect();
    const vals = {
        scale: Math.max(winWidth > winHeight ? (winWidth * 0.54 / rect.width) : (winHeight * 0.54 / rect.height), 1.05),
        x: winWidth * 0.65 - (rect.left + rect.width / 2),
        y: winHeight * 0.50 - (rect.top + rect.height / 2)
    };
    // vals.scale = clamp(vals.scale, 1, winWidth > winHeight ? winWidth/rect.width : winHeight/rect.height)

    return vals;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ pictureName, projNumber, width, height, loading, image, quality = 80, priority = false, className = '' }) => {

    const [imageScope, animateImage] = useAnimate();
    const imageRef = useRef<HTMLImageElement>(null);
    const [wrapperScope, animateWrapper] = useAnimate();
    const [tapped, setTapped] = useState(false);
    // const isImageInView = useInView(imageScope);
    const [rendered, setRendered] = useState(false);

    // const animateIn = useCallback(() => {
    //     if (imageRef.current?.complete && !rendered) {
    //         animateImage(imageScope.current, {
    //             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    //         }, {
    //             ease: 'easeOut',
    //             duration: 1.5,
    //             delay: 0.2
    //         });

    //         animateShadow(wrapperScope.current, {
    //             filter: 'drop-shadow(0px 2px 0px rgba(54, 54, 54, 0))'
    //         }, {
    //             ease: 'easeOut',
    //             duration: 1.5,
    //             delay: 0.2
    //         })
    //         setRendered(true)
    //     }
    // }, [imageScope, rendered, animateImage, animateShadow, wrapperScope]);

    // const onLoadComplete = useCallback(() => {
    //     animateIn();
    // }, [animateIn]);

    // useEffect(() => {
    //     animateIn();
    // }, [animateIn]);

    useEffect(() => {
        const el = wrapperScope.current;
        const eventsCleanup = mouseOutInEventListener(el);

        return eventsCleanup;
    }, [imageScope]);

    return <motion.div
        ref={wrapperScope}
        className={`${styles.pictureContainer} ${className}`}

    >
        {/* <AnimatePresence> */}
        <motion.div
            // ref={imageScope}
            // variants={imageVariants}
            initial={'initial'}
            className={styles.pictureWrapper}
        >
            <MotionImage
                // whileHover={'whileHover'}
                // whileInView={'reveal'}
                onTap={async () => {

                    setTapped(!tapped);
                    const { scale, x, y } = calcTransformImage(imageScope.current, window.innerHeight, window.innerWidth);
                    // when opening, we want to be on top
                    if (!tapped) {
                        imageScope.current.style.zIndex = 100;
                        await animateImage(imageScope.current, {
                            x,
                            y,
                            scale,
                            borderRadius: '4px'
                        }, {
                            duration: .5,
                            ease: 'easeInOut'
                        })
                    }
                    //when closing, wait for animation to finish then reset zIndex to 1
                    if (tapped) {
                        await animateImage(imageScope.current, {
                            x: 0,
                            y: 0,
                            scale: 1,
                            borderRadius: '0px'
                        }, {
                            duration: .5,
                            ease: 'easeInOut'
                        })
                        imageScope.current.style.zIndex = 1;
                    }
                }}
                ref={imageScope}
                quality={quality}
                viewport={{ once: true }}
                loading={loading}
                priority={priority}
                // onLoadingComplete={onLoadComplete}
                className={`${styles.projectPicture} ${styles.withBackground}`}
                alt={`project ${projNumber} ${pictureName} Picture`}
                src={image}
                width={width}
                height={height}
            />
        </motion.div>
        {/* </AnimatePresence> */}
        <AnimatePresence>
            {tapped && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.overlay}>
                <div className={styles.textWrapper}>
                    <motion.article className={styles.text}>
                        <motion.div className={styles.titleTextContainer}>
                            <motion.h1 className={styles.title} initial={{ y: '150%', rotate: '-5deg' }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.5,ease: 'easeOut', delay: 0.1 }}>Image name</motion.h1>
                            </motion.div>
                        <motion.div className={styles.textContainer}>
                            <motion.p initial={{ y: '150%', rotate: '-5deg' }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.5,ease: 'easeOut', delay: 0.2 }}>Lorem ipsum dolor sit amet</motion.p>
                        </motion.div>
                        <motion.div className={styles.textContainer}>
                            <motion.p initial={{ y: '150%', rotate: '-5deg' }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.5,ease: 'easeOut', delay: 0.3 }}>sed do eiusmod tempor </motion.p>
                        </motion.div>
                        <motion.div className={styles.textContainer}>
                            <motion.p initial={{ y: '150%', rotate: '-5deg' }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.5,ease: 'easeOut', delay: 0.4 }}>Cras tincidunt lobortis feugiat</motion.p>
                        </motion.div>
                    </motion.article>
                </div>
            </motion.div>}
        </AnimatePresence>
    </motion.div>
};
