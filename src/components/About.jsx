import React from 'react';
import styles, { layout } from "../style";

const About = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading1}>
        About Us <br className="sm:block hidden" />
      </h2>
      <h2 className={styles.heading1}>
        <span className="text-gradient ss:text-[70px] text-[40px] xs:leading-[90.8px] leading-[50px]">
        We are dedicated to innovation
        </span>{" "}
        <br className="sm:block hidden" />
        <span className="ss:text-[30px] text-[18px] xs:leading-[20.8px] leading-[20.8px]">
          and excellence.
        </span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[950px] mt-5`}>
        At Nitto, we understand that running a business involves juggling 
        multiple tasks and priorities. That's why we offer comprehensive 
        IT solutions designed to streamline your operations and boost your 
        productivity. We ensure your systems run smoothly and efficiently, allowing you to focus on what you do best - growing your business. 
        Trust us to enhance your efficiency and drive your success.
      </p>
      

    </div>
  </section>
);

export default About;
