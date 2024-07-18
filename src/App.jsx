import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styles from "./style";
import { Navbar, Footer, Home, About, Contact, TermsServices, Address } from "./components";

const App = () => {
  const contactRef = useRef(null);

  const ScrollToTop = () => {
    const { pathname, hash, key } = useLocation();
    useEffect(() => {
      if (hash === '') {
        window.scrollTo(0, 0);
      } else {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    }, [pathname, hash, key]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={"bg-primary w-full overflow-hidden"}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary w-full flex ${styles.paddingX} ${styles.flexCenter}`}></div>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/termsservices" element={<TermsServices />} />
            <Route path="/address" element={<Address />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
