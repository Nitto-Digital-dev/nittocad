import styles from "./style"
import { Navbar, Hero, Stats, Billing, Business, CardDeal, Testimonials, Clients, CTA, Footer, Services, Contact } from "./components"

const App = () => (
  
    <div className={"bg-primary w-full overflow-hidden"}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary w-full flex ${styles.paddingX} ${styles.flexCenter}`}></div>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}></div>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats/> */}
        <Business/>
        <Services/>
        <Clients/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Contact/>
        <CTA/>
        <Footer/>
        
      </div>

    </div>
  )

export default App
