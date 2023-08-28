import styles from './Project5.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

import precopertina from 'public/projects/5/pictures/precopertina.jpg'
import copertina2 from 'public/projects/5/pictures/copertina2.jpg'
import copertina from 'public/projects/5/pictures/copertina.jpg'
import copertina3 from 'public/projects/5/pictures/copertina3.jpg'
import inside1 from 'public/projects/5/pictures/inside1.jpg'
import inside2 from 'public/projects/5/pictures/inside2.jpg'
import inside3 from 'public/projects/5/pictures/inside3.jpg'
import exhibition from 'public/projects/5/pictures/exhibition.jpg'

export default function OuiQuiMagazine() {
    return (
      <ProjectWrapper>
        <ProjectScreen>
          <ProjectPageDescription>
            <span>OUI, QUI MAGAZINE</span><br />
            <span>2018-2019</span><br />
            <br />
            <span>+ LORENZO ARLIA, MARIO IDONE, ARIANNA ISOLA</span><br />
            <br />
            <span>A MAGAZINE ABOUT ARCHITECTURE AND VISUAL ARTS.</span><br />
          </ProjectPageDescription>
          <ProjectImage image={precopertina} loading='eager' priority={true} className={styles.precopertina} pictureName={'precopertina'} height={800} width={500} projNumber={5} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={copertina2} loading='eager' className={styles.copertina2} pictureName={'copertina2'} height={800} width={500} projNumber={5} />
          <ProjectImage image={copertina} loading='eager' className={styles.copertina} pictureName={'copertina'} height={800} width={500} projNumber={5} />
          <ProjectImage image={copertina3} loading='eager' className={styles.copertina3} pictureName={'copertina3'} height={800} width={500} projNumber={5} />
        </ProjectScreen>
        <ProjectScreen>
        <ProjectImage image={inside1} loading='eager' className={styles.inside1} pictureName={'inside1'} height={704} width={406} projNumber={5} />          
        <ProjectImage image={inside2} loading='eager' className={styles.inside2} pictureName={'inside2'} height={704} width={406} projNumber={5} />          
        <ProjectImage image={inside3} loading='eager' className={styles.inside3} pictureName={'inside3'} height={704} width={406} projNumber={5} />
        </ProjectScreen>
        <ProjectScreen>
        <ProjectImage image={exhibition} loading='eager' className={styles.exhibition} pictureName={'exhibition'} height={400} width={600} projNumber={5} />
        </ProjectScreen>
      </ProjectWrapper>
    )
  }
  