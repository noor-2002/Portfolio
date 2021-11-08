/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Noor's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Noor mohamed Portfolio",
    type: "website",
    url: "https://noormohamed.netlify.app/#/home",
  },
};

//Home Page
const greeting = {
  title: "Noor Mohamed",
  logo_name: "Noor mohamed",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1xomyFMTG1UHrQVfgCHcUw6sUOEU2SW7e/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/NoorMohamed-intern",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/noor-mohamed-746a30212/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:noormd.intern@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/noorm1995",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/_i_dont_use_emojis_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Aalim muhammad salegh college of engineering",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "amslogo-1.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Front-end development, Git, Php/wordpress.Adobe XD etc.",
        "⚡ I was selected for NSP Means Scholarship which is given to top students of our college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.aalimec.ac.in",
    },
    {
      title: "Madras christian college higher secondary school",
      subtitle: "Higher secondary school",
      logo_path: "MCC-LOGO-3.jpg",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ I have passed my 12th grade in MCC, chennai (English medium).",
        "⚡  Studied basics of computer science which motivated me to pursue a carrier in this field.",
        "⚡ Also attended various cultural programs and sports events.",
        // "⚡ I have participated in multiple programs and educational trips during my school days",
      ],
      website_link: "https://mcc.edu.in",
    },
    {
      title: "St.anthonys high secondary school",
      subtitle: "High school",
      logo_path: "st_anthonys_logo-removebg-preview-3.png",
      alt_name: "IIITDM Kurnool",
      duration: "2005 - 2017",
      descriptions: [
        "⚡ I have passed my 10th grade in st anthonys, chennai (English medium).",
        "⚡ I have also learned basics of programming here and many more",
        "⚡ I have participated in multiple programs and educational trips during my school days",
      ],
      website_link: "https://stanthonysegmore.org",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Internshala",
      subtitle: "- web development",
      logo_path: "internshala.jpg",
      certificate_link: "https://internshala.com/verify_certificate/",
      alt_name: "Internshala certificate",
      color_code: "#FFFFFF",
    },
    {
      title: "Udemy",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "JavaScript",
      color_code: "#FFFFFF",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Web development Intern",
          company: "Moxman Pvt. Ltd.",
          company_url: "https://moxman.com",
          logo_path: "Moxman-Design-1.png",
          duration: "Jun 2021 - Aug 2021",
          location: "Chennai, Tamilnadu",
          description:
            "I had been working as developer at moxman. I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Web development Intern",
          company: "Klenty",
          company_url: "https://moxman.com",
          logo_path: "klenty-logo.png",
          duration: "Sept 2021 - Nov 2021",
          location: "Chennai, Tamilnadu",
          description:
            "I had been working as developer at Klenty. I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To maintain all existing pages and work closely with Designers for necessary changes (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "noor-photo-11.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Front-end, DSA, Node.js and Opensource Development.",
  },
  // blogSection: {
  //   // title: "Blogs",
  //   // subtitle:
  //   //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   // link: "",
  //   // avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Admbakkam, chennai, Tamilnadu, Chennai - 600088",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/Xv3vnGPrkc91Vify6",
  },
  emailSection: {
    title: "email",
    subtitle: "noormd.intern@gmail.com",
  },
  phoneSection: {
    title: "Phone Number",
    // email '',
    subtitle: "+91 9361932044",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
