import styles from './Project2.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

import pavillion from 'public/projects/2/pictures/pavillion.jpg'
import otherside from 'public/projects/2/pictures/otherside.jpg'
import layout1 from 'public/projects/2/pictures/layout1.jpg'
import interior from 'public/projects/2/pictures/interior.jpg'
import side from 'public/projects/2/pictures/side.jpg'
import layout2 from 'public/projects/2/pictures/layout2.jpg'
import outside from 'public/projects/2/pictures/outside.jpg'
import front from 'public/projects/2/pictures/front.jpg'

export default function LeTrain() {
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
          <ProjectImage image={pavillion} loading='eager' priority={true} className={styles.pavillion} pictureName={'pavillion'} height={350} width={500} projNumber={2} />
          <ProjectImage image={otherside} loading='eager' priority={true} className={styles.otherside} pictureName={'otherside'} height={350} width={500} projNumber={2} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={layout1} loading='eager' className={styles.layout1} pictureName={'layout1'} height={700} width={400} projNumber={2} />
          <ProjectImage image={interior} loading='eager' className={styles.interior} pictureName={'interior'} height={500} width={350} projNumber={2} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={side} loading='eager' className={styles.side} pictureName={'side'} height={500} width={500} projNumber={2} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={layout2} loading='eager' className={styles.layout2} pictureName={'layout2'} height={380} width={380} projNumber={2} />
          <ProjectImage image={outside} loading='eager' className={styles.outside} pictureName={'outside'} height={380} width={580} projNumber={2} />
        </ProjectScreen>
        <ProjectScreen>
          <ProjectImage image={front} loading='eager' className={styles.front} pictureName={'front'} height={450} width={650} projNumber={2} />
        </ProjectScreen>
      </ProjectWrapper>
    )
  }
  