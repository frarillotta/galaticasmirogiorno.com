import Image from 'next/image'
import styles from '~/styles/Projects.module.css'
import { Routes } from '~/constants';
import * as Icons from '~/Components/SvgIcons';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from '~/Components/Link/Link';
import { ProjectWrapper } from '~/Components/ProjectPageComponents';
import { mouseOutInEventListener } from '~/Components/Cursor/Cursor';

type ProjectLinkProps = {
  projNumber: number;
  projectName: string;
  projectDate?: string;
  projectCode: string;
  width: number;
  height: number;
  setActiveElement: (el: number) => void
  activeElement?: number;
  className?: string;
}

const getProjectLinkId = (projNumber: number) => `project${projNumber}Link`
//TODO: add label to each of these
const ProjectLink: React.FC<ProjectLinkProps> = ({ projectName, projectDate, projNumber, projectCode, setActiveElement, className = '' }) => {
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting === true) {
      setActiveElement?.(projNumber)
    }
  }, [projNumber, setActiveElement]);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    observer.observe(wrapperRef.current)
    return () => {
      if (wrapperRef.current) observer.unobserve(wrapperRef.current)
    }
  })
  //@ts-ignore horrible ik
  const Icon = Icons[`Icon${projNumber}`]
  return <div className={styles.iconWrapper} ref={wrapperRef} id={getProjectLinkId(projNumber)} >
    <Link ariaLabel={`project ${projectName} page`} href={`${Routes.Projects}/${projectCode}`} className={styles.iconWrapper}>
      <Icon className={`${styles.projectIcon} ${className}`} />
      {/* <div ref={scope} className={styles.label}>
      <span>{projectName}</span>
      {projectDate && (<><br /><span>{projectDate}</span></>)}
    </div> */}
    </Link>
  </div>
};

type ScrollIndicatorIconProps = {
  projNumber: number;
  isActive: boolean;
}
const ScrollIndicatorIcon: React.FC<ScrollIndicatorIconProps> = ({ projNumber, isActive }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const onClick = useCallback(() => {
    window?.document.querySelector(`#${getProjectLinkId(projNumber)}`)?.scrollIntoView({ behavior: 'smooth' })
  }, [projNumber])
  //@ts-ignore
  const Icon = Icons[`Icon${projNumber}`]

  useEffect(() => {

    const el = ref.current;
    const eventsCleanup = mouseOutInEventListener(el);

    return eventsCleanup;

  }, [])

  return <span ref={ref} onClick={onClick} className={styles.scrollIndicatorWrapper}>
    <Icon strokeWidth={'1px'} shouldAnimate={false} />
    {isActive ? <motion.div className={styles.scrollIndicatorIconBackground} layoutId="underline"></motion.div> : null}
  </span>
}

const ScrollIndicator = ({ activeElement, projects }: { activeElement: number, projects: typeof projectsMap }) => {
  return <div className={styles.scrollIndicator}>
    {projects.map((proj) =>
      <ScrollIndicatorIcon key={`${proj.projectCode}scrollIndicatorIcon`} projNumber={proj.iconNumber} isActive={activeElement === proj.iconNumber} />
    )}
  </div>
}

export default function Projects({ projects }: { projects: typeof projectsMap }) {
  const [activeElement, setActiveElement] = useState<number>(projects[0].iconNumber);
  return (
    <>
      <ScrollIndicator projects={projects} activeElement={activeElement} />
      <ProjectWrapper>
        {projects.map(({ width, height, projectName, projectDate, projectCode, iconNumber }) =>
          <div className={styles.homeScreen} key={`projectName-${projectName}`} data-testid={projectName + 'project'}>
            <ProjectLink setActiveElement={setActiveElement} projectCode={projectCode} width={width} height={height} projectDate={projectDate} projectName={projectName} projNumber={iconNumber} />
          </div>
        )}
      </ProjectWrapper>
    </>
  )
}

function shuffle(array: any[]) {
  const shuffledArray = [...array]
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray
}

const projectsMap = [
  {
    width: 65,
    height: 117,
    projectCode: "GL130",
    projectName: 'Massimiliano Parrucchieri',
    projectDate: '2021',
    iconNumber: 1,
  },
  {
    width: 257,
    height: 86,
    projectCode: "LETRAIN",
    projectName: 'Le Train - La Gallina Matta',
    iconNumber: 2,
  }, {
    width: 256,
    height: 299,
    projectCode: "PAFF2",
    projectName: 'PA FF2',
    iconNumber: 7
  }, {
    width: 77,
    height: 217,
    projectCode: "CB",
    projectName: 'CB',
    iconNumber: 3,
  }, {
    width: 257,
    height: 157,
    projectCode: "OUIQUI",
    projectName: 'OUI QUI',
    iconNumber: 5,
  }, {
    width: 106,
    height: 233,
    projectCode: "D6",
    projectName: 'D6',
    iconNumber: 4
  }, {
    width: 256,
    height: 158,
    projectCode: "INCOMPIUTE",
    projectName: 'INCOMPIUTE',
    iconNumber: 6
  }, {
    width: 256,
    height: 158,
    projectCode: "VVE460",
    projectName: 'VVE460',
    iconNumber: 8
  }
];

export async function getStaticProps() {
  return {
    props: {
      projects: shuffle(projectsMap),
    },
    revalidate: 1
  }
}
