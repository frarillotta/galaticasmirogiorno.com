'use client'
import Image from 'next/image'
import styles from './Project1.module.css';

type ProjectImageProps = {
  pictureName: string;
  projNumber: number;
  width: number;
  height: number;
  className?: string;
}

//TODO: add label to each of these
const ProjectImage: React.FC<ProjectImageProps> = ({ pictureName, projNumber, width, height, className = '' }) => {
  return <div className={`${styles.pictureWrapper} ${className}`}>
    <Image className={styles.projectPicture} alt={`project ${projNumber} ${pictureName} Picture`} src={`/projects/${projNumber}/pictures/${pictureName}.png`} width={width} height={height} />
  </div>
};

const projectPictures = [
  {
    width: 65,
    height: 117,
    name: 'blueprint',
    className: styles.blueprint
  },
  {
    width: 257,
    height: 86,
    name: 'front',
    className: styles.front
  }, {
    width: 260,
    height: 171,
    name: 'handle',
    className: styles.handle
  }, {
    width: 256,
    height: 355,
    name: 'inside',
    className: styles.inside
  }, {
    width: 220,
    height: 434,
    name: 'mirror1',
    className: styles.mirror1
  }, {
    width: 220,
    height: 434,
    name: 'mirror2',
    className: styles.mirror2
  }, {
    width: 220,
    height: 434,
    name: 'mirror3',
    className: styles.mirror3
  }, {
    width: 220,
    height: 434,
    name: 'mirror4',
    className: styles.mirror4
  }, {
    width: 220,
    height: 434,
    name: 'mirror5',
    className: styles.mirror5
  },
]

export default function Project1() {
  return (
    <main className={styles.main}>
      <p className={styles.description}>
        <span>MASSIMILIANO PARRUCCHIERI</span><br/>
        <span>CATANIA, ITALY</span><br/>
        <br/>
        <span>2021</span>
      </p>
      {projectPictures.map(
        (pic) =>
          <ProjectImage
            pictureName={pic.name}
            projNumber={1}
            width={pic.width}
            height={pic.height}
            className={pic.className}
            key={`picture${pic.name}`}
          />
      )
      }
    </main>
  )
}
