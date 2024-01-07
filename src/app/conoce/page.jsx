
import React from 'react';
import Header from './../components/header/page';
import Footer from './../components/footer/page';
import styles from './page.module.css';
import Link from 'next/link';

export default function Conoce() {
  return (
    <>
      <Header />
      <main className={styles.conoce}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>Conoce a ... decimotercera doctor</h1>
            <p className={styles.description}>El Decimotercer Doctor es la decimotercera
             encarnación de El Doctor, el protagonista ficticio de la serie de televisión 
             de la BBC Doctor Who. El personaje es interpretado por la actriz británica 
             Jodie Whittaker, la primera mujer en retratar al personaje en la serie.
              En la narración de la serie, el Doctor es un viajero en el tiempo,
               un extraterrestre humanoide de una raza conocida como los Señores del Tiempo.</p>
            <div className={styles.image1}>
              <div className={styles.image1Wrapper}>
                <div className={styles.symbolleft}>
                  <img src="./../svg/persistencia-2.svg" alt="Símbolo Persitencia"/>
                  <Link href="https://www.doctorwho.tv/" target="_blank">
                    <button className={styles.button}>Ver más</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>  
              <div className={styles.image2Wrapper}>
                <div className={styles.symbolright}>
                  <img src="./../svg/resistencia.svg" alt="Símbolo Resistencia" />
                </div>
                <div className={styles.image2}>
                <img src="./../doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg" alt="description" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
