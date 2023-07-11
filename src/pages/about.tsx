import Head from 'next/head'
import Image from 'next/image'
import styles from '~/styles/About.module.css'
import { Header } from '~/Components/Header/Header'
import { Footer } from '~/Components/Footer/Footer'
import { AboutIcon } from '~/Components/SvgIcons/AboutIcon'

export default function About() {
  return (
    <main className={styles.main}>

      <p className={styles.aboutTitle}>ARE TWO ARCHITECTS FROM SOUTHERN ITALY.</p>
      <div className={styles.iconWrapper} >
        <AboutIcon className={styles.icon} />
      </div>
    </main>
  )
}
