"use client";

import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="logo">
        <img src="./logos/logo-cadena.png" alt="Logo cadena" />
      </div>
      <nav className={styles.nav}>
      <Link href="https://www.facebook.com/"><img src="../../icons/facebook.svg" alt="Facebook" target="_blank"/></Link>
        <Link href="https://www.X.com/"><img src="../../icons/simple-icons_x.svg" alt="twitter" target="_blank"/></Link>
        <Link href="https://www.instagram.com/"><img src="../../icons/mdi_instagram.svg" alt="Instagram" target="_blank"/></Link>
        <Link href="https://www.tiktok.com/"><img src="../../icons/ic_baseline-tiktok.svg" alt="Tiktok" target="_blank"/></Link>
      </nav>
    </footer>
  )
}
