import styles from './Project6.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

import trepunti from 'public/projects/6/pictures/trepunti.jpg'
import saloneinside1 from 'public/projects/6/pictures/salone/inside1.jpg'
import saloneinside2 from 'public/projects/6/pictures/salone/inside2.jpg'
import saloneinside3 from 'public/projects/6/pictures/salone/inside3.jpg'
import saloneinside4 from 'public/projects/6/pictures/salone/inside4.jpg'
import saloneinside5 from 'public/projects/6/pictures/salone/inside5.jpg'
import saloneoutside1 from 'public/projects/6/pictures/salone/outside1.jpg'
import saloneoutside2 from 'public/projects/6/pictures/salone/outside2.jpg'
import saloneoutside3 from 'public/projects/6/pictures/salone/outside3.jpg'
import saloneoutside4 from 'public/projects/6/pictures/salone/outside4.jpg'
import saloneoutside5 from 'public/projects/6/pictures/salone/outside5.jpg'
import saloneoutside6 from 'public/projects/6/pictures/salone/outside6.jpg'
import saloneoutside7 from 'public/projects/6/pictures/salone/outside7.jpg'
import saloneoutside8 from 'public/projects/6/pictures/salone/outside8.jpg'
import salonewall from 'public/projects/6/pictures/salone/wall.jpg'
import piscinawall from 'public/projects/6/pictures/piscina/wall.jpg'
import piscinainside1 from 'public/projects/6/pictures/piscina/inside1.jpg'
import piscinainside2 from 'public/projects/6/pictures/piscina/inside2.jpg'
import piscinainside3 from 'public/projects/6/pictures/piscina/inside3.jpg'
import piscinainside4 from 'public/projects/6/pictures/piscina/inside4.jpg'
import piscinainside5 from 'public/projects/6/pictures/piscina/inside5.jpg'
import piscinainside6 from 'public/projects/6/pictures/piscina/inside6.jpg'
import piscinainside7 from 'public/projects/6/pictures/piscina/inside7.jpg'
import piscinainside8 from 'public/projects/6/pictures/piscina/inside8.jpg'
import piscinainside9 from 'public/projects/6/pictures/piscina/inside9.jpg'
import piscinainside10 from 'public/projects/6/pictures/piscina/inside10.jpg'
import piscinaoutside1 from 'public/projects/6/pictures/piscina/outside1.jpg'
import piscinaoutside2 from 'public/projects/6/pictures/piscina/outside2.jpg'
import mercatoterme from 'public/projects/6/pictures/mercatoterme.jpg'
import mercato from 'public/projects/6/pictures/mercato.jpg'
import pic2 from 'public/projects/6/pictures/pic2.jpg'
import pic3 from 'public/projects/6/pictures/pic3.jpg'
import pic6 from 'public/projects/6/pictures/pic6.jpg'
import termesezione from 'public/projects/6/pictures/termesezione.jpg'
import pic1 from 'public/projects/6/pictures/pic1.jpg'
import pic5 from 'public/projects/6/pictures/pic5.jpg'
import pic33 from 'public/projects/6/pictures/pic33.jpg'
import pic22 from 'public/projects/6/pictures/pic22.jpg'

