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
      <div className={styles.flex}>
        <div className={styles.what}>
          <h1>What I Do?</h1>
          <h3>
            I implement visual and interactive design.This includes the layout,
            visual design, and interactivity of the site. I can also implement
            server-side of sites. I also build APIS that allow the communication
            with other systems{" "}
          </h3>
        </div>
        <div>
          <div>
            <div className={styles.flex1}>
              <h2>Web Design</h2>
              <h2>80%</h2>
            </div>
            {/* <input className={styles.range1} type="range" name="" id="" />
          <div className={styles.fdiv}></div> */}
            <div className={styles.progress}>
              <div className={styles.progressfill1}></div>
              <div className={styles.progressfill2}></div>
            </div>
          </div>
          <div>
            <div className={styles.flex10}>
              <h2>Mobile Design</h2>
              <h2>60%</h2>
            </div>
            {/* <input className={styles.range1} type="range" name="" id="" />
          <div className={styles.fdiv}></div> */}
            <div className={styles.progress0}>
              <div className={styles.progressfill10}></div>
              <div className={styles.progressfill20}></div>
            </div>
          </div>
          <div>
            <div className={styles.flex10}>
              <h2>Mobile Design</h2>
              <h2>60%</h2>
            </div>
            {/* <input className={styles.range1} type="range" name="" id="" />
          <div className={styles.fdiv}></div> */}
            <div className={styles.progress0}>
              <div className={styles.progressfill10}></div>
              <div className={styles.progressfill20}></div>
            </div>
          </div>
          <div>
            <div className={styles.flex10}>
              <h2>Mobile Design</h2>
              <h2>60%</h2>
            </div>
            {/* <input className={styles.range1} type="range" name="" id="" />
          <div className={styles.fdiv}></div> */}
            <div className={styles.progress0}>
              <div className={styles.progressfill10}></div>
              <div className={styles.progressfill20}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.webdev}>
          <img className={styles.webdevimg} src="/icon-1.svg" alt="" />
          <h5>Web Design</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia doloribus vitae error voluptatem ipsa ut eligendi facere
            quidem commodi officia ipsam, in minima amet est labore veritatis
            veniam ad.
          </p>
        </div>
        <div className={styles.webdev}>
          <img className={styles.webdevimg} src="/icon-1.svg" alt="" />
          <h5>Web Design</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia doloribus vitae error voluptatem ipsa ut eligendi facere
            quidem commodi officia ipsam, in minima amet est labore veritatis
            veniam ad.
          </p>
        </div>
        <div className={styles.webdev}>
          <img className={styles.webdevimg} src="/icon-1.svg" alt="" />
          <h5>Web Design</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia doloribus vitae error voluptatem ipsa ut eligendi facere
            quidem commodi officia ipsam, in minima amet est labore veritatis
            veniam ad.
          </p>
        </div>
        <div className={styles.webdev}>
          <img className={styles.webdevimg} src="/icon-1.svg" alt="" />
          <h5>Web Design</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia doloribus vitae error voluptatem ipsa ut eligendi facere
            quidem commodi officia ipsam, in minima amet est labore veritatis
            veniam ad.
          </p>
        </div>
      </div>
      <div className={styles.flex2}>
        <div>
          <h1>Latest Projects</h1>
          <p>Check out some of my latest projects with creative ideas </p>
        </div>
        <button className={styles.btn2}>See All Projects</button>
      </div>
      <div className={styles.form}>
        <div className={styles.textdiv}>
          <img className={styles.messagebox} src="/icon-5.svg" alt="" />
          <h1>If you like what you see let's work together</h1>
          <p>I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from this contact form and will get back to you shortly</p>
        </div>
        <form className={styles.inps} action="">
          <div className={styles.inp1div}>
            <input className={styles.inp1} type="text" placeholder="Name*" />
            <input className={styles.inp2} type="text" placeholder="Email*" />
          </div>
          <textarea
            className={styles.inp3}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="message*"
          ></textarea>
          <button className={styles.btn2}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
