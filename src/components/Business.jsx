import React from 'react';
import { features } from "../constants";
import styles, { layout } from "../style";
import { robot, fetchereimg} from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
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

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-10 relative`}>
        <img src={fetchereimg} alt="billing" className="w-[90%] h-[85%] relative z-[5] rounded-[10%]" />
        {/* <img src={itsolutions} alt="billing" className="w-[100%] h-[85%] relative z-[5]" /> */}

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[50%] h-[80%] top-40 blue__gradient" /> */}
        {/* <div className="absolute z-[1] w-[60%] h-[70%] rounded-full white__gradient bottom-40" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] white__gradient bottom-40" /> */}
        {/* gradient end */}
      </div>

    {/* <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div> */}

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading1}>
      Our Mission is <br className="sm:block hidden" />
      <span className="ss:text-[30px] text-[15px] xs:leading-[20.8px] leading-[20.8px]">To empower businesses through</span>{" "}<br className="sm:block hidden"/>
      <span className="text-gradient ss:text-[70px] text-[40px] xs:leading-[90.8px] leading-[50px]">technology</span>{" "}<br className="sm:block hidden"/>
      <span className="ss:text-[30px] text-[18px] xs:leading-[20.8px] leading-[20.8px]">providing solutions that enhance efficiency and growth.</span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
      At Nitto, we understand that running a business involves juggling 
      multiple tasks and priorities. That's why we offer comprehensive 
      IT solutions designed to streamline your operations and boost your 
      productivity. we ensure your systems run smoothly and efficiently, allowing you to focus on what you do best growing your business. 
      Trust us to enhance your efficiency and drive your success..
      </p>
    </div>

    
  </section>
);

export default Business;