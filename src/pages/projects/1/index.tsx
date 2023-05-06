'use client'
import Image from 'next/image'
import styles from './Project1.module.css';
import { AnimatePresence, motion } from 'framer-motion';

type ProjectImageProps = {
  pictureName: string;
  projNumber: number;
  width: number;
  height: number;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  className?: string;
}

//TODO: add label to each of these
const ProjectImage: React.FC<ProjectImageProps> = ({ pictureName, projNumber, width, height, loading, priority = false, className = '' }) => {
  return <div className={`${styles.pictureWrapper} ${className}`}>
    <Image 
      loading={loading} 
      placeholder='blur' 
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
          <ProjectImage loading='eager' priority={true} className={styles.oldFront} pictureName={'front-old.jpg'} height={1178} width={790} projNumber={1}></ProjectImage>
        </AnimatePresence>
      </article>
      <article className={styles.screen}>
        <ProjectImage loading='eager' className={styles.front} pictureName={'front.jpg'} height={573} width={843} projNumber={1} />
      </article>
      <article className={styles.screen}>
        <ProjectImage loading='eager' className={styles.layout} pictureName={'layout.png'} height={870} width={830} projNumber={1} />
      </article>
      <article className={styles.screen}>
        <ProjectImage loading='eager' className={styles.interior} pictureName={'interior.jpg'} height={1180} width={783} projNumber={1} />
        <ProjectImage loading='eager' className={styles.mirrors} pictureName={'mirrors.png'} height={223} width={835} projNumber={1} />
      </article>
      <article className={styles.screen}>
        <ProjectImage loading='eager' className={styles.handle} pictureName={'handle.jpg'} height={607} width={903} projNumber={1} />
        <ProjectImage loading='eager' className={styles.blueprint} pictureName={'blueprint.png'} height={870} width={835} projNumber={1} />
      </article>
    </main>
  )
}
