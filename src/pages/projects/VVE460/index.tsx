import styles from './Project8.module.css';
import { ProjectImage, ProjectPageDescription, ProjectWrapper, ProjectScreen } from '~/Components/ProjectPageComponents'

import armadio from 'public/projects/8/pictures/armadio.jpg'
import bagno from 'public/projects/8/pictures/bagno.jpg'
import bagno2 from 'public/projects/8/pictures/bagno2.jpg'
import bagno3 from 'public/projects/8/pictures/bagno3.jpg'
import corridoio from 'public/projects/8/pictures/corridoio.jpg'
import corridoio2 from 'public/projects/8/pictures/corridoio2.jpg'
import cucina from 'public/projects/8/pictures/cucina.jpg'
import cucina2 from 'public/projects/8/pictures/cucina2.jpg'
import doccia from 'public/projects/8/pictures/doccia.jpg'
import lampada from 'public/projects/8/pictures/lampada.jpg'
import lampada2 from 'public/projects/8/pictures/lampada2.jpg'
import lampada3 from 'public/projects/8/pictures/lampada3.jpg'
import lampada4 from 'public/projects/8/pictures/lampada4.jpg'
import letto from 'public/projects/8/pictures/letto.jpg'
import letto2 from 'public/projects/8/pictures/letto2.jpg'
import letto3 from 'public/projects/8/pictures/letto3.jpg'
import letto4 from 'public/projects/8/pictures/letto4.jpg'
import letto5 from 'public/projects/8/pictures/letto5.jpg'
import letto6 from 'public/projects/8/pictures/letto6.jpg'
import letto7 from 'public/projects/8/pictures/letto7.jpg'
import letto8 from 'public/projects/8/pictures/letto8.jpg'
import letto9 from 'public/projects/8/pictures/letto9.jpg'
import letto10 from 'public/projects/8/pictures/letto10.jpg'
import mensole from 'public/projects/8/pictures/mensole.jpg'
import pianta from 'public/projects/8/pictures/pianta.jpg'
import rubinetto from 'public/projects/8/pictures/rubinetto.jpg'
import salotto from 'public/projects/8/pictures/salotto.jpg'
import salotto2 from 'public/projects/8/pictures/salotto2.jpg'
import salotto3 from 'public/projects/8/pictures/salotto3.jpg'
import sedia from 'public/projects/8/pictures/sedia.jpg'
import soffitto from 'public/projects/8/pictures/soffitto.jpg'
import soffitto2 from 'public/projects/8/pictures/soffitto2.jpg'
import soffitto3 from 'public/projects/8/pictures/soffitto3.jpg'
import soffitto4 from 'public/projects/8/pictures/soffitto4.jpg'
import soffitto5 from 'public/projects/8/pictures/soffitto5.jpg'

