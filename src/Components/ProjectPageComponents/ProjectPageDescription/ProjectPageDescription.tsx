import styles from './ProjectPageDescription.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Line } from '~/Components/SvgIcons';


//workaround for blurriness
function template({ scaleY }: { scaleY: number }) {
  return `scaleY(${scaleY})`
}

export const ProjectPageDescription: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {
  return <AnimatePresence>
    <div className={`${className} ${styles.description}`}>
      <div className={styles.paragraphWrapper}>
        <Line className={styles.verticalLine} />
        <motion.div
          className={styles.lineMask}
          transformTemplate={template}
          initial={{ scaleY: 1, transformOrigin: '50% 100% 0px' }}
          animate={{ scaleY: 0, transformOrigin: '50% 100% 0px' }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }}
        />
        <p className={styles.descriptionParagraph}>
          {children}
        </p>
      </div>
    </div>
  </AnimatePresence>
}
