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

const wrapperVariants: Variants = {
    tapped: {
        scale: 2
    }
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ pictureName, projNumber, width, height, loading, image, quality = 80, priority = false, className = '' }) => {

    const [imageScope, animateImage] = useAnimate();
    const imageRef = useRef<HTMLImageElement>(null);
    const [wrapperScope, animateShadow] = useAnimate();

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
        const el = imageRef.current;
        const eventsCleanup = mouseOutInEventListener(el);

        return eventsCleanup;
    }, [imageScope])

    return <motion.div
        ref={wrapperScope}
        variants={wrapperVariants}
        layout
        // transition={{ duration: 10 }}
        // animate={tapped ? 'tapped' : false}
        className={`${tapped ? styles.openedPictureContainer : styles.pictureContainer} ${className}`}
        onTap={() => {
            setTapped(!tapped);
        }}
    >
        <AnimatePresence>
            <motion.div
                layout
                // transition={{ duration: 10 }}
                ref={imageScope}
                // variants={imageVariants}
                initial={'initial'}
                className={styles.pictureWrapper}>
                {/* <div className={styles.wrapper2}> */}
                    <MotionImage
                        // layout
                        // transition={{ duration: 10 }}
                        // whileHover={'whileHover'}
                        // whileInView={'reveal'}
                        ref={imageRef}
                        quality={quality}
                        viewport={{ once: true }}
                        loading={loading}
                        priority={priority}
                        // onLoadingComplete={onLoadComplete}
                        className={` ${styles.projectPicture} ${styles.withBackground}`}
                        alt={`project ${projNumber} ${pictureName} Picture`}
                        src={image}
                        width={width}
                        height={height}
                    />
                {/* </div> */}
            </motion.div>
        </AnimatePresence>
    </motion.div>
};
