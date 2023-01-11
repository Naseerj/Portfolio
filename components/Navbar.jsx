import React, { useEffect, useRef } from "react";
import styles from "../styles/Navbar.module.css";
import stylesNav from "../styles/Navbar.module.css";

// import twitter from '../'

const Navbar = () => {
  const navbarRef = useRef('')
  //   const styles = {
  //     first: "container",
  //     second: "Class Name B",
  //     third: "Class Name C"
  // }

  const navChange = () => {
    console.log(window.scrollY);
    if(window.scrollY >= 100){
      console.log('starting')
      navbarRef.current.style.width = '98%'
      navbarRef.current.style.position = 'fixed'
      // navbarRef.current.style.position.fixed.top = '0'


    }else{
      console.log('warming')
      navbarRef.current.style.width = '80%'
      navbarRef.current.style.position = 'relative'
    }
  };
  // if (scroll > 200) {
  //   console.log("after 200");
  // } else {
  //   console.log("nothing");
  // }
  
  useEffect(() => {
    window.addEventListener("scroll", navChange);
  });

  return (
    <div className={styles.first}>
      <div ref={navbarRef} className={`active ${styles.container}`}>
        <h1>Naseer</h1>
        <div className={styles.midiv}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="#project">Projects</a>
          <a href="">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.icondiv}>
          <img className={styles.twitter} src="/twitter.svg" />
          <img src="/instagram.svg" alt="" />
          <img src="/mail.svg" alt="" />
          <img src="/github.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
