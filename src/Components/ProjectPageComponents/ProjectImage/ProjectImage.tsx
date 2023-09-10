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
    key?: string;
    onTap?: (event: any) => void;
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

const ExpandedProjectImage: React.FC<ProjectImageProps> = ({
    pictureName,
    projNumber,
    width,
    height,
    loading,
    image,
    quality,
    priority,
    onTap,
    className
}) => {

    const [imageScope, animateImage] = useAnimate();
    const imageRef = useRef<HTMLImageElement>(null);

    const [rendered, setRendered] = useState(false);
    const animateIn = useCallback(() => {
        if (imageRef.current?.complete && !rendered) {
            animateImage(imageScope.current, {
                clipPath: 'polygon(0% 0%, 0px 100%, 101% 100%, 101% 0px)',
            }, {
                ease: 'easeOut',
                duration: 1.5,
            });
            setRendered(true)
        }
    }, [imageScope, rendered, animateImage]);

    const onLoadComplete = useCallback(() => {
        setTimeout(() => {
            animateIn();
        }, 1500)
    }, [animateIn]);

    // useEffect(() => {
    //     animateIn();
    // }, [animateIn]);

    useEffect(() => {
        const el = imageRef.current;
        const eventsCleanup = mouseOutInEventListener(el);

        return eventsCleanup;
    }, [imageScope])


    return <AnimatePresence >
        <motion.div onClick={onTap} className={styles.opacityLater} animate={{ opacity: 0.3 }} />
        <motion.div
            onTap={onTap}
            ref={imageScope}
            className={styles.expandedPictureWrapper}
            animate={{
                clipPath: 'polygon(0% 0%, 0px 100%, 1px 100%, 1px 0px)', transition: {
                    duration: 1,
                    delay: 0.5
                }
            }}
        >
            <MotionImage
                className={`${styles.expandedPicture} ${styles.projectPicture} ${styles.withBackground}`}
                ref={imageRef}
                quality={quality}
                viewport={{ once: true }}
                loading={loading}
                priority={priority}
                onLoadingComplete={onLoadComplete}
                alt={`expanded project ${projNumber} ${pictureName} Picture`}
                src={image}
                width={width}
                height={height}
            />
        </motion.div>
    </AnimatePresence>
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
    pictureName,
    projNumber,
    width,
    height,
    loading,
    image,
    quality = 80,
    priority = false,
    className = ''
}) => {

    const [imageScope, animateImage] = useAnimate();
    const imageRef = useRef<HTMLImageElement>(null);
    const [wrapperScope, animateShadow] = useAnimate();

    // const isImageInView = useInView(imageScope);
    // const [rendered, setRendered] = useState(false);
    const [selected, setSelected] = useState(false);
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

    return <>
        <motion.div
            ref={wrapperScope}
            className={`${styles.pictureContainer} ${className}`}
            onTap={() => {
                setSelected(!selected)
            }}
        >
            <AnimatePresence>
                <motion.div
                    ref={imageScope}
                    // variants={imageVariants}
                    initial={'initial'}
                    className={styles.pictureWrapper}>
                    <MotionImage
                        // whileHover={'whileHover'}
                        // whileInView={'reveal'}
                        ref={imageRef}
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
            </AnimatePresence>
        </motion.div>
        {selected && <AnimatePresence >

            <ExpandedProjectImage
                pictureName={pictureName}
                height={height * 2}
                width={width * 2}
                image={image}
                projNumber={projNumber}
                loading={'eager'}
                priority={true}
                quality={100}
                onTap={(e) => {
                    console.log(e)
                    setSelected(!selected)
                    e.stopPropagation();
                }}
                key={`expanded ${pictureName}`}
            />
        </AnimatePresence>}
    </>
};
