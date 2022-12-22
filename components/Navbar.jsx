import React from 'react'
import styles from  '../styles/Navbar.module.css'
// import twitter from '../'

const Navbar = () => {
  return (
    <div>
        <div className={styles.container}>
        <h1>Naseer</h1>
        <div className={styles.midiv}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
        </div>
            <div className={styles.icondiv}>
                <img src='/twitter.svg'  />
                <img src="/instagram.svg" alt="" />
                <img src="/mail.svg" alt="" />
                <img src="/github.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar