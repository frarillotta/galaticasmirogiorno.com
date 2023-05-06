import Image from 'next/image'
import styles from '~/styles/Projects.module.css'
import Link from 'next/link';
import { Routes } from '~/constants';
import * as Icons from '~/Components/SvgIcons';
import { useAnimate } from 'framer-motion';
import { useEffect, useRef } from 'react';

type ProjectLinkProps = {
  projNumber: number;
  projectName: string;
  projectDate?: string;
  width: number;
  height: number;
  className?: string;
}

//TODO: add label to each of these
const ProjectLink: React.FC<ProjectLinkProps> = ({ projectName, projectDate, projNumber, className = '' }) => {
  // const [scope, animate] = useAnimate()
  // const linkRef = useRef<HTMLAnchorElement>(null);
  // useEffect(() => {
  //   linkRef?.current?.addEventListener('mouseover', () => {
  //     animate(scope.current, {
  //       bottom: 0
  //     })
  //   });
  //   linkRef?.current?.addEventListener('mouseout', () => {
  //     animate(scope.current, {
  //       bottom: -80
  //     })
  //   });
  // })
  //@ts-ignore horrible ik
  const Icon = Icons[`Icon${projNumber}`]
  return <Link href={`${Routes.Projects}/${projNumber}`} className={`${styles.iconWrapper} ${styles[`icon${projNumber}`]}`}>
    <Icon className={`${styles.projectIcon} ${className}`} />
    {/* <div ref={scope} className={styles.label}>
      <span>{projectName}</span>
      {projectDate && (<><br /><span>{projectDate}</span></>)}
    </div> */}
  </Link>
};

const projects = [
  {
    width: 65,
    height: 117,
    projectName: 'Massimiliano Parrucchieri',
    projectDate: '2021'
  },
  {
    width: 257,
    height: 86,
    projectName: 'idk'
  }, {
    width: 77,
    height: 217,
    projectName: 'idk'
  }, {
    width: 106,
    height: 233,
    projectName: 'idk'
  }, {
    width: 257,
    height: 157,
    projectName: 'idk'
  }, {
    width: 256,
    height: 158,
    projectName: 'idk'
  }, {
    width: 256,
    height: 299,
    projectName: 'idk'
  },
]

export default function Projects() {
  return (
    <main className={styles.main}>
      {projects.map(({ width, height, projectName, projectDate }, index) =>
        <ProjectLink width={width} height={height} projectDate={projectDate} projectName={projectName} projNumber={index + 1} key={`projectNumber${index + 1}`} />
      )}
    </main>
  )
}
