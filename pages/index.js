import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container} >
      <h1>I am a developer</h1>
      <p>Hii! I'm Naseer, a developer based in Lagos,Nigeria, I am constantly learning and adapting to the ever-evolving world of technology </p>
      <button className={styles.btn1}>See Projects</button>
      <button className={styles.btn2}>Contact me</button>
    </div>
  );
}
