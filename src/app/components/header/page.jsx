"use client";
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import styles from './page.module.css';

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return <HeaderClient isMobile={isMobile} />;
};

const HeaderClient = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {isMobile ? (
        <button onClick={toggleMenu} className={styles.menuButton}>☰</button>
      ) : (
        <nav className={styles.nav}>
          <Link href="/contacto">Contacto</Link>
          <Link href="/conoce_a">Conoce-a</Link>
          <Link href="/doctores">Doctores</Link>
        </nav>
      )}
      {isOpen && isMobile && (
        <main className={styles.main}>
          <nav className={`${styles.nav} ${styles.menu}`}>
            <Link href="/contacto">Contacto</Link>
            <Link href="/conoce_a">Conoce-a</Link>
            <Link href="/doctores">Doctores</Link>
          </nav>
        </main>
      )}
      
      <Link href="/">
        <img className={styles.logo} src="./../logos/logo.png" alt="Logo" />
      </Link>
     
      
      <nav className={styles.nav}>
      
        <Link href="./../buscar">
          <img src="./icons/material-symbols-light_search.svg" alt="icon search" />Buscar
        </Link>
        <Link href="https://www.facebook.com/"><img src="./../icons/facebook.svg" alt="Facebook" target="_blank"/></Link>
        <Link href="https://www.X.com/"><img src="./../icons/simple-icons_x.svg" alt="twitter" target="_blank"/></Link>
        <Link href="https://www.instagram.com/"><img src="./../icons/mdi_instagram.svg" alt="Instagram" target="_blank"/></Link>
        <Link href="https://www.tiktok.com/"><img src="./../icons/ic_baseline-tiktok.svg" alt="Tiktok" target="_blank"/></Link>
      </nav>
    </header>
  );
};

export default Header;