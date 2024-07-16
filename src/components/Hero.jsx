import styles from "../style";
import { discount, robot, itsolutions, business } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col  ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[46px] text-white ss:leading-[80px] leading-[65px] mr-5">
          Empowering Your Business 
          <span className="text-gradient"> With </span>{" "} <br className="sm:block hidden" />{" "}
          <span className="text-gradient ss:text-[68px] text-[60px]">Cutting Edge</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-2 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[42px] text-white ss:leading-[100.8px] leading-[65px] w-full">
         IT Solutions.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We provide top-notch IT support and services, 
        including software development, website development, 
        and mobile app development. Our goal is to help your business thrive in the digital age.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-5 ml-5 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <img src={business} alt="billing" className="w-[90%] h-[90%] relative z-[5] rounded-[20%]" />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 black__gradient" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full blue__gradient bottom-40" /> */}
        <div className="absolute z-[1] w-[80%] h-[80%] blue__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
