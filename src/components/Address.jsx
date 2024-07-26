import React from 'react';
import styles, { layout } from "../style";

const Address = () => (

<section className={`${layout.section} py-16`}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading1}> Our Address <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
        Visit us at our physical location for any inquiries or support.
      </p>
        <h3 className={`${styles.heading3} mt-5`}>
          Nitto Solutions
        </h3>
        <p className={`${styles.paragraph} mt-2`}>
          1234 Nitto Street, Suite 100
        </p>
        <p className={`${styles.paragraph} mt-2`}>
          Tech City, TC 56789
        </p>
        <p className={`${styles.paragraph} mt-2`}>
          Phone: (123) 456-7890
        </p>
        <p className={`${styles.paragraph} mt-2`}>
          Email: info@nitto.com
        </p>
      
      <div className=" mt-10 w-full">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9152026833834!2d-122.08424968469235!3d37.421999879821026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5eacb8e0d13%3A0x7c2c4d3e3c0031e7!2sGoogleplex!5e0!3m2!1sen!2sus!4v1642523954893!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Nitto Solutions Location"
          className="rounded-[20px]"
        ></iframe>
      </div>
      

    </div>
  </section>
);

export default Address;
