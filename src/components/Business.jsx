import { features } from "../constants";
import styles, { layout } from "../style";
import { business, robot, itsolutions } from "../assets";
import Button from "./Button";

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
        <img src={business} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-[20%]" />
        {/* <img src={itsolutions} alt="billing" className="w-[100%] h-[85%] relative z-[5]" /> */}

        {/* gradient start */}
        <div className="absolute z-[5] w-[50%] h-[80%] top-40 blue__gradient" />
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
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll increase your efficiency.
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
      At Nitto, we understand that running a business involves juggling 
      multiple tasks and priorities. That's why we offer comprehensive 
      IT solutions designed to streamline your operations and boost your 
      productivity. Our expert team provides tailored support, from software development, 
      artificial intelligence, Data Analytics Services, Machine Learning, 
      enterprise resource planning (ERP) and maney other services. 
      we ensure your systems run smoothly and efficiently, allowing you to focus on what you do best growing your business. 
      Trust us to enhance your efficiency and drive your success..
      </p>

      <Button styles={`mt-10`} />
    </div>

    
  </section>
);

export default Business;