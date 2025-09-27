import Head from 'next/head'
import Image from 'next/image'
import styles from '~/styles/About.module.css'
import { Header } from '~/Components/Header/Header'
import { Footer } from '~/Components/Footer/Footer'
import { AboutIcon } from '~/Components/SvgIcons/AboutIcon'

export default function About() {
  return (
    <main className={styles.main}>

      <h1 className={styles.aboutTitle}>are two architects who met in Calabria, Southern Italy. Their story is deeply in the South: one from Calabria, the other from Sicily - regions divided by the wild landscape of Strait of Messina. <br/>
      They graduated together in 2020 with a thesis on the creative reuse of unfinished architecture, the most defining phenomena in their territories. <br/>
      Today, they live and work at the foot of Mount Etna, embracing slow living and nature.
      </h1>
      <div className={styles.iconWrapper} >
        <AboutIcon className={styles.icon} />
      </div>
    </main>
  )
}
