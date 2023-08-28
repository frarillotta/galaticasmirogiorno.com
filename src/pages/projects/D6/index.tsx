import styles from './Project4.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

import layout from 'public/projects/4/pictures/layout.jpg'
import internoold from 'public/projects/4/pictures/internoold.jpg'
import interno1 from 'public/projects/4/pictures/interno1.jpg'
import layoutGreen from 'public/projects/4/pictures/layoutGreen.jpg'
import layout3 from 'public/projects/4/pictures/layout3.jpg'
import interno2 from 'public/projects/4/pictures/interno2.jpg'

export default function D6() {
    return (
      <ProjectWrapper>
        <ProjectScreen>
          <ProjectPageDescription>
            <span>D6</span><br />
            <span>ACI CATENA, ITALY</span><br />
            <span>2021</span><br />
            <br />
            <span>+ DOMENICO MARASCO, ANGELO SANTANGELO</span><br />
            <br />
            <span>A HAIR SALON WITH STAIRS GOING NOWHERE.</span><br />
          </ProjectPageDescription>
          <ProjectImage image={layout} loading='eager' priority={true} className={styles.layout} pictureName={'layout'} height={800} width={500} projNumber={4} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={internoold} loading='eager' className={styles.internoold} pictureName={'internoold'} height={325} width={487} projNumber={4} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={interno1} loading='eager' className={styles.interno1} pictureName={'interno1'} height={325} width={487} projNumber={4} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={layoutGreen} loading='eager' className={styles.layout2} pictureName={'layoutGreen'} height={800} width={550} projNumber={4} />
          <ProjectImage image={layout3} loading='eager' className={styles.layout3} pictureName={'layout3'} height={800} width={550} projNumber={4} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={interno2} loading='eager' className={styles.interno2} pictureName={'interno2'} height={325} width={487} projNumber={4} />
        </ProjectScreen>
      </ProjectWrapper>
    )
  }
  