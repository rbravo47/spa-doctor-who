import './root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import styles from './page.module.css'
import Header from './components/header/page'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
      </main>
    </>
  )
}
