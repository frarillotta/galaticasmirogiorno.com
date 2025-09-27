import Head from 'next/head'
import Image from 'next/image'
import styles from '~/styles/About.module.css'
import { Header } from '~/Components/Header/Header'
import { Footer } from '~/Components/Footer/Footer'
import { AboutIcon } from '~/Components/SvgIcons/AboutIcon'

export default function About() {
  return (
    <main className={styles.main}>

      <h1 className={styles.aboutTitle}>ARE TWO ARCHITECTS WHO MET IN CALABRIA, SOUTHERN ITALY. THEIR STORY IS DEEPLY IN THE SOUTH: ONE FROM CALABRIA, THE OTHER FROM SICILY - REGIONS DIVIDED BY THE WILD LANDSCAPE OF STRAIT OF MESSINA. 
      <br/> 
      THEY GRADUATED TOGETHER IN 2020 WITH A THESIS ON THE CREATIVE REUSE OF UNFINISHED ARCHITECTURE, THE MOST DEFINING PHENOMENA IN THEIR TERRITORIES. 
      <br/> 
      TODAY, THEY LIVE AND WORK AT THE FOOT OF MOUNT ETNA, EMBRACING SLOW LIVING AND NATURE.
      </h1>
      <div className={styles.iconWrapper} >
        <AboutIcon className={styles.icon} />
      </div>
    </main>
  )
}
