export type Translations = {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  header: {
    title: string;
    subtitle: string;
    tagline: string;
    cvEn: string;
    cvPt: string;
  };
  about: {
    title: string;
    intro: string;
    paragraph2: string;
    tags: {
      problemSolving: string;
      fullStack: string;
      collaboration: string;
    };
  };
  projects: {
    title: string;
    repository: string;
    liveDemo: string;
    civis: { title: string; description: string };
    rehabit: { title: string; description: string };
    biblioteca: { title: string; description: string };
    supportSystemApi: { title: string; description: string };
  };
  experience: {
    title: string;
    present: string;
    softwareDeveloper: string;
    qaTester: string;
  };
  skills: {
    title: string;
    hardSkills: string;
  };
  contact: {
    title: string;
    heading: string;
    description: string;
    location: string;
    placeholderEmail: string;
    placeholderSubject: string;
    placeholderMessage: string;
    sendButton: string;
    successMessage: string;
    errorMessage: string;
  };
};

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
  },
  header: {
    title: "José Silva",
    subtitle: "Software Developer",
    tagline: "Software developer passionate about creating innovative and efficient solutions",
    cvEn: "READ THE CV",
    cvPt: "READ THE CV - PT",
  },
  about: {
    title: "About",
    intro: "Hello, my name is José Silva, and I am currently pursuing a degree in Information Systems. I am a software developer with experience in various programming languages and a solid background in problem-solving.",
    paragraph2:
      "I'm passionate about creating innovative solutions and continuously learning new technologies. My journey in software development has allowed me to work on diverse projects, from web applications to backend systems, always focusing on clean code and user experience.",
    tags: {
      problemSolving: "Problem Solving",
      fullStack: "Full Stack Development",
      collaboration: "Team Collaboration",
    },
  },
  projects: {
    title: "Projects",
    repository: "Repository",
    liveDemo: "Live Demo",
    civis: {
      title: "Civis Conectados",
      description:
        "A collaboration platform between citizens and the police for sharing information about crimes.",
    },
    rehabit: {
      title: "Rehabit",
      description:
        "A tool to help people improve their habits, based on the habit loop concept (cue, routine, reward).",
    },
    biblioteca: {
      title: "Biblioteca",
      description:
        "A Library Management System designed to manage and organize the daily operations of a library efficiently.",
    },
    supportSystemApi: {
      title: "Support System API",
      description:
        "RESTful backend built with .NET 9 that simulates a customer support platform. Users can create and manage support tickets with role-based access, JWT authentication, and status management.",
    },
  },
  experience: {
    title: "My Experiences",
    present: "Present",
    softwareDeveloper: "Software Developer",
    qaTester: "Quality Assurance Tester",
  },
  skills: {
    title: "Skills",
    hardSkills: "Hard Skills",
  },
  contact: {
    title: "Contact",
    heading: "Drop Me a Message",
    description:
      "Hi, if you are a recruiter or potential collaborator interested in discussing opportunities, I would love to hear from you!",
    location: "Macaé, Rio de Janeiro, Brazil",
    placeholderEmail: "Your email",
    placeholderSubject: "Subject",
    placeholderMessage: "Message",
    sendButton: "Send Message",
    successMessage: "Message sent successfully!",
    errorMessage: "Failed to send message. Please try again.",
  },
};
