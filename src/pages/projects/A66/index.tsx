import styles from './Project9.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

import R1 from 'public/projects/9/pictures/R1.jpeg'
import R2Aperto from 'public/projects/9/pictures/R2Aperto.jpeg'
import R2Chiuso from 'public/projects/9/pictures/R2Chiuso.jpeg'

export default function CB() {
    return (
      <ProjectWrapper>
        <ProjectScreen>
          <ProjectPageDescription>
            <span>A66</span><br />
            <span>CATANIA, ITALY</span><br />
            <span>2023</span><br />
            <br />
            <span>AN OFFICE WITH RED FLOORING AND BLUE LIGHTING.</span><br />
        </ProjectPageDescription>
          <ProjectImage quality={100} image={R1} loading='eager' priority={true} className={styles.R1} pictureName={'R1'} height={1000} width={1500} projNumber={9} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage quality={100} image={R2Aperto} loading='eager' className={styles.R2Aperto} pictureName={'R2Aperto'} height={1000} width={1500} projNumber={9} />
          <ProjectImage quality={100} image={R2Chiuso} loading='eager' className={styles.R2Chiuso} pictureName={'R2Chiuso'} height={1000} width={1500} projNumber={9} />
        </ProjectScreen>
      </ProjectWrapper>
    )
  }
  