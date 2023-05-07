import styles from './ProjectWrapper.module.css'

export const ProjectWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return <main className={`${styles.main} ${className}`}>{children}</main>
}
