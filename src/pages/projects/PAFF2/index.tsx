import styles from './Project7.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

import armadio from 'public/projects/7/pictures/armadio.jpg'
import atrio from 'public/projects/7/pictures/atrio.jpg'
import bagno from 'public/projects/7/pictures/bagno.jpg'
import bagno2 from 'public/projects/7/pictures/bagno2.jpg'
import bagno3 from 'public/projects/7/pictures/bagno3.jpg'
import bagno4 from 'public/projects/7/pictures/bagno4.jpg'
import bagno5 from 'public/projects/7/pictures/bagno5.jpg'
import bagno6 from 'public/projects/7/pictures/bagno6.jpg'
import bagno7 from 'public/projects/7/pictures/bagno7.jpg'
import cucina from 'public/projects/7/pictures/cucina.jpg'
import cucina2 from 'public/projects/7/pictures/cucina2.jpg'
import cucina3 from 'public/projects/7/pictures/cucina3.jpg'
import lampada from 'public/projects/7/pictures/lampada.jpg'
import lampada2 from 'public/projects/7/pictures/lampada2.jpg'
import lampada3 from 'public/projects/7/pictures/lampada3.jpg'
import soggiorno from 'public/projects/7/pictures/soggiorno.jpg'
import soggiorno2 from 'public/projects/7/pictures/soggiorno2.jpg'
import vetrina from 'public/projects/7/pictures/vetrina.jpg'
import layout1 from 'public/projects/7/pictures/layout1.jpg'
import layout2 from 'public/projects/7/pictures/layout2.jpg'
import layout3 from 'public/projects/7/pictures/layout3.jpg'

export default function PAFF2() {
  return (
    <ProjectWrapper>
      <ProjectScreen>
        <ProjectPageDescription className={styles.descriptionOverride}>
          <span>PA FF2</span><br />
          <span>PALERMO, ITALY</span><br />
          <span>2022-2023</span><br />
          <br />
          <span>+ RENATO GALATI CASMIRO</span><br />
          <br />
          <span>AN ARCHED CIRCLE CONNECTS THE LIVING AREA TO THE SLEEPING AREA.</span><br />
        </ProjectPageDescription>
        <ProjectImage image={atrio} loading='eager' priority={true} className={styles.atrio} pictureName={'atrio'} height={1500} width={1000} projNumber={7} />
        <ProjectImage image={layout1} loading='eager' priority={true} className={styles.layout1} pictureName={'layout1'} height={1000} width={1500} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={cucina} loading='eager' className={styles.cucina} pictureName={'cucina'} height={1500} width={1000} projNumber={7} />
        <ProjectImage image={soggiorno} loading='eager' className={styles.soggiorno} pictureName={'soggiorno'} height={1000} width={1500} projNumber={7} />
        <ProjectImage image={soggiorno2} loading='eager' className={styles.soggiorno2} pictureName={'soggiorno1'} height={1000} width={1500} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={cucina2} loading='eager' className={styles.cucina2} pictureName={'cucina2'} height={1000} width={1500} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={vetrina} loading='eager' className={styles.vetrina} pictureName={'vetrina'} height={1500} width={1000} projNumber={7} />
        <ProjectImage image={cucina3} loading='eager' className={styles.cucina3} pictureName={'cucina3'} height={1000} width={1500} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={armadio} loading='eager' className={styles.armadio} pictureName={'armadio'} height={1000} width={1500} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={layout2} loading='eager' className={styles.layout2} pictureName={'layout2'} height={1000} width={1500} projNumber={7} />
        <ProjectImage image={layout3} loading='eager' className={styles.layout3} pictureName={'layout3'} height={1000} width={1500} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={bagno2} loading='eager' className={styles.bagno2} pictureName={'bagno2'} height={1500} width={1000} projNumber={7} />
        <ProjectImage image={bagno3} loading='eager' className={styles.bagno3} pictureName={'bagno3'} height={1000} width={1500} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={bagno4} loading='eager' className={styles.bagno4} pictureName={'bagno4'} height={1500} width={1000} projNumber={7} />
        <ProjectImage image={bagno5} loading='eager' className={styles.bagno5} pictureName={'bagno5'} height={1500} width={1000} projNumber={7} />
        <ProjectImage image={bagno6} loading='eager' className={styles.bagno6} pictureName={'bagno6'} height={1500} width={1000} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={bagno7} loading='eager' className={styles.bagno7} pictureName={'bagno7'} height={1500} width={1000} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={bagno} loading='eager' className={styles.bagno} pictureName={'bagno'} height={1500} width={1000} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={lampada} loading='eager' className={styles.lampada} pictureName={'lampada'} height={1500} width={1000} projNumber={7} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={lampada2} loading='eager' className={styles.lampada2} pictureName={'lampada2'} height={1500} width={1000} projNumber={7} />
        <ProjectImage image={lampada3} loading='eager' className={styles.lampada3} pictureName={'lampada3'} height={1500} width={1000} projNumber={7} />
      </ProjectScreen>
    </ProjectWrapper>
  )
}
