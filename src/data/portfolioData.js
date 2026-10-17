export const personalInfo = {
  name: "Ihimbazwe Niyikora Kevine",
  title: "Software Engineer • AI & Data Enthusiast • Builder • Designer",
  shortIntro: "I enjoy using technology to build practical, impactful solutions across software engineering, artificial intelligence, data analytics, mobile applications, IoT & embedded systems, visual design, and social impact.",
  aboutText: "Driven by curiosity and a hands-on building ethos, I bridge technical software engineering with human-centered design. Whether engineering AI sentiment models, building smart aeroponic IoT pods, crafting mobile apps, or launching community platforms, my goal is simple: build things that solve real-world problems.",
  location: "Available Worldwide / Remote",
  email: "niyikorakevine@gmail.com",
  github: "https://github.com/inkevine",
  linkedin: "https://www.linkedin.com/in/ihimbazwe-niyikora-kevine/",
  figma: "https://www.figma.com/design/T2BhHInO69AAl5LZqMWCRH/EchoMirror?node-id=0-1&t=GsNruSS2TvFWCF9d-1",
  twitter: "https://twitter.com/inkevine",
};

export const projectCategories = [
  { id: "All", label: "All Projects" },
  { id: "Featured", label: "Featured" },
  { id: "AI & Data", label: "AI & Data" },
  { id: "IoT & Embedded Systems", label: "IoT & Embedded" },
  { id: "Mobile Apps", label: "Mobile Apps" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "UI/UX & Design", label: "UI/UX & Design" },
  { id: "Social Impact", label: "Social Impact" },
  { id: "Fun / Experimental", label: "Fun & Experiments" }
];

