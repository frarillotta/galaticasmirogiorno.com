import styles from './ProjectScreen.module.css'

export const ProjectScreen: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return <article className={` ${styles.screen} ${className}`}>{children}</article>
}
