import styles from './Project1.module.css';
import { ProjectImage, ProjectScreen, ProjectPageDescription, ProjectWrapper } from '~/Components/ProjectPageComponents';

import frontOld from 'public/projects/1/pictures/front-old.jpg'
import front from 'public/projects/1/pictures/front.jpg'
import layout from 'public/projects/1/pictures/layout.jpg'
import interior from 'public/projects/1/pictures/interior.jpg'
import mirrors from 'public/projects/1/pictures/mirrors.jpg'
import handle from 'public/projects/1/pictures/handle.jpg'
import blueprint from 'public/projects/1/pictures/blueprint.jpg'

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
        <ProjectImage image={frontOld} loading='eager' priority={true} className={styles.oldFront} pictureName={'front-old'} height={489} width={295} projNumber={1} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={front} loading='eager' className={styles.front} pictureName={'front'} height={286} width={421} projNumber={1} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={layout} loading='eager' className={styles.layout} pictureName={'layout'} height={435} width={415} projNumber={1} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={interior} loading='eager' className={styles.interior} pictureName={'interior'} height={590} width={392} projNumber={1} />
        <ProjectImage image={mirrors} loading='eager' className={styles.mirrors} pictureName={'mirrors'} height={112} width={417} projNumber={1} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={handle} loading='eager' className={styles.handle} pictureName={'handle'} height={304} width={451} projNumber={1} />
        <ProjectImage image={blueprint} loading='eager' className={styles.blueprint} pictureName={'blueprint'} height={435} width={418} projNumber={1} />
      </ProjectScreen>
    </ProjectWrapper>
  )
}