export const projectsData = [
  {
    id: "agrohaven",
    title: "AgroHaven",
    subtitle: "Smart IoT Aeroponics Agriculture System",
    categories: ["Featured", "IoT & Embedded Systems", "Mobile Apps"],
    shortDescription: "A smart IoT-powered aeroponics system that grows crops without soil by delivering nutrient-rich mist directly to their roots, with a mobile app for remote monitoring and control.",
    image: "/projects/agrohaven.png",
    featuredRank: 1,
    problem: "Soil agriculture faces water scarcity, land degradation, and unpredictable weather conditions.",
    solution: "Developed an automated aeroponics system using IoT microcontrollers to deliver precise nutrient mist directly to crop roots, controllable remotely via mobile app.",
    features: [
      "Real-time IoT sensor telemetry (pH, humidity, temperature)",
      "Automated root misting cycles triggered by telemetry thresholds",
      "Cloud monitoring and remote pump override",
      "Mobile app for real-time farm pod monitoring and control"
    ],
    technologies: ["IoT", "Arduino", "NodeMCU", "Sensors", "React Native", "Node.js"],
    role: "Systems Architect & Lead Developer",
    impact: "Reduces water consumption by up to 95% while providing 24/7 mobile control over aeroponic farm pods.",
    links: {
      liveDemo: "https://agrohaven.vercel.app/",
      github: "https://github.com/inkevine",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "chromify",
    title: "Chromify",
    subtitle: "AI Color Assistance & Vision Coach App",
    categories: ["Featured", "AI & Data", "Mobile Apps"],
    shortDescription: "An AI-powered mobile app that helps people with color vision deficiency understand and interact with colors through AI color detection with voice feedback, colorblind simulation, and an AI Color Vision Coach.",
    image: "/projects/chromify.png",
    featuredRank: 2,
    problem: "Individuals with color vision deficiency struggle to identify clothing hues, art palettes, and everyday color-coded information.",
    solution: "Engineered an AI mobile app combining real-time camera color detection, auditory voice feedback, colorblind simulation modes, and an interactive AI color coach.",
    features: [
      "Real-time AI camera color detection with voice narration",
      "Colorblindness vision simulation filters (Protanopia, Deuteranopia, Tritanopia)",
      "Interactive AI Color Vision Coach for wardrobe and palette suggestions",
      "High-contrast accessible mobile UI"
    ],
    technologies: ["React Native", "Expo", "AI Vision API", "Voice Synthesis", "Tailwind CSS"],
    role: "Mobile App & AI Developer",
    impact: "Empowers users with colorblindness to confidently identify and organize colors in daily life.",
    links: {
      liveDemo: "",
      github: "https://github.com/inkevine/chromify_front.git",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "jetopinion",
    title: "JetOpinion",
    subtitle: "Airline Passenger Review Analytics Platform",
    categories: ["Featured", "AI & Data", "Backend", "Frontend"],
    shortDescription: "A web-based data analysis project that uses airline passenger reviews to rank airlines based on safety and service quality. It cleans and analyzes review data, creates visualizations, identifies trends, and provides an interactive dashboard for comparing airlines.",
    image: "/projects/jetopinion.png",
    featuredRank: 3,
    problem: "Travelers and aviation analysts lack structured comparative sentiment data from thousands of online airline passenger reviews.",
    solution: "Engineered a full-stack NLP data analysis pipeline that cleans raw passenger feedback, extracts sentiment scores across service aspect categories, and renders interactive comparative heatmaps.",
    features: [
      "Aspect-based sentiment analysis pipeline",
      "Airline safety & service quality ranking index",
      "Interactive airline comparison charts and visualizations",
      "Filtered trends by route, rating, and review date"
    ],
    technologies: ["Python", "Pandas", "Scikit-Learn", "React", "FastAPI", "Tailwind CSS"],
    role: "Data Engineer & Full-Stack Developer",
    impact: "Transformed unstructured passenger text feedback into actionable comparative airline quality metrics.",
    links: {
      liveDemo: "https://jet-opinion.onrender.com/",
      github: "https://github.com/inkevine/Jetop_front",
      githubBackend: "https://github.com/inkevine/Jetop_back",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "talkforward",
    title: "TalkForward",
    subtitle: "Youth Advocacy & Anonymous Sentiment Platform",
    categories: ["Featured", "Social Impact", "Frontend"],
    shortDescription: "A youth-focused platform where young people can anonymously share issues they care about, identify the most frequently raised concerns, and turn them into focused awareness and advocacy campaigns.",
    image: "/projects/talkforward.png",
    featuredRank: 4,
    problem: "Youth lack safe, anonymous platforms to express systemic community challenges and organize collective advocacy.",
    solution: "Created a privacy-first web advocacy application that encrypts survey submissions, aggregates top community topics, and equips youth with campaign toolkits.",
    features: [
      "Anonymous survey engine with privacy protection",
      "Live community issue trend leaderboard",
      "Awareness campaign generator with downloadable resources",
      "Data visualization of aggregated community concerns"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    role: "Lead Developer & Advocate",
    impact: "Elevated youth voices into quantitative insights used for community advocacy and awareness campaigns.",
    links: {
      liveDemo: "https://talkforward.vercel.app/",
      github: "https://github.com/inkevine",
      figma: "",
      caseStudy: ""
    }
  },
  {
  id: "billing",
  title: "Utility Billing Management System",
  subtitle: "Automated Invoice Generation & Payment Tracking Platform",
  categories: ["Backend"],
  shortDescription:
    "A software application designed to streamline billing operations through invoice generation, payment tracking, and customer account management.",
  image: "/projects/billing.jpeg",
  featuredRank: 5,
  problem:
    "Manual billing processes can lead to invoicing errors, delayed payments, inaccurate billing records, and difficulties tracking outstanding balances.",
  solution:
    "Developed a billing management system to organize customer billing records, generate invoices, track payment statuses, and manage outstanding balances.",
  features: [
    "Automated invoice generation and billing calculations",
    "Customer billing records management",
    "Payment tracking and status updates",
    "Outstanding balance and payment history tracking"
  ],
  technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
  role: "Software Engineer",
  impact:
    "Improved billing record organization and simplified invoice management and payment tracking.",
  links: {
    liveDemo: "",
    github: "https://github.com/inkevine/java_neeubs",
    figma: "",
    caseStudy: ""
  }
},
  {
    id: "echomirror",
    title: "EchoMirror",
    subtitle: "AI Communication Assistant & Design System",
    categories: ["Featured", "UI/UX & Design", "AI & Data"],
    shortDescription: "An AI-powered communication assistant that studies human communication patterns and generates personalized text responses, with an intuitive interface designed to make AI-assisted communication simple and efficient.",
    image: "/projects/echomirror.png",
    problem: "AI text generators often feel robotic and lack intuitive interfaces tailored for natural communication flows.",
    solution: "Designed a human-centered UI/UX system and communication assistant that analyzes tone patterns to generate natural personalized responses.",
    features: [
      "Figma design system and UI prototype",
      "Tone pattern analysis & text generation model",
      "Intuitive response suggestion interface",
      "Dark glassmorphism aesthetic component library"
    ],
    technologies: ["Figma", "UI/UX Design", "Prototyping", "NLP AI"],
    role: "UI/UX Designer & Developer",
    impact: "Crafted a seamless design architecture for AI-assisted human messaging.",
    links: {
      liveDemo: "",
      github: "",
      figma: "https://www.figma.com/design/T2BhHInO69AAl5LZqMWCRH/EchoMirror?node-id=0-1&t=GsNruSS2TvFWCF9d-1",
      caseStudy: ""
    }
  },
  {
    id: "vintapic",
    title: "Vintapic",
    subtitle: "Interactive Online Photobooth Experience",
    categories: ["Frontend", "Fun / Experimental"],
    shortDescription: "An interactive online photobooth that lets users capture, customize, and create fun digital photos through a creative and playful experience.",
    image: "/projects/vintapic.png",
    problem: "Online photo sharing often lacks playful interactive photobooth strip customization.",
    solution: "Built a responsive web application allowing users to take instant camera snapshots, apply vintage filters, customize photo strip borders, and download digital keepsakes.",
    features: [
      "Webcam photobooth snapshot capture countdown",
      "Custom vintage photo strip filters & stickers",
      "Instant digital photo download & sharing",
      "Playful interactive canvas controls"
    ],
    technologies: ["React", "HTML5 Canvas", "Vite", "Tailwind CSS"],
    role: "Frontend Developer",
    impact: "Delivered a fun, creative photobooth experience accessed directly in browser.",
    links: {
      liveDemo: "https://vinta-pic.vercel.app/",
      github: "https://github.com/inkevine",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "masizi-app",
    title: "Masizi App",
    subtitle: "Community Leadership & Resident Communication Platform",
    categories: ["Mobile Apps", "Social Impact"],
    shortDescription: "A community-focused application that connects residents with local leaders and one another, providing a central platform for communication, local news, and important announcements.",
    image: "/projects/masizi.png",
    problem: "Local neighborhood residents face fragmented channels for receiving official local news and contacting community leaders.",
    solution: "Developed a cross-platform mobile app unifying local announcements, resident leader messaging, and neighborhood noticeboards.",
    features: [
      "Centralized community news & announcement feed",
      "Direct resident-to-leader message board",
      "Neighborhood event alerts and push notifications",
      "Localized category topic discussions"
    ],
    technologies: ["React Native", "Expo", "Firebase", "Tailwind CSS"],
    role: "Mobile App Engineer",
    impact: "Strengthened civic engagement and communication between residents and local leaders.",
    links: {
      liveDemo: "https://masiz-app.onrender.com/",
      github: "https://github.com/inkevine/masizi_app.git",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "royalclinic",
    title: "Healthcare Clinic Management Platform",
    subtitle: "Patient Portal & Staff Access Platform",
    categories: ["Frontend", "Backend"],
    shortDescription: "A clinic website and staff access portal where patients can submit inquiries and requests, while staff can securely manage messages, bookings, and appointments.",
    image: "/projects/jetopinion.png",
    problem: "Healthcare clinics need a streamlined digital portal for patient appointment requests and secure internal staff booking management.",
    solution: "Engineered a production clinic platform featuring a public patient inquiry interface and an authenticated staff portal for scheduling and patient messages.",
    features: [
      "Public patient appointment inquiry submission",
      "Staff authentication portal for booking triage",
      "Patient message & medical record request manager",
      "Responsive healthcare clinic presentation site"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    role: "Full-Stack Software Engineer",
    impact: "Streamlined patient booking intake for Royal Clinic staff.",
    links: {
      liveDemo: "https://royalclinic.rw/",
      github: "https://github.com/inkevine",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "faithnotes",
    title: "FaithNotes",
    subtitle: "Browser Verse Saver & Classification Extension",
    categories: ["Frontend", "Fun / Experimental"],
    shortDescription: "A Chrome Extension that lets you save, organize, and revisit your favorite verses instantly while browsing, with automatic classification into respective tags and categories.",
    image: "/projects/faith_n.png",
    problem: "Browsing inspiration or study text online is easily lost without quick browser-level bookmarking and tagging.",
    solution: "Created a lightweight Chrome browser extension allowing one-click text highlighted saving, tag assignment, and searchable library management.",
    features: [
      "Instant one-click text selection verse saver",
      "Tag classification & category organization",
      "Searchable popup verse library with quick copy",
      "Browser local storage sync"
    ],
    technologies: ["JavaScript", "Chrome Extension API", "HTML/CSS"],
    role: "Developer",
    impact: "Delivered seamless browser-level verse organization and category tagging.",
    links: {
      liveDemo: "",
      github: "https://github.com/inkevine",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "facelocking",
    title: "FaceLocking",
    subtitle: "Facial Recognition & Behavior Tracking System",
    categories: ["AI & Data", "Backend"],
    shortDescription: "A security and behavior-tracking system built on top of facial recognition for automated identity verification, attendance logging, and behavior monitoring.",
    image: "/projects/face_lock.jpeg",
    problem: "Security surveillance systems often lack automated behavioral analytics linked with facial identification.",
    solution: "Built a Python computer vision pipeline that performs facial recognition and overlays behavioral event tracking for security monitoring.",
    features: [
      "Real-time facial detection and recognition model",
      "Automated identity attendance logging",
      "Behavioral movement tracking pipeline",
      "Security alert trigger thresholds"
    ],
    technologies: ["Python", "OpenCV", "Face Recognition", "Deep Learning"],
    role: "AI & Backend Engineer",
    impact: "Integrated behavioral tracking intelligence on top of facial identification.",
    links: {
      liveDemo: "",
      github: "https://github.com/inkevine/FaceLocking",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "hotelms",
    title: "Hotel Management System",
    subtitle: "Hospitality Reservation & Operations Platform",
    categories: ["Backend"],
    shortDescription: "A full-stack hotel management system for handling room reservations, guest billing, housekeeping status, and staff administration.",
    image: "/projects/hotelms.jpeg",
    problem: "Hotel operators require a centralized system to coordinate room bookings, guest billing, and daily staff tasks.",
    solution: "Developed an end-to-end hotel operations software managing room availability calendars, invoice billing, and staff task assignment.",
    features: [
      "Interactive room availability calendar",
      "Guest check-in/check-out billing manager",
      "Housekeeping status tracker",
      "Revenue report export"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
    role: "Software Engineer",
    impact: "Automated hotel booking workflows and administrative billing.",
    links: {
      liveDemo: "",
      github: "https://github.com/inkevine/HotelMS",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "carparking",
    title: "Car Parking Management System",
    subtitle: "RESTful Parking Spot & Billing API",
    categories: ["Backend", "Frontend"],
    shortDescription: "A RESTful API-driven parking system for managing parking spot availability, entry/exit timestamping, and automated tariff billing.",
    image: "/projects/car_park.jpeg",
    problem: "Parking facilities need automated spot tracking and accurate duration-based tariff computation APIs.",
    solution: "Engineered a modular RESTful backend system tracking vehicle entries, spot allocation, and dynamic tariff calculation.",
    features: [
      "RESTful API spot allocation endpoints",
      "Automated parking duration & tariff computer",
      "Vehicle entry/exit timestamp logging",
      "Parking capacity dashboard API"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL"],
    role: "Backend Software Engineer",
    impact: "Provided robust API endpoints for automated parking operations.",
    links: {
      liveDemo: "",
      github: "https://github.com/inkevine/restful_car_parking_csr",
      figma: "",
      caseStudy: ""
    }
  },
  {
    id: "payroll",
    title: "Payroll Management System",
    subtitle: "Automated Salary Processing & Payslip Platform",
    categories: ["Backend"],
    shortDescription: "A software application designed to automate employee salary processing, tax deductions, allowance calculations, and payslip generation.",
    image: "/projects/payroll.jpeg",
    problem: "Manual payroll calculation is prone to calculation errors in tax brackets, deductions, and payslip processing.",
    solution: "Built a full-stack payroll system that automates gross-to-net salary math, tax withholdings, and downloadable PDF payslips.",
    features: [
      "Automated gross & net salary calculation",
      "Tax bracket & statutory deduction engine",
      "Downloadable PDF payslip generator",
      "Employee department payroll management"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
    role: "Software Engineer",
    impact: "Streamlined monthly payroll computations and payslip generation.",
    links: {
      liveDemo: "",
      github: "https://github.com/inkevine/Payroll_ms",
      figma: "",
      caseStudy: ""
    }
  }
];

export const focusAreas = [
  {
    icon: "Code",
    title: "Practical Technology",
    description: "Building scalable web and software applications that solve real operational bottlenecks.",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "group-hover:border-blue-500/50",
    accentColor: "text-blue-400"
  },
  {
    icon: "BrainCircuit",
    title: "AI & Data Science",
    description: "Extracting meaningful sentiment, trends, colorvision intelligence, and predictive models from data.",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50",
    accentColor: "text-purple-400"
  },
  {
    icon: "Smartphone",
    title: "Mobile Development",
    description: "Engineering fluid cross-platform mobile apps for iOS and Android with intuitive user flows.",
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "group-hover:border-cyan-500/50",
    accentColor: "text-cyan-400"
  },
  {
    icon: "Cpu",
    title: "IoT & Embedded",
    description: "Connecting physical sensors, microcontrollers, and micro-misting aeroponics hardware with cloud control.",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "group-hover:border-emerald-500/50",
    accentColor: "text-emerald-400"
  },
  {
    icon: "Palette",
    title: "UI/UX & Visual Design",
    description: "Crafting modern Figma design systems, visual hierarchy, and human-centric interfaces like EchoMirror.",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "group-hover:border-amber-500/50",
    accentColor: "text-amber-400"
  },
  {
    icon: "HeartHandshake",
    title: "Tech for Social Impact",
    description: "Empowering youth advocacy, community leadership (Masizi App), and health clinic portals.",
    color: "from-rose-500/20 to-red-500/20",
    borderColor: "group-hover:border-rose-500/50",
    accentColor: "text-rose-400"
  }
];

export const skillsGrouped = [
  {
    category: "Software Engineering",
    icon: "Code2",
    description: "Full-stack web architecture, backend APIs, and modern frontend frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "Python", "Django", "Java", "Spring Boot", "REST APIs", "C++"]
  },
  {
    category: "Mobile Development",
    icon: "Smartphone",
    description: "Cross-platform mobile application development",
    skills: ["React Native", "Expo", "AsyncStorage", "Mobile UI", "Cross-Platform"]
  },
  {
    category: "Data & Artificial Intelligence",
    icon: "Sparkles",
    description: "Data analytics, machine learning pipelines, and computer vision",
    skills: ["Python", "Data Analysis", "Pandas", "Scikit-Learn", "Face Recognition", "OpenCV", "NLP", "Color Vision AI"]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    description: "Relational, document databases, and backend storage solutions",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Git / GitHub", "Docker"]
  },
  {
    category: "IoT & Embedded Systems",
    icon: "Zap",
    description: "Hardware integration, microcontrollers, and sensor automation",
    skills: ["Arduino", "NodeMCU", "Sensors Telemetry", "Aeroponics Automation", "Hardware / IoT Protocols"]
  },
  {
    category: "UI/UX & Visual Design",
    icon: "Layout",
    description: "User research, Figma component systems, and visual interactive design",
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Accessibility (WCAG)"]
  },
  {
    category: "Cybersecurity & Certificates",
    icon: "ShieldCheck",
    description: "Security auditing training and hands-on cryptographic fundamentals",
    skills: ["Cyberium Security Training", "Network Security Fundamentals", "Encryption Protocols", "Security Auditing"]
  }
];
