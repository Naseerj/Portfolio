import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>I am a developer.</h1>
          <p>
            Hii! I'm Naseer, a developer based in Lagos,Nigeria, I am constantly
            learning and adapting to the ever-evolving world of technology.{" "}
          </p>
          <div className={styles.btndiv}>
            <button className={styles.btn1}>See Projects</button>
            <button className={styles.btn2}>Contact me</button>
          </div>
        </div>
        <div className={styles.projects}>
          <img className={styles.check} src="/check-circle.svg" alt="" />
          <div className={styles.textdiv}>
            <h2 className={styles.text1}>30+</h2>
            <h2 className={styles.text2}>Projects Done</h2>
          </div>
        </div>
        <div></div>
      </div>
      <h1>What I Do?</h1>
      <p>I implement visual and interactive design.  </p>
      <p></p>
      <input className={styles.range1} type="range" name="" id="" />
      <div className={styles.fdiv}></div>
    </div>
  );
}
