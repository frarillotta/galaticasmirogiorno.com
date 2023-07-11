import styles from './Project4.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

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
          <ProjectImage loading='eager' priority={true} className={styles.layout} pictureName={'layout'} height={800} width={500} projNumber={4} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.internoold} pictureName={'internoold'} height={325} width={487} projNumber={4} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.interno1} pictureName={'interno1'} height={325} width={487} projNumber={4} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.layout2} pictureName={'layout2'} height={800} width={550} projNumber={4} />
          <ProjectImage loading='eager' className={styles.layout3} pictureName={'layout3'} height={800} width={550} projNumber={4} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.interno2} pictureName={'interno2'} height={325} width={487} projNumber={4} />
        </ProjectScreen>
      </ProjectWrapper>
    )
  }
  