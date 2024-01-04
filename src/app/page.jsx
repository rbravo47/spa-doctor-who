import { useClient } from 'react';
import Header from './components/header/page';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
      </main>
    </>
  )
}
