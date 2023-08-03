import Image from 'next/image'
import styles from './ProjectImage.module.css';
import { AnimatePresence, Variants, motion } from 'framer-motion';

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
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
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
    return <div
        className={`${styles.pictureWrapper} ${className}`}
    >
        <AnimatePresence>
            <MotionImage
                variants={imageVariants}
                initial={'initial'}
                whileHover={'whileHover'}
                whileInView={'reveal'}
                viewport={{ once: true }}
                loading={loading}
                priority={priority}
                className={styles.projectPicture}
                alt={`project ${projNumber} ${pictureName} Picture`}
                src={`/projects/${projNumber}/pictures/${pictureName}.${format}`}
                width={width}
                height={height}
            />
            <motion.div animate={{
                top: '100%',
                opacity: 0, 
                transition: {
                    ease: 'easeOut',
                    duration: 1,
                    delay: 0.1,
                    opacity: {
                        ease: 'easeOut',
                        duration: 0.45,
                        delay: 0.1,
                    }
                }
            }} className={styles.blackBar} />
        </AnimatePresence>
    </div>
};
