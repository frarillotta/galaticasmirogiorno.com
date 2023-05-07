import Image from 'next/image'
import styles from './ProjectPageDescription.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Line } from '~/Components/SvgIcons';


//workaround for blurriness
function template({ scaleY }: {scaleY: number}) {
  return `scaleY(${scaleY})`
}

export const ProjectPageDescription: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {
  return <AnimatePresence>
    <div className={`${styles.description} ${className}`}>
      <div className={styles.paragraphWrapper}>
        <motion.div
          className={styles.verticalLineWrapper}
          transformTemplate={template}
          initial={{ scaleY: 0, transformOrigin: '50% 0% 0px' }}
          animate={{ scaleY: 1, transformOrigin: '50% 0% 0px' }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
        >
          <Line className={styles.verticalLine} />
        </motion.div>
        <p className={styles.descriptionParagraph}>
          {children}
        </p>
      </div>
    </div>
  </AnimatePresence>
}
