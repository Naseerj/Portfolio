import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar.module.css";
import stylesNav from "../styles/Navbar.module.css";

// import twitter from '../'

const Navbar = () => {
  const xRef = useRef();
  const navbarRef = useRef();
  const hamRef = useRef();
  const iconRef = useRef();
  const midRef = useRef();
  const mobileRef = useRef();
  const [state, setState] = useState(false);

  const [collapse, setCollapse] = useState(false);

  // const handleChange = () => {
  //   // setState(true);
  //   if (xRef.current.style.display = "block") {
  //     hamRef.current.style.display = "none";
  //   } else if (hamRef.current.style.display = "none"){
  //     xRef.current.style.display = "block";
  //   }
  // };

  const handleChange = () => {
    // if (midRef.current.style.display = "none") {
    //   midRef.current.style.display = "block";
    //   xRef.current.style.display = "block";
    //   hamRef.current.style.display = "none";
    //   console.log("check");
    // }else{
    //   midRef.current.style.display = "none"
    //   console.log("Done");
    // }
    
    if (mobileRef.current.style.display === "flex" && window.matchMedia("(max-width: 561px)").matches) {
      mobileRef.current.style.display = "none";
      xRef.current.style.display = "none";
      hamRef.current.style.display = "block";
      midRef.current.style.display = 'none'
      console.log('First one')
    } else {
      mobileRef.current.style.display = "flex";
      xRef.current.style.display = "block";
      hamRef.current.style.display = "none";
      midRef.current.style.display = 'none'
      console.log('Second one')


    }

    // if (window.matchMedia("(max-width: 561px)").matches) {

    //   Code to execute if the media query condition is met (e.g., for screens narrower than 768px)
    //   console.log("Media query matches!");
    // } else {
      //   Code to execute if the media query condition is not met (e.g., for screens wider than 768px)
      //   console.log("Media query does not match!");
      // }
      
      
      // iconRef.current.classList.toggle('styles.collapse')
      
      console.log("working");
      // midRef.current.style.flexdirection = 'column'
      
      setCollapse(!collapse);
    // midRef.current.style.display = 'block'
    // hamRef.current.style.display = 'none'
    // iconRef.current.style.display = 'none'
    // navbarRef.current.style.width = "50%";
  };

  const navChange = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      console.log("starting");
      navbarRef.current.style.width = "98%";
      navbarRef.current.style.position = "fixed";
      // navbarRef.current.style.position.fixed.top = '0'
    } else {
      console.log("warming");
      navbarRef.current.style.width = "80%";
      navbarRef.current.style.position = "relative";
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
      <div
        ref={navbarRef}
        className={`active ${styles.container} ${
          collapse ? styles.collapse : ""
        }`}
      >
        <h1>Naseer</h1>
        <div ref={midRef} className={styles.midiv}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="#project">Projects</a>
          <a href="">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div ref={mobileRef} className={styles.mobilenav}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="#project">Projects</a>
          <a href="">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div ref={iconRef} className={styles.icondiv}>
          <img className={styles.twitter} src="/twitter.svg" />
          <img className={styles.instagram} src="/instagram.svg" alt="" />
          <img className={styles.mail} src="/mail.svg" alt="" />
          <img className={styles.github} src="/github.svg" alt="" />
        </div>
        <div className={styles.hamx}>
          <img
            ref={hamRef}
            onClick={() => {
              handleChange();
            }}
            className={styles.ham}
            src="/menu.svg"
            alt=""
          />
          <img
            ref={xRef}
            onClick={() => {
              handleChange();
            }}
            className={styles.x}
            src="/x (1).svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//
