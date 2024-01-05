
import Header from './components/header/page';
import styles from './page.module.css';
import Footer from './components/footer/page'
import Carousel from './carousel/page';


export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Carousel/>
      </main>
      <Footer/>
    </>
  )
}
