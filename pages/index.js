import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Img from 'react-optimized-image';
import Dose2020 from '../public/pundf_dose_frei.png';
import Dose2019 from '../public/dose_2018.png';
import Dose2000 from '../public/dose_2019.png';
import Dose2001 from '../public/dose_2020.png';
import Dose2002 from '../public/Folie2Kompost_placeholder.png';
import LeftImage from '../public/pundf_header_desktop_muster04.png';
import RightImage from '../public/pundf_header_desktop_muster03.png';
import Sample from '../public/sampleimage1.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <Img width="100%" src={Dose2020} type="desktopFull"/>
          <Img width="100%" src={Dose2019} type="desktopFull"/>
          <Img width="100%" src={Dose2000} type="desktopFull" />
          <Img width="100%" src={Dose2001} type="desktopFull" />
          <Img width="100%" src={Dose2002} type="desktopFull" />
          <Img width="100%" src={LeftImage} type="desktopFull" />
          <Img width="100%" src={RightImage} type="desktopFull" />
          <Img width="100%" src={Sample} type="desktopFull" />
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
