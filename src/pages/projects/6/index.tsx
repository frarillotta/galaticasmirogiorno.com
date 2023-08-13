import styles from './Project6.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

import trepunti from 'public/projects/6/pictures/trepunti.avif'
import saloneinside1 from 'public/projects/6/pictures/salone/inside1.avif'
import saloneinside2 from 'public/projects/6/pictures/salone/inside2.avif'
import saloneinside3 from 'public/projects/6/pictures/salone/inside3.avif'
import saloneinside4 from 'public/projects/6/pictures/salone/inside4.avif'
import saloneinside5 from 'public/projects/6/pictures/salone/inside5.avif'
import saloneoutside1 from 'public/projects/6/pictures/salone/outside1.avif'
import saloneoutside2 from 'public/projects/6/pictures/salone/outside2.avif'
import saloneoutside3 from 'public/projects/6/pictures/salone/outside3.avif'
import saloneoutside4 from 'public/projects/6/pictures/salone/outside4.avif'
import saloneoutside5 from 'public/projects/6/pictures/salone/outside5.avif'
import saloneoutside6 from 'public/projects/6/pictures/salone/outside6.avif'
import saloneoutside7 from 'public/projects/6/pictures/salone/outside7.avif'
import saloneoutside8 from 'public/projects/6/pictures/salone/outside8.avif'
import salonewall from 'public/projects/6/pictures/salone/wall.avif'
import piscinawall from 'public/projects/6/pictures/piscina/wall.avif'
import piscinainside1 from 'public/projects/6/pictures/piscina/inside1.avif'
import piscinainside2 from 'public/projects/6/pictures/piscina/inside2.avif'
import piscinainside3 from 'public/projects/6/pictures/piscina/inside3.avif'
import piscinainside4 from 'public/projects/6/pictures/piscina/inside4.avif'
import piscinainside5 from 'public/projects/6/pictures/piscina/inside5.avif'
import piscinainside6 from 'public/projects/6/pictures/piscina/inside6.avif'
import piscinainside7 from 'public/projects/6/pictures/piscina/inside7.avif'
import piscinainside8 from 'public/projects/6/pictures/piscina/inside8.avif'
import piscinainside9 from 'public/projects/6/pictures/piscina/inside9.avif'
import piscinainside10 from 'public/projects/6/pictures/piscina/inside10.avif'
import piscinaoutside1 from 'public/projects/6/pictures/piscina/outside1.avif'
import piscinaoutside2 from 'public/projects/6/pictures/piscina/outside2.avif'
import mercatoterme from 'public/projects/6/pictures/mercatoterme.avif'
import mercato from 'public/projects/6/pictures/mercato.avif'
import pic2 from 'public/projects/6/pictures/pic2.avif'
import pic3 from 'public/projects/6/pictures/pic3.avif'
import pic6 from 'public/projects/6/pictures/pic6.avif'
import termesezione from 'public/projects/6/pictures/termesezione.avif'
import pic1 from 'public/projects/6/pictures/pic1.avif'
import pic5 from 'public/projects/6/pictures/pic5.avif'
import pic33 from 'public/projects/6/pictures/pic33.avif'
import pic22 from 'public/projects/6/pictures/pic22.avif'

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
