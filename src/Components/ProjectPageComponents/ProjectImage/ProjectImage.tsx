import Image from 'next/image'
import styles from './ProjectImage.module.css';
import { AnimatePresence, Variants, motion, useAnimate, useInView } from 'framer-motion';
import { useCallback } from 'react';

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
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 1%, 0% 1%)',
        transition: { duration: .4 }
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
            duration: 1,
            delay: 0.1
        }
    }
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ pictureName, projNumber, width, height, loading, format = 'avif', priority = false, className = '' }) => {

    const [imageScope, animateImage] = useAnimate();
    const isImageInView = useInView(imageScope);
    const onLoadComplete = useCallback(() => {
        if (isImageInView) {
            animateImage(imageScope.current, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }, {
                ease: 'easeOut',
                duration: 2,
                delay: 0.1
            });
        }
    }, [isImageInView, animateImage, imageScope]);

    return <div
        className={`${styles.pictureContainer} ${className}`}
    >
        <AnimatePresence>
            <div className={styles.pictureWrapper}>
                <MotionImage
                    ref={imageScope}
                    variants={imageVariants}
                    initial={'initial'}
                    whileHover={'whileHover'}
                    whileInView={'reveal'}
                    viewport={{ once: true }}
                    loading={loading}
                    priority={priority}
                    onLoadingComplete={onLoadComplete}
                    className={styles.projectPicture}
                    alt={`project ${projNumber} ${pictureName} Picture`}
                    src={`/projects/${projNumber}/pictures/${pictureName}.${format}`}
                    width={width}
                    height={height}
                />
            </div>
        </AnimatePresence>
    </div>
};
