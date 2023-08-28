import styles from './Project3.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

import layout from 'public/projects/3/pictures/layoutnew.jpg'
import layout2 from 'public/projects/3/pictures/layout2.jpg'
import garden from 'public/projects/3/pictures/garden.jpg'
import pianta from 'public/projects/3/pictures/pianta.jpg'
import landscape from 'public/projects/3/pictures/landscape.jpg'
import bedroom from 'public/projects/3/pictures/bedroom.jpg'
import bedroom2 from 'public/projects/3/pictures/bedroom2.jpg'

export default function CB() {
    return (
      <ProjectWrapper>
        <ProjectScreen>
          <ProjectPageDescription>
            <span>CB</span><br />
            <span>AVOLA, ITALY</span><br />
            <span>2022</span><br />
            <br />
            <span>+ DOMENICO MARASCO, ANGELO SANTANGELO</span><br />
            <br />
            <span>A PRIVATE VILLA WITH A SWIMMING POOL WHERE ONE CAN WATCH THE SUN SET.</span><br />
          </ProjectPageDescription>
          <ProjectImage image={layout} loading='eager' priority={true} className={styles.layout} pictureName={'layout'} height={500} width={750} projNumber={3} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={layout2} loading='eager' className={styles.layout2} pictureName={'layout2'} height={750} width={500} projNumber={3} />
          <ProjectImage image={garden} loading='eager' className={styles.garden} pictureName={'garden'} height={500} width={500} projNumber={3} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={pianta} loading='eager' className={styles.pianta} pictureName={'pianta'} height={650} width={500} projNumber={3} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={landscape} loading='eager' className={styles.landscape} pictureName={'landscape'} height={333} width={500} projNumber={3} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={bedroom} loading='eager' className={styles.bedroom} pictureName={'bedroom'} height={540} width={810} projNumber={3} />
          <ProjectImage image={bedroom2} loading='eager' className={styles.bedroom2} pictureName={'bedroom2'} height={540} width={810} projNumber={3} />
        </ProjectScreen>
      </ProjectWrapper>
    )
  }
  