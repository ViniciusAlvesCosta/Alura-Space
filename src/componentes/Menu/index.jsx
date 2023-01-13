import React from 'react'
import home from '../../assents/icones/home-ativo.png'
import curtidas from '../../assents/icones/mais-curtidas-inativo.png'
import vistas from '../../assents/icones/mais-vistas-inativo.png'
import inativo from '../../assents/icones/novas-inativo.png'
import surpreenda from '../../assents/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt='icone de casinha' />
                <a href="#">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={curtidas} alt='icone da coração' />
                <a href="#">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={vistas} alt='icone de olhinho' />
                <a href="#">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={inativo} alt='icone inativo' />
                <a href="#">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreenda} alt='suprise motherfucker' />
                <a href="#">Surpreeenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
