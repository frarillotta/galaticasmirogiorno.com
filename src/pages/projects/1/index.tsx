import styles from './Project1.module.css';
import { ProjectImage, ProjectScreen, ProjectPageDescription, ProjectWrapper } from '~/Components/ProjectPageComponents';

export default function GL130() {
  return (
    <ProjectWrapper>
      <ProjectScreen>
        <ProjectPageDescription>
          <span>GL130</span><br />
          <span>CATANIA, ITALY</span><br />
          <span>2021</span><br />
          <br />
          <span> + DOMENICO MARASCO, ANGELO SANTANGELO</span><br />
          <br />
          <span>A HAIR SALON WITH FAKE BROKEN MIRRORS.</span><br />
        </ProjectPageDescription>
        <ProjectImage format={'jpg'} loading='eager' priority={true} className={styles.oldFront} pictureName={'front-old'} height={489} width={295} projNumber={1} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage format={'jpg'} loading='lazy' className={styles.front} pictureName={'front'} height={286} width={421} projNumber={1} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage format={'jpg'} loading='lazy' className={styles.layout} pictureName={'layout'} height={435} width={415} projNumber={1} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage format={'jpg'} loading='lazy' className={styles.interior} pictureName={'interior'} height={590} width={392} projNumber={1} />
        <ProjectImage format={'jpg'} loading='lazy' className={styles.mirrors} pictureName={'mirrors'} height={112} width={417} projNumber={1} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage format={'jpg'} loading='lazy' className={styles.handle} pictureName={'handle'} height={304} width={451} projNumber={1} />
        <ProjectImage format={'jpg'} loading='lazy' className={styles.blueprint} pictureName={'blueprint'} height={435} width={418} projNumber={1} />
      </ProjectScreen>
    </ProjectWrapper>
  )
}
