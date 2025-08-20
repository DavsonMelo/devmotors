"use client"
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(true);

  const handleScroll = () => {
    window.scrollY > 10 ? setScrollPosition(false) : setScrollPosition(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    ;
  }, [scrollPosition])

  return(
    <header className={`${styles.header} ${!scrollPosition ? styles.fixed : styles.background}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">
              Dev Motors
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/">HOME</Link>
            <Link href="/#servicos">SERVIÇOS</Link>
            <Link href="/#contatos">CONTATOS</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}