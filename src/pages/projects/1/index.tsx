'use client'
import Image from 'next/image'
import styles from './Project1.module.css';
import { AnimatePresence, Variants, motion } from 'framer-motion';

type ProjectImageProps = {
  pictureName: string;
  projNumber: number;
  width: number;
  height: number;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  className?: string;
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
      duration: 0.5,
      delay: 0.2
    }
  }
}

const ProjectImage: React.FC<ProjectImageProps> = ({ pictureName, projNumber, width, height, loading, priority = false, className = '' }) => {
  return <div
    className={`${styles.pictureWrapper} ${className}`}
  >
    <MotionImage
      variants={imageVariants}
      initial={'initial'}
      whileHover={'whileHover'}
      whileInView={'reveal'}
      viewport={{ once: false }}

      loading={loading}
      priority={priority}
      className={styles.projectPicture}
      alt={`project ${projNumber} ${pictureName} Picture`}
      src={`/projects/${projNumber}/pictures/${pictureName}`}
      width={width}
      height={height}
    />
  </div>
};

export default function Project1() {
  return (
    <main className={styles.main}>
      <article className={styles.screen}>
        <AnimatePresence>
          <div className={styles.description}>
            <motion.div
              className={styles.verticalLine}
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 4 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
            >
              <Image width={4} height={48} alt='vertical line' src="/icons/line.svg" />
            </motion.div>
            <p className={styles.descriptionParagraph}>
              <span>GL130</span><br />
              <span>CATANIA, ITALY</span><br />
              <span>2021</span><br />
              <br />
              <span> + DOMENICO MARASCO, ANGELO SANTANGELO</span><br />
              <br />
              <span>A HAIR SALON WITH FAKE BROKEN MIRRORS.</span><br />
            </p>
          </div>
          <ProjectImage loading='eager' priority={true} className={styles.oldFront} pictureName={'front-old.jpg'} height={589} width={395} projNumber={1}></ProjectImage>
        </AnimatePresence>
      </article>
      <article className={styles.screen}>
        <ProjectImage loading='eager' className={styles.front} pictureName={'front.jpg'} height={286} width={421} projNumber={1} />
      </article>
      <article className={styles.screen}>
        <ProjectImage loading='eager' className={styles.layout} pictureName={'layout.png'} height={435} width={415} projNumber={1} />
      </article>
      <article className={styles.screen}>
        <ProjectImage loading='eager' className={styles.interior} pictureName={'interior.jpg'} height={590} width={392} projNumber={1} />
        <ProjectImage loading='eager' className={styles.mirrors} pictureName={'mirrors.png'} height={112} width={417} projNumber={1} />
      </article>
      <article className={styles.screen}>
        <ProjectImage loading='eager' className={styles.handle} pictureName={'handle.jpg'} height={304} width={451} projNumber={1} />
        <ProjectImage loading='eager' className={styles.blueprint} pictureName={'blueprint.png'} height={435} width={418} projNumber={1} />
      </article>
    </main>
  )
}
