import styles from './Project5.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

export default function Project5() {
    return (
      <ProjectWrapper>
        <ProjectScreen>
          <ProjectPageDescription>
            <span>OUI, QUI MAGAZINE</span><br />
            <span>2018-2019</span><br />
            <br />
            <span>+ LORENZO ARLIA, MARIO IDONE, ARIANNA ISOLA</span><br />
            <br />
            <span>A MAGAZINE ABOUT ARCHITECTURE AND VISUAL ARTS, THAT WAS DISTRIBUTED FOR FREE AT THE MEDITERRANEA UNIVERSITY OF REGGIO CALABRIA DURING TWO CONSECUTIVE ACADEMIC YEARS, AND WAS AVAILABLE ONLINE IN ITALIAN, ENGLISH AND SPANISH.</span><br />
          </ProjectPageDescription>
          <ProjectImage loading='eager' priority={true} className={styles.precopertina} pictureName={'precopertina'} height={800} width={500} projNumber={5} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage loading='eager' className={styles.copertina2} pictureName={'copertina2'} height={800} width={500} projNumber={5} />
          <ProjectImage loading='eager' className={styles.copertina} pictureName={'copertina'} height={800} width={500} projNumber={5} />
          <ProjectImage loading='eager' className={styles.copertina3} pictureName={'copertina3'} height={800} width={500} projNumber={5} />
        </ProjectScreen>
        <ProjectScreen>
          Mancano le immagini
        </ProjectScreen>
        <ProjectScreen>
        <ProjectImage loading='eager' className={styles.exhibition} pictureName={'exhibition'} height={400} width={600} projNumber={5} />
        </ProjectScreen>
      </ProjectWrapper>
    )
  }
  