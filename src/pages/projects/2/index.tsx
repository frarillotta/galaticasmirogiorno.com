import styles from './Project2.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

export default function Project2() {
    return (
      <ProjectWrapper>
        <ProjectScreen>
          <ProjectPageDescription>
            <span>LE TRAIN &quot;LA GALLINA MATTA&quot;</span><br />
            <br />
            <span>MAISON & OBJET</span><br />
            <span>PARIS, FRANCE</span><br />
            <br />
            <span>2022</span><br />
            <br />
            <span>A PAVILLION LOOKING LIKE A TRAIN.</span><br />
          </ProjectPageDescription>
          <ProjectImage loading='eager' priority={true} className={styles.pavillion} pictureName={'pavillion'} height={350} width={250} projNumber={2} />
          <ProjectImage loading='eager' priority={true} className={styles.otherside} pictureName={'otherside'} height={450} width={300} projNumber={2} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.layout1} pictureName={'layout1'} height={600} width={300} projNumber={2} />
          <ProjectImage loading='eager' className={styles.interior} pictureName={'interior'} height={450} width={300} projNumber={2} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.side} pictureName={'side'} height={300} width={300} projNumber={2} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.layout2} pictureName={'layout2'} height={300} width={300} projNumber={2} />
          <ProjectImage loading='eager' className={styles.outside} pictureName={'outside'} height={450} width={300} projNumber={2} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.front} pictureName={'front'} height={450} width={300} projNumber={2} />
        </ProjectScreen>
      </ProjectWrapper>
    )
  }
  