import Image from 'next/image'
import styles from './ProjectImage.module.css';
import { AnimatePresence, Variants, motion, useAnimate, useInView } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

type ProjectImageProps = {
    pictureName: string;
    projNumber: number;
    width: number;
    height: number;
    priority?: boolean;
    loading?: 'eager' | 'lazy';
    className?: string;
    format?: 'jpg' | 'png' | 'avif'
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
    },
    reveal: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
            ease: 'easeOut',
            duration: 1.5,
            delay: 0.5
        }
    }
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ pictureName, projNumber, width, height, loading, format = 'avif', priority = false, className = '' }) => {

    const [imageScope, animateImage] = useAnimate();
    const [wrapperScope, animateShadow] = useAnimate();

    const isImageInView = useInView(imageScope);
    const [rendered, setRendered] = useState(false);

    const animateIn = useCallback(() => {
        console.log(isImageInView, imageScope.current?.complete, rendered)
        if (isImageInView && imageScope.current?.complete && !rendered) {
            animateImage(imageScope.current, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }, {
                ease: 'easeOut',
                duration: 1.5,
                delay: 0.5
            });

            animateShadow(wrapperScope.current, {
                filter: 'drop-shadow(0px 2px 0px rgba(54, 54, 54, 0))'
            }, {
                ease: 'easeOut',
                duration: 1.5,
                delay: 0.5
            })
            setRendered(true)
        }
    }, [isImageInView, imageScope, rendered, animateImage, animateShadow, wrapperScope]);

    const onLoadComplete = useCallback(() => {
        animateIn();
    }, [animateIn]);

    useEffect(() => {
        animateIn();
    }, [animateIn]);
    
    return <motion.div
        ref={wrapperScope}
        className={`${styles.pictureContainer} ${className}`}
    >
        <AnimatePresence>
            <div className={styles.pictureWrapper}>
                <MotionImage
                    ref={imageScope}
                    variants={imageVariants}
                    initial={'initial'}
                    // whileHover={'whileHover'}
                    // whileInView={'reveal'}
                    viewport={{ once: true }}
                    loading={loading}
                    priority={priority}
                    onLoadingComplete={onLoadComplete}
                    className={`${styles.projectPicture} ${styles.withBackground}`}
                    alt={`project ${projNumber} ${pictureName} Picture`}
                    src={`/projects/${projNumber}/pictures/${pictureName}.${format}`}
                    width={width}
                    height={height}
                />
            </div>
        </AnimatePresence>
    </motion.div>
};
