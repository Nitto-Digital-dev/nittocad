import { features } from "../constants";
import styles, { layout } from "../style";
import { discount, robot } from "../assets";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`items-start flex flex-row p-6 rounded-[20px] feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


const Services = () =>  (
  <section id="services" className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-col relative `} >

<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Services We Provide
      </h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div> */}
    </div>

    <div className={`${layout.sectionImg} flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>

    
    
  </section>
);

export default Services;