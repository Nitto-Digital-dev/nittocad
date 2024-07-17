import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import styles from "./style";
import { Navbar, Footer, Home, Clients, About, Contact, TermsServices, Address } from "./components";

// basename="/nittocad"
const App = () => {
  const contactRef = useRef(null);

  return (
    <Router basename="/nittocad">
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
            <Route path="/termsservices" element={< TermsServices/>} />
            <Route path="/address" element={<Address/>} />



            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
