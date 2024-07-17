import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Software Development",
    content: "Custom software solutions tailored to your business needs. From concept to deployment, we ensure high-quality and efficient software delivery.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Website Development",
    content: "Professional website development services that enhance your online presence and engage your customers.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Web Application Development",
    content: "Robust web applications designed to streamline your operations and boost productivity.",
  },
  {
    id: "feature-4",
    icon: star,
    title: "Mobile Application Development",
    content: "Innovative mobile apps for Android and iOS platforms that keep your business at your customers’ fingertips.",
  },
  {
    id: "feature-5",
    icon: shield,
    title: "IT Support",
    content: "Comprehensive IT support services to keep your systems running smoothly and securely.",
  },
  {
    id: "feature-6",
    icon: send,
    title: "Machine Learning (ML) Modeling",
    content: "Advanced machine learning models to help your business leverage data for predictive insights and automation.",
  },
  {
    id: "feature-7",
    icon: star,
    title: "AI Agent Services",
    content: "Intelligent AI agents designed to improve customer interactions, automate processes, and enhance decision-making.",
  },
  {
    id: "feature-8",
    icon: shield,
    title: "Data Analytics Services",
    content: "In-depth data analytics services to transform your data into actionable insights, driving informed business decisions.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Working at Tech Innovators Inc. has been an incredible experience. The focus on AI and machine learning allows us to develop cutting-edge solutions.",
    name: "Emily Carter",
    title: "Senior AI Specialist",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "At Tech Innovators Inc., we constantly push the boundaries of what's possible with cloud services and software development. The collaborative environment is second to none.",
    name: "James Anderson",
    title: "Lead Software Developer",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Tech Innovators Inc.'s commitment to innovation in AI and data science makes it a fantastic place to work. We're always at the forefront of technological advancements.",
    name: "Olivia Martinez",
    title: "Data Scientist",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

const BASE_URL = '/nittocad';
export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "About Us",
        link: `${BASE_URL}/about`,
      },
      {
        name: "How it Works",
        link: `${BASE_URL}/about`,
      },
      {
        name: "Create",
        link: `${BASE_URL}/about`,
      },
      {
        name: "Address",
        link: `${BASE_URL}/address`,
      },
      {
        name: "Terms & Services",
        link: `${BASE_URL}/termsservices`,
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: `${BASE_URL}/contact`,
      },
      {
        name: "Partners",
        link: `${BASE_URL}/about`,
      },
      {
        name: "Suggestions",
        link: `${BASE_URL}/about`,
      },
      {
        name: "Blog",
        link: `${BASE_URL}/about`,
      },
      {
        name: "Newsletters",
        link: `${BASE_URL}/about`,
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: `${BASE_URL}/about`,
      },
      {
        name: "Become a Partner",
        link: `${BASE_URL}/about`,
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];