export default function PAFF2() {
  return (
    <ProjectWrapper>
      <ProjectScreen>
        <ProjectPageDescription className={styles.descriptionOverride}>
          <span>VVE460</span><br />
          <span>CATANIA, ITALY</span><br />
          <span>2024</span><br />
          <br />
          <span>+ DOMENICO MARASCO, ANGELO SANTANGELO</span><br />
          <br />
          <span>VVE460 IS A PROJECT THAT TRANSFORMS AN EARLY 20TH-CENTURY LIBERTY BUILDING APARTMENT, INTO A HOSPITALITY SPACE.</span><br />
          <br />
          <span>THE INITIAL LAYOUT, CHARACTERIZED BY A NARROW ENTRANCE AND A SEQUENCE OF INTERCONNECTED ROOMS, HAS BEEN REIMAGINED. OLD DOORS HAVE BEEN PRESERVED AND REPURPOSED AS WARDROBE FRONTS RECESSED INTO THE WALLS, INTEGRATING THE HISTORICAL ELEMENTS INTO A NEW SPATIAL CONCEPT.</span><br />
          <br />
          <span>IN EACH ROOM, AN ARCHITECTURAL PARTITION ENCLOSES THE BATHROOM SPACE, WHILE LEAVING THE ORIGINAL VAULTED CEILINGS EXPOSED.</span><br />
          <br />
          <span>THE VISUAL AND FUNCTIONAL FOCAL POINT OF THE PROJECT IS A RED VOLUME AT THE ENTRANCE, DEFINING THE RECEPTION AND KITCHEN AREAS.</span><br />
          <br />
          <span>THE ORIGINAL SICILIAN CEMENT TILES HAVE BEEN RESTORED. INSPIRING THE PROJECT’S COLOR PALETTE, AND FURTHER LINKING THE NEW SPATIAL CONFIGURATION TO THE BUILDING’S HISTORICAL ROOTS.</span><br />
        </ProjectPageDescription>
        <ProjectImage image={cucina} loading='eager' priority={true} className={styles.cucina} pictureName={'cucina'} height={1500} width={1000} projNumber={8} />

      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={corridoio} loading='eager' className={styles.corridoio} pictureName={'corrodio'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={corridoio2} loading='eager' className={styles.corridoio2} pictureName={'corrodio2'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={pianta} loading='eager' className={styles.pianta} pictureName={'pianta'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={cucina2} loading='eager' className={styles.cucina2} pictureName={'cucina2'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={salotto} loading='eager' className={styles.salotto} pictureName={'salotto'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={mensole} loading='eager' className={styles.mensole} pictureName={'mensole'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={salotto2} loading='eager' className={styles.salotto2} pictureName={'salotto2'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={armadio} loading='eager' className={styles.armadio} pictureName={'armadio'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={letto9} loading='eager' className={styles.letto9} pictureName={'letto9'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={letto10} loading='eager' className={styles.letto10} pictureName={'letto10'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={doccia} loading='eager' className={styles.doccia} pictureName={'doccia'} height={1000} width={1500} projNumber={8} />
        <ProjectImage image={soffitto5} loading='eager' className={styles.soffitto5} pictureName={'soffitto5'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={soffitto3} loading='eager' className={styles.soffitto3} pictureName={'soffitto3'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={letto5} loading='eager' className={styles.letto5} pictureName={'letto5'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={letto6} loading='eager' className={styles.letto6} pictureName={'letto6'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={lampada3} loading='eager' className={styles.lampada3} pictureName={'lampada3'} height={1000} width={1500} projNumber={8} />
        <ProjectImage image={lampada4} loading='eager' className={styles.lampada4} pictureName={'lampada4'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={letto4} loading='eager' className={styles.letto4} pictureName={'letto4'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={letto3} loading='eager' className={styles.letto3} pictureName={'letto3'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={soffitto2} loading='eager' className={styles.soffitto2} pictureName={'soffitto2'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={bagno3} loading='eager' className={styles.bagno3} pictureName={'bagno3'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={lampada2} loading='eager' className={styles.lampada2} pictureName={'lampada2'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={rubinetto} loading='eager' className={styles.rubinetto} pictureName={'rubinetto'} height={1000} width={1500} projNumber={8} />
        <ProjectImage image={letto8} loading='eager' className={styles.letto8} pictureName={'letto8'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={soffitto4} loading='eager' className={styles.soffitto4} pictureName={'soffitto4'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={letto7} loading='eager' className={styles.letto7} pictureName={'letto7'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={sedia} loading='eager' className={styles.sedia} pictureName={'sedia'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={letto} loading='eager' className={styles.letto} pictureName={'letto'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={letto2} loading='eager' className={styles.letto2} pictureName={'letto2'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={soffitto} loading='eager' className={styles.soffitto} pictureName={'soffitto'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={salotto3} loading='eager' className={styles.salotto3} pictureName={'salotto3'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={bagno2} loading='eager' className={styles.bagno2} pictureName={'bagno2'} height={1500} width={1000} projNumber={8} />
        <ProjectImage image={bagno} loading='eager' className={styles.bagno} pictureName={'bagno'} height={1500} width={1000} projNumber={8} />
      </ProjectScreen>
      <ProjectScreen>
        <ProjectImage image={lampada} loading='eager' className={styles.lampada} pictureName={'lampada'} height={1000} width={1500} projNumber={8} />
      </ProjectScreen>
    </ProjectWrapper>
  )
}
