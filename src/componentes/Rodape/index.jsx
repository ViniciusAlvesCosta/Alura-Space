import React from 'react'
import styles from './rodape.module.scss' 
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a href='https://www.facebook.com/AluraCursosOnline/' target="_blank" rel='noreferrer'> <img src={facebook} alt="Logo do facebook"></img></a>
                <a href='https://twitter.com/aluraonline?lang=en' target="_blank" rel='noreferrer'><img src={twitter} alt="Logo do twitter"></img></a>
                <a href='https://www.instagram.com/aluraonline/?hl=en' target="_blank" rel='noreferrer'><img src={instagram} alt='Logo do instagram'></img></a>
            </div>
            <p>Desafio do Footer completo!</p>
            
        </footer>
    )
}