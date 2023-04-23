import Image from 'next/image'
import styles from '~/styles/Home.module.css'
import Link from 'next/link';
import { Routes } from '~/constants';

type ProjectLinkProps = {
  projNumber: number;
  width: number;
  height: number;
  className?: string;
}

//TODO: add label to each of these
const ProjectLink: React.FC<ProjectLinkProps> = ({ projNumber, width, height, className = '' }) => {
  return <Link href={`${Routes.Projects}/${projNumber}`} className={`${styles.iconWrapper} ${styles[`icon${projNumber}`]}`}>
    <Image className={`${styles.projectIcon} ${className}`} alt={`project ${projNumber} icon`} src={`/projects/${projNumber}/icon.png`} width={width} height={height} />
  </Link>
};

const projects = [
  {
    width: 65,
    height: 117
  },
  {
    width: 257,
    height: 86
  }, {
    width: 77,
    height: 217
  }, {
    width: 106,
    height: 233
  }, {
    width: 257,
    height: 157
  }, {
    width: 256,
    height: 158
  }, {
    width: 256,
    height: 299
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      {projects.map(({ width, height }, index) =>
        <ProjectLink width={width} height={height} projNumber={index + 1} key={`projectNumber${index + 1}`} />
      )}
    </main>
  )
}