//override grid because i need mooooore space in this one
export default function Incompiute() {
  return (
    <ProjectWrapper>
      <ProjectScreen>
        <ProjectPageDescription className={styles.descriptionOverride}>
          <span>INCOMPIUTE</span><br />
          <span>&quot;UNFINISHED&quot;</span><br />
          <span>2020</span><br />
          <br />
          <span>A PROJECT ABOUT TWO UNFINISHED BUILDINGS IN GIARRE, SICILY</span><br />
        </ProjectPageDescription>
        <ProjectImage image={trepunti} priority={true} className={styles.trepunti} pictureName={'trepunti'} height={2500} width={2500} projNumber={6} />
      </ProjectScreen>
      {/* yea i know this sucks */}
      <ProjectScreen className={styles.smallerGridOverride}>
        <ProjectImage image={saloneinside1} loading='lazy'className={styles.saloneInside1} pictureName={'salone/inside1'} height={480} width={220} projNumber={6} />
        <ProjectImage image={saloneinside2} loading='lazy'className={styles.saloneInside2} pictureName={'salone/inside2'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneinside3} loading='lazy'className={styles.saloneInside3} pictureName={'salone/inside3'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneinside4} loading='lazy'className={styles.saloneInside4} pictureName={'salone/inside4'} height={480} width={220} projNumber={6} />
        <ProjectImage image={saloneinside5} loading='lazy'className={styles.saloneInside5} pictureName={'salone/inside5'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneoutside1} loading='lazy'className={styles.saloneOutside1} pictureName={'salone/outside1'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneoutside2} loading='lazy'className={styles.saloneOutside2} pictureName={'salone/outside2'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneoutside3} loading='lazy'className={styles.saloneOutside3} pictureName={'salone/outside3'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneoutside4} loading='lazy'className={styles.saloneOutside4} pictureName={'salone/outside4'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneoutside5} loading='lazy'className={styles.saloneOutside5} pictureName={'salone/outside5'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneoutside6} loading='lazy'className={styles.saloneOutside6} pictureName={'salone/outside6'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneoutside7} loading='lazy'className={styles.saloneOutside7} pictureName={'salone/outside7'} height={140} width={240} projNumber={6} />
        <ProjectImage image={saloneoutside8} loading='lazy'className={styles.saloneOutside8} pictureName={'salone/outside8'} height={140} width={240} projNumber={6} />
        <ProjectImage image={salonewall} loading='lazy'className={styles.saloneWall} pictureName={'salone/wall'} height={140} width={240} projNumber={6} />
      </ProjectScreen>
      {/* and THIS sucks */}
      <ProjectScreen className={styles.smallerGridOverride}>
        <ProjectImage image={piscinainside1} loading='lazy'className={styles.piscinaInside1} pictureName={'piscina/inside1'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinainside2} loading='lazy'className={styles.piscinaInside2} pictureName={'piscina/inside2'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinainside3} loading='lazy'className={styles.piscinaInside3} pictureName={'piscina/inside3'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinainside4} loading='lazy'className={styles.piscinaInside4} pictureName={'piscina/inside4'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinainside5} loading='lazy'className={styles.piscinaInside5} pictureName={'piscina/inside5'} height={480} width={220} projNumber={6} />
        <ProjectImage image={piscinainside6} loading='lazy'className={styles.piscinaInside6} pictureName={'piscina/inside6'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinainside7} loading='lazy'className={styles.piscinaInside7} pictureName={'piscina/inside7'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinainside8} loading='lazy'className={styles.piscinaInside8} pictureName={'piscina/inside8'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinainside9} loading='lazy'className={styles.piscinaInside9} pictureName={'piscina/inside9'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinainside10} loading='lazy'className={styles.piscinaInside10} pictureName={'piscina/inside10'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinaoutside1} loading='lazy'className={styles.piscinaOutside1} pictureName={'piscina/outside1'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinaoutside2} loading='lazy'className={styles.piscinaOutside2} pictureName={'piscina/outside2'} height={140} width={240} projNumber={6} />
        <ProjectImage image={piscinawall} loading='lazy'className={styles.piscinaWall} pictureName={'piscina/wall'} height={140} width={240} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={mercatoterme} loading='lazy' className={styles.mercatoterme} pictureName={'mercatoterme'} height={1500} width={3000} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={mercato} loading='lazy' className={styles.mercato} pictureName={'mercato'} height={1500} width={1500} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={pic2} loading='lazy' className={styles.pic2} pictureName={'pic2'} height={750} width={1500} projNumber={6} />
        <ProjectImage image={pic3} loading='lazy' className={styles.pic3} pictureName={'pic3'} height={750} width={1500} projNumber={6} />
        <ProjectImage image={pic6} loading='lazy' className={styles.pic6} pictureName={'pic6'} height={750} width={1500} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={termesezione} loading='lazy' className={styles.termesezione} pictureName={'termesezione'} height={1500} width={1500} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={pic1} loading='lazy' className={styles.pic1} pictureName={'pic1'} height={750} width={1500} projNumber={6} />
        <ProjectImage image={pic5} loading='lazy' className={styles.pic5} pictureName={'pic5'} height={750} width={1500} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={pic33} loading='lazy' className={styles.pic33} pictureName={'pic33'} height={750} width={1500} projNumber={6} />
        <ProjectImage image={pic22} loading='lazy' className={styles.pic22} pictureName={'pic22'} height={750} width={1500} projNumber={6} />
      </ProjectScreen>
    </ProjectWrapper>
  )
}
