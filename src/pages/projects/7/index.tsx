import styles from './Project7.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

export default function PAFF32() {
    return (
      <ProjectWrapper>
        <ProjectScreen>
          <ProjectPageDescription className={styles.descriptionOverride}>
            <span>PA FF32</span><br />
            <span>PALERMO, ITALY</span><br />
            <span>2022-2023</span><br />
            <br />
            <span>+ RENATO GALATI CASMIRO</span><br />
            <br />
            <span>AN ARCHED CIRCLE CONNECTS THE LIVING AREA TO THE SLEEPING AREA.</span><br />
          </ProjectPageDescription>
          <ProjectImage loading='eager' priority={true} className={styles.livingroom} pictureName={'livingroom'} height={864} width={1536} projNumber={7} />
          <ProjectImage loading='eager' priority={true} className={styles.layout} pictureName={'layout'} height={300} width={1000} projNumber={7} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.livingroom2} pictureName={'livingroom2'} height={864} width={1536} projNumber={7} />
          <ProjectImage loading='eager' className={styles.livingroom3} pictureName={'livingroom3'} height={864} width={1536} projNumber={7} />
          <ProjectImage loading='eager' className={styles.livingroom4} pictureName={'livingroom4'} height={864} width={1536} projNumber={7} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.kitchen} pictureName={'kitchen'} height={864} width={1536} projNumber={7} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.layout2} pictureName={'layout2'} height={1192} width={1686} projNumber={7} />
          <ProjectImage loading='eager' className={styles.layout3} pictureName={'layout3fixed'} height={1192} width={1686} projNumber={7} />
        </ProjectScreen>
      </ProjectWrapper>
    )
  }
  