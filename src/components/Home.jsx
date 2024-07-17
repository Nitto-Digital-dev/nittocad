// Example for Home.jsx or the relevant section component
import React, { useRef } from 'react';
import styles from "../style";
import {Hero, Business, CardDeal, Testimonials, Clients, Services, Contact } from "../components";

const Home = () => {
  const contactRef = useRef(null);

  return (
    <div className={"bg-primary w-full overflow-hidden"}>
      <div className={`${styles.boxWidth}`}>
          <Hero contactRef={contactRef} />
          <Business />
          <Services />
          <Clients />
          <CardDeal />
          <Testimonials />
          <Contact ref={contactRef} />
      </div>
    </div>
  );
};

export default Home;
