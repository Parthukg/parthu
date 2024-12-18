/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Parthasarathy",
  title: "Hi all, I'm Parthu",
  subTitle: emoji(
    "Salesforce Developer | 5+ years of experience | Passionate about leveraging AI & advanced technologies to drive business innovation. When I'm not working with Salesforce, I'm exploring the latest in AI and machine learning."
  ),
  resumeLink:
    "https://docs.google.com/presentation/d/1yhMYRl9e04MyVRE_qi7er8MzAvH99ruc/edit?usp=drive_link&ouid=114818455738151797305&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Parthasarathykg",
  //linkedin: "https://www.linkedin.com/",
  gmail: "parthukg1@gmail.com",
  //gitlab: "https://gitlab.com/",
  //facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@parthukg1",
  stackoverflow: "https://stackoverflow.com/users/10449292/parthu",
  twitter: "https://x.com/theanonymous281",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  salesforce: "https://www.salesforce.com/trailblazer/parkg",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Salesforce Developer and Engineer eager to create impactful and innovative solutions.",
  skills: [
    emoji(
      "🚀 Skilled in developing and customizing Salesforce applications using Apex, Visualforce, and Lightning components."
    ),
    emoji(
      "⚡ Proficient in integrating Salesforce with external systems via REST and SOAP APIs, with strong expertise in data modeling, security, and automation tools like Process Builder and Flow."
    ),
    emoji(
      "📊 Experienced in designing user-friendly dashboards and reports for data-driven decision-making and troubleshooting technical issues."
    ),
    emoji(
      "🤝 Proven track record in collaborating with cross-functional teams to gather requirements and deliver tailored Salesforce solutions."
    ),
    emoji(
      "💡 Passionate about leveraging the latest Salesforce features and advancements in AI and machine learning to drive business innovation."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kumaraguru College of Technology",
      logo: require("./assets/images/kctLogo.png"),
      subHeader: "Electrical Engineering",
      duration: "August 2015 - April 2019",
      desc: "Secured First Class with Distinction. Took courses about Embedded Systems Design and Development, Control Systems, Data Structures and Algorithms, Machine Learning.",
      //descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "AstraZeneca",
      companylogo: require("./assets/images/azLogo3.jpg"),
      date: "June 2019 – Present",
      desc: "Salesforce Developer specializes in building and customizing applications on the Salesforce platform.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Innovation Engineer",
      company: "Forge",
      companylogo: require("./assets/images/forgeLogo2.jpg"),
      date: "July 2018 – December 2018",
      desc: "Graduate Diploma in Hardware/AIoT Product Design and Engineering",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: {
    salesforce: [
    {
      title: "Salesforce Platform Developer I",
      subtitle: "Completed Certifcation from Salesforce for Platform Development",
      image: require("./assets/images/pd1Salesforce.png"),
      imageAlt: "PD1 Logo",
      footerLink: [
        {name: "Certification", url: "https://trailhead.salesforce.com/en/credentials/platformdeveloperi"},
      ]
    },
    {
      title: "Salesforce AI Associate",
      subtitle: "Completed Certifcation from Salesforce for AI Associate",
      image: require("./assets/images/aiAssociate.png"),
      imageAlt: "AI Associate Logo",
      footerLink: [
        {name: "Certification", url: "https://trailhead.salesforce.com/credentials/aiassociate"},
      ]
    },
    {
      title: "Salesforce AI Specialist",
      subtitle: "Completed Certifcation from Salesforce for AI Specialist",
      image: require("./assets/images/aiSpecialist.png"),
      imageAlt: "AI Specialist Logo",
      footerLink: [
        {name: "Certification", url: "https://trailhead.salesforce.com/credentials/aispecialist"},
      ]
    }],
    others: [
    {
      title: "Python Specialization",
      subtitle: "Completed Certifcation authorized by University of Michigan and offered through Coursera.",
      image: require("./assets/images/University_of_Michigan_Logo.png"),
      imageAlt: "UOM Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/2991311abcbcc94bc9597e13d16789b7"},
      ]
    },
    {
      title: "Machine Learning",
      subtitle: "Completed Certifcation authorized by Stanford University and offered through Coursera.",
      image: require("./assets/images/stanfordLogo.png"),
      imageAlt: "Stanford Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/b0843f93a19ed4e8e9b5fc0694274e51"},
      ]
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "Completed Certifcation authorized by DeepLearning.ai and offered through Coursera.",
      image: require("./assets/images/deeplearningAILogo.png"),
      imageAlt: "DeepLearning.ai Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/e7367faa7c3cec5652f486632eeec3ca"},
      ]
    }]
  },
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-8220065852",
  email_address: "parthukg1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "theanonymous281", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
