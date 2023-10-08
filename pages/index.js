import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

/* eslint-disable @next/next/no-img-element */

export default function Home() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_adonhs5",
        "template_3nec8gn",
        form.current,
        "CseFcuLlyDknutpjc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const app = "Ayo";
  // const app1 = app.substring(0, 3);
  // console.log(app1);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.parawhole}>
          <h1 className={styles.title}>I am a developer.</h1>
          <p className={styles.para}>
            Hii! I'm Naseer, a developer based in Lagos, Nigeria.I am constantly
            learning and adapting to the ever-evolving world of technology.I
            will love to work with you
          </p>
          <div className={styles.btndiv}>
            <button className={styles.btn1}>See Projects</button>
            <button className={styles.btn2}>Contact me</button>
          </div>
        </div>
        <div className={styles.projects}>
          <img className={styles.naseer} src="/Naseer2.jpg" alt="" />
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
          <h3 className={styles.head}>
            I implement visual and interactive design.This includes the layout,
            visual design, and interactivity of the site. I can also implement
            server-side of sites. I also build APIS that allow the communication
            with other systems{" "}
          </h3>
        </div>
        <div className={styles.percentages}>
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
          {/* <div>
            <progress  className={styles.pr} max='100'  value='60'>
            </progress>
          </div> */}
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
              <div className={styles.progressfill21}></div>
              <div className={styles.progressfill22}></div>
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
          <h3>Web Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia doloribus vitae error voluptatem ipsa ut eligendi facere
            quidem commodi officia ipsam, in minima amet est labore veritatis
            veniam ad.
          </p>
        </div>
        <div className={styles.webdev}>
          <img className={styles.webdevimg} src="/icon-2.svg" alt="" />
          <h3>Mobile Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia doloribus vitae error voluptatem ipsa ut eligendi facere
            quidem commodi officia ipsam, in minima amet est labore veritatis
            veniam ad.
          </p>
        </div>
        <div className={styles.webdev}>
          <img className={styles.webdevimg} src="/icon-3.svg" alt="" />
          <h3>Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia doloribus vitae error voluptatem ipsa ut eligendi facere
            quidem commodi officia ipsam, in minima amet est labore veritatis
            veniam ad.
          </p>
        </div>
        <div className={styles.webdev}>
          <img className={styles.webdevimg} src="/icon-4.svg" alt="" />
          <h3>SEO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            mollitia doloribus vitae error voluptatem ipsa ut eligendi facere
            quidem commodi officia ipsam, in minima amet est labore veritatis
            veniam ad.
          </p>
        </div>
      </div>
      {/* PROJECTS SECION */}

      <a href="" id="project"></a>
      <div className={styles.flex2}>
        <div className={styles.lastclass}>
          <h1 >Latest Projects</h1>
          <p>Check out some of my latest projects with creative ideas </p>
        </div>
        <button className={styles.btn2}>See All Projects</button>
      </div>
      <div className={styles.project1}>
        <img className={styles.proj1pic} src="/Hero.svg" alt="" />
        <div className={styles.proj1text}>
          <h1>TradXpress</h1>
          <h3>
            This is a crypto-based app for buying and selling digital
            currencies. it displays crypto rates to let user the world's rate at
            a particular time
          </h3>
          <div className={styles.usebtn}>
            <button>REACT</button>
            <button>API</button>
          </div>
          <div className={styles.direct2}>
            <h2>
              <a href="https://timely-daffodil-f8e9a9.netlify.app/">
                See Project
              </a>
            </h2>
            <img src="/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.project2}>
        <img className={styles.proj2pic} src="/Taskduty.svg" alt="" />
        <div className={styles.proj2text}>
          <h1>Task Duty</h1>
          <h3>
            This is a task manager which manages daily tasks with easy to use
            interface. You can perform CRUD operation such as creating,updating
            and deleting tasks .It makes easy to stay on top of your to-do list
            and keep your tasks organized and up-to-date{" "}
          </h3>
          <div className={styles.usebtn2}>
            <button>REACT</button>
            <button>MONGODB</button>
            <button>NODE</button>
          </div>
          <div className={styles.direct2}>
            <h2>
              <a href="">See Project</a>
            </h2>
            <img src="/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.project3}>
        <img className={styles.proj3pic} src="/Metabnb.svg" alt="" />
        <div className={styles.proj3text}>
          <h1>MetaBnb</h1>
          <h3>
            This is website for buying/renting metaverse homes.It supports
            dogecoin payment.It shows varieties of homes available,rating and
            how far they are.
          </h3>
          <div className={styles.usebtn3}>
            <button>REACT</button>
          </div>
          <div className={styles.direct3}>
            <h2>
              <a href="">See Project</a>
            </h2>
            <img src="/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.devdiv}>
        <h1>Still in development</h1>
        <hr className={styles.hr} />
      </div>
      <div className={styles.project4}>
        <img className={styles.proj4pic} src="/Postit.svg" alt="" />
        <div className={styles.proj4text}>
          <h1>POSTIT</h1>
          <h3>
            This is blog website that allows both writers and readers work.CRUD
            operations for writers can be performed to create story, delete
            story and update. There is a section where you can read all stories
          </h3>
          <div className={styles.usebtn4}>
            <button>REACT</button>
            <button>MONGODB</button>
            <button>NODE</button>
          </div>
          <div className={styles.direct4}>
            <h2>
              <a href="">See Project</a>
            </h2>
            <img src="/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.project5}>
        <img className={styles.proj5pic} src="/CRAPPO.svg" alt="" />
        <div className={styles.proj5text}>
          <h1>CRAPPO</h1>
          <h3>This is a cryptocurrency website</h3>
          <div className={styles.usebtn5}>
            <button className={styles.rx}>REACT</button>
            <button className={styles.mongoose}>MONGODB</button>
            <button>NODE</button>
          </div>
          <div className={styles.direct5}>
            <h2>
              <a href="https://crappo-sable.vercel.app/" target=" _blank">See Project</a>
            </h2>
            <img src="/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className={styles.form}>
        <div className={styles.textdiv}>
          <img className={styles.messagebox} src="/icon-5.svg" alt="" />
          <a href="" id="contact"></a>
          <h1 className={styles.messageboxh1}>
            If you like what you see let's work together
          </h1>
          <p>
            I bring rapid solutions to make the life of my clients easier. Have
            any questions? Reach out to me from this contact form and will get
            back to you shortly
          </p>
        </div>
        <form ref={form} className={styles.inps} action="" onSubmit={sendEmail}>
          <div className={styles.inp1div}>
            <input
              className={styles.inp1}
              type="text"
              placeholder="Name"
              name="to_name"
            />
            <input
              className={styles.inp2}
              type="email"
              placeholder="Email*"
              name="from_name"
            />
          </div>
          <textarea
            className={styles.inp3}
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="message*"
          ></textarea>
          <button className={styles.btn3}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
