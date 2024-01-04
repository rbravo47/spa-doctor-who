import { useClient } from 'react';
import Header from './components/header/page';
import styles from './page.module.css';
import Footer from './components/footer/page'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
      </main>
      <Footer/>
    </>
  )
}
