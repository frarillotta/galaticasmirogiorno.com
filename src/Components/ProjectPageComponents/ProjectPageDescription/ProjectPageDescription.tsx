import Image from 'next/image'
import styles from './ProjectPageDescription.module.css';
import { AnimatePresence, motion } from 'framer-motion';

export const ProjectPageDescription: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {
  return <AnimatePresence>
    <div className={`${styles.description} ${className}`}>
      <motion.div
        className={styles.verticalLine}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 4 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
      >
        <Image width={4} height={48} alt='vertical line' src="/icons/line.svg" />
      </motion.div>
      <p className={styles.descriptionParagraph}>
        {children}
      </p>
    </div>
  </AnimatePresence>
}
