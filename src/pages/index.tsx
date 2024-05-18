import Image from 'next/image'
import styles from '~/styles/Projects.module.css'
import { Routes } from '~/constants';
import * as Icons from '~/Components/SvgIcons';
import { useAnimate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from '~/Components/Link/Link';

type ProjectLinkProps = {
  projNumber: number;
  projectName: string;
  projectDate?: string;
  projectCode: string;
  width: number;
  height: number;
  className?: string;
}

//TODO: add label to each of these
const ProjectLink: React.FC<ProjectLinkProps> = ({ projectName, projectDate, projNumber, projectCode, className = '' }) => {
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
  return <Link ariaLabel={`project ${projectName} page`} href={`${Routes.Projects}/${projectCode}`} className={`${styles.iconWrapper} ${styles[`icon${projNumber}`]}`}>
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
    projectCode: "GL130",
    projectName: 'Massimiliano Parrucchieri',
    projectDate: '2021'
  },
  {
    width: 257,
    height: 86,
    projectCode: "LETRAIN",
    projectName: 'Le Train - La Gallina Matta'
  }, {
    width: 77,
    height: 217,
    projectCode: "CB",
    projectName: 'CB'
  }, {
    width: 106,
    height: 233,
    projectCode: "D6",
    projectName: 'D6'
  }, {
    width: 257,
    height: 157,
    projectCode: "OUIQUI",
    projectName: 'OUI QUI'
  }, {
    width: 256,
    height: 158,
    projectCode: "INCOMPIUTE",
    projectName: 'INCOMPIUTE'
  }, {
    width: 256,
    height: 299,
    projectCode: "PAFF2",
    projectName: 'PA FF2'
  },
]

export default function Projects() {
  return (
    <main className={styles.main}>
      {projects.map(({ width, height, projectName, projectDate, projectCode }, index) =>
        <ProjectLink projectCode={projectCode} width={width} height={height} projectDate={projectDate} projectName={projectName} projNumber={index + 1} key={`projectNumber${index + 1}`} />
      )}
    </main>
  )
}
