import styles from './Project6.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

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
        <ProjectImage loading='eager' priority={true} className={styles.trepunti} pictureName={'trepunti'} height={2500} width={2500} projNumber={6} />
      </ProjectScreen>
      {/* yea i know this sucks */}
      <ProjectScreen className={styles.smallerGridOverride}>
        <ProjectImage loading='eager'className={styles.saloneInside1} pictureName={'salone/inside1'} height={480} width={220} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneInside2} pictureName={'salone/inside2'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneInside3} pictureName={'salone/inside3'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneInside4} pictureName={'salone/inside4'} height={480} width={220} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneInside5} pictureName={'salone/inside5'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneOutside1} pictureName={'salone/outside1'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneOutside2} pictureName={'salone/outside2'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneOutside3} pictureName={'salone/outside3'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneOutside4} pictureName={'salone/outside4'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneOutside5} pictureName={'salone/outside5'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneOutside6} pictureName={'salone/outside6'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneOutside7} pictureName={'salone/outside7'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneOutside8} pictureName={'salone/outside8'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.saloneWall} pictureName={'salone/wall'} height={140} width={240} projNumber={6} />
      </ProjectScreen>
      {/* and THIS sucks */}
      <ProjectScreen className={styles.smallerGridOverride}>
        <ProjectImage loading='eager'className={styles.piscinaInside1} pictureName={'piscina/inside1'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaInside2} pictureName={'piscina/inside2'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaInside3} pictureName={'piscina/inside3'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaInside4} pictureName={'piscina/inside4'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaInside5} pictureName={'piscina/inside5'} height={480} width={220} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaInside6} pictureName={'piscina/inside6'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaInside7} pictureName={'piscina/inside7'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaInside8} pictureName={'piscina/inside8'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaInside9} pictureName={'piscina/inside9'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaInside10} pictureName={'piscina/inside10'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaOutside1} pictureName={'piscina/outside1'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaOutside2} pictureName={'piscina/outside2'} height={140} width={240} projNumber={6} />
        <ProjectImage loading='eager'className={styles.piscinaWall} pictureName={'piscina/wall'} height={140} width={240} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage loading='eager' className={styles.mercatoterme} pictureName={'mercatoterme'} height={1500} width={3000} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage loading='eager' className={styles.mercato} pictureName={'mercato'} height={1500} width={1500} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage loading='eager' className={styles.pic2} pictureName={'pic2'} height={750} width={1500} projNumber={6} />
        <ProjectImage loading='eager' className={styles.pic3} pictureName={'pic3'} height={750} width={1500} projNumber={6} />
        <ProjectImage loading='eager' className={styles.pic6} pictureName={'pic6'} height={750} width={1500} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage loading='eager' className={styles.termesezione} pictureName={'termesezione'} height={1500} width={1500} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage loading='eager' className={styles.pic1} pictureName={'pic1'} height={750} width={1500} projNumber={6} />
        <ProjectImage loading='eager' className={styles.pic5} pictureName={'pic5'} height={750} width={1500} projNumber={6} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage loading='eager' className={styles.pic33} pictureName={'pic33'} height={750} width={1500} projNumber={6} />
        <ProjectImage loading='eager' className={styles.pic22} pictureName={'pic22'} height={750} width={1500} projNumber={6} />
      </ProjectScreen>
    </ProjectWrapper>
  )
}
