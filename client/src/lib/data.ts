export const personalInfo = {
  name: "Pranav Pisal",
  title: "Computer Engineer",
  roles: ["Java Developer", "Full-Stack Developer", "Problem Solver", "Backend Developer"],
  description: "Computer Engineer with expertise in Java development, full-stack solutions, and problem-solving. Passionate about creating innovative software solutions that exceed expectations.",
  email: "pranavpisal2528@gmail.com",
  phone: "+91 9139966859",
  location: "Pune, Maharashtra, India",
  birthday: "January 28, 2002",
  profileImage: "https://i.postimg.cc/VN13GKtF/mypic.jpg",
  aboutImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  aboutImage2: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/pranav-pisal-06a4271b7/",
    github: "https://github.com/Pranav128",
    leetcode: "https://leetcode.com/u/pranavpisal2528/",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/pranavpisal2528/",
    whatsapp: "https://wa.me/919139966859",
    instagram: "https://www.instagram.com/_pranav_p.exe/",
    medium: "https://medium.com/@pranavpisal2528",
    mail: "mailto:pranavpisal2528@gmail.com"
  }
};

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 70 }
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Spring Boot", level: 88 },
      { name: "Angular", level: 80 },
      { name: "Hibernate/JPA", level: 85 },
      { name: "Node.js", level: 70}
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 60 }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 50 },
      { name: "Kubernetes", level: 40 },
      { name: "CI/CD", level: 70 }
    ]
  },
  {
    category: "Design & Frontend",
    items: [
      { name: "HTML/CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "React", level: 65 },
      { name: "Thymeleaf", level: 75 }
    ]
  },
  {
    category: "Problem Solving",
    items: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 80 },
      { name: "System Design", level: 75 },
      { name: "OOP Concepts", level: 90 },
      { name: "Design Patterns", level: 70 }
    ]
  }
];

export const projects = [
  {
    title: "Personal Expense Tracker",
  description: "Comprehensive expense tracking application with category management, and detailed financial analytics for better money management and to help you effortlessly track your daily expenses.",
    technologies: ["Next.js" ,"React.js", "MongoDB", "Chart.js", "Redux", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Smart budget planning and alerts",
      "Category-wise expense categorization",
      "Interactive charts and financial reports",
      "Secure user authentication and data encryption",
      "Export data to CSV and PDF formats"
    ],
    liveUrl: "https://expense-tracker-eight-flax.vercel.app/",
    githubUrl: "https://github.com/Pranav128/expensezen"
  },
  {
    title: "Taskmaster: Task Management System",
    description: "Modern task management system with real-time collaboration, priority tracking, and intuitive drag-and-drop interface for enhanced productivity.",
    technologies: ["Spring Boot" ,"Angular", "MySQL","Socket.io", "TypeScript", "JWT"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Comprehensive analytics dashboard for task performance",
      "Priority tracking and email notifications for task updates",
      "Advanced filtering and search",
      "Role-based access control for team members",
      "Customizable task categories and labels"
    ],
    liveUrl: "https://taskmaster128.netlify.app/",
    githubUrl: "https://github.com/Pranav128/Task-management-system-backend"
  },
  {
    title: "Eazy School Web Application",
    description: "A robust, secured and role-based online school platform with comprehensive features for course management, enrollment, and communication.",
    technologies: ["Java 8", "Spring Framework", "Thymeleaf", "CSS3", "MySQL"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Operates as both a Model-View-Controller (MVC) web application and a RESTful API service",
      "Increased user engagement by 25% through improved UX",
      "Enhanced data accuracy with automated testing",
      "Achieved 20% reduction in support queries",
      "Role-based access control"
    ],
    liveUrl: "https://eazyschool-nh9f.onrender.com/",
    githubUrl: "https://github.com/Pranav128/eazy-school"
  },
  {
    title: "E-commerce Website",
    description: "Dynamic and user-friendly e-commerce platform with secure payment processing, user authentication, and comprehensive shopping features.",
    technologies: ["Spring Boot","JWT", "Angular", "TypeScript", "MySQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "User Authentication: Secure login and registration using Okta",
      "Improved security with JWT and OAuth 2.0",
      "Integrated Stripe for 20% increase in successful transactions",
      "Enhanced user experience with responsive design",
      "Optimized performance with lazy loading and caching"
    ],
    liveUrl: "https://ecommerce28.netlify.app/",
    githubUrl: "https://github.com/Pranav128/ecommerce_frontend"
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and achievements with a focus on user experience and performance.",
    technologies: ["HTML", "CSS", "JavaScript","php"],
    image:"https://images.unsplash.com/photo-1564798605859-a4ab4a561b2a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Dynamic content loading for improved performance",
      "Responsive design for all devices",
      "Interactive animations using Framer Motion",
      "Enhanced user engagement with smooth transitions",
      "Social media integration for wider reach",
      "Integrated contact form with email notifications",
    ],
    liveUrl: "https://pranav128.github.io/pranav_pisal_portfolio.github.io/",
    githubUrl: "https://github.com/Pranav128/pranav_pisal_portfolio.github.io"
  },
  {
    title: "Bank Management System",
    description: "Secure banking application with account management, transaction processing, and comprehensive reporting for efficient financial operations.",
    technologies: ["Java", "Spring Boot", "MySQL", "JSP","CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Multi-layered security with encryption",
      "User-friendly interface with responsive design",
      "Efficient customer support system",
      "Real-time transaction processing",
      "Automated account management and reporting",
      "Role-based access control system"
    ],
    githubUrl: "https://github.com/Pranav128/online_banking_webapp"
  },
  {
    title: "Sorting Visualizer",
    description: "Interactive app to visualize different sorting algorithms with real-time performance analysis, adjustable speed controls, and responsive design.",
    technologies: ["Angular", "TypeScript", "HTML/CSS", "Tailwind"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Multiple sorting algorithms visualization",
      "Interactive speed and array size controls",
      "Real-time performance analysis",
      "Responsive design for all devices"
    ],
    githubUrl: "https://github.com/Pranav128/sorting-visualizer"
  },
  {
    title: "Problem Solving on LeetCode and GeeksforGeeks",
    description: "Active participation in competitive programming on platforms like LeetCode and GeeksforGeeks.",
    technologies: ["LeetCode", "GeeksforGeeks", "Java"],
    image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Solved over 200 problems on LeetCode and GeeksforGeeks",
      "Focused on data structures, algorithms, and system design",
      "Participated in various coding contests and challenges"
    ],
    liveUrl: "https://leetcode.com/u/pranavpisal2528/",
    githubUrl: "https://github.com/Pranav128/Problem-Solving"    
  },
  {
    title: "Ecommerce Microservices",
    description: "A microservices-based application with secure payment processing, user authentication, and comprehensive shopping features.",
    technologies: ["Spring Boot", "JWT","MySQL","MongoDB","Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Microservices architecture for scalability and maintainability",
      "Integrated payment gateway for seamless transactions",   
      "Real-time inventory management"
    ],
    githubUrl: "https://github.com/Pranav128/ecommerce-microservices"
  }
];

export const experience = [
  {
    title: "Junior Intern - Java Developer",
    company: "MRND Lab Pvt. Ltd.",
    location: "Pune, Maharashtra",
    period: "February 2022 - April 2022",
    achievements: [
      "Conducted doubt sessions, addressing queries in Java, DSA, improving understanding by 30%",
      "Mentored teammates, resulting in 25% increase in coding efficiency",
      "Streamlined onboarding process, reducing training time by 20%",
      "Participated in code reviews improving code quality and reducing bugs by 10%"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    institution: "D YPatil College of Engineering, Ambi, Pune",
    period: "2019 - 2023",
    grade: "CGPA: 8.57",
    description: "Specialized in Software Engineering, Database Management, and Full-Stack Development with focus on modern technologies and problem-solving methodologies."
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science Stream",
    institution: "MRSV and Jr. College, Phaltan",
    period: "2017 - 2019",
    grade: "Percentage: 66.00%",
    description: "Focused on Mathematics, Physics, and Chemistry with strong analytical skills development."
  },
  {
    degree: "Secondary School Certificate",
    field: "Science & Mathematics",
    institution: "MRSV and Jr. College, Phaltan",
    period: "2015 - 2017",
    grade: "Percentage: 87.80%",
    description: "Strong foundation in Mathematics, Science, and English with excellent academic performance and leadership activities."
  }
];

export const certifications = [
  {
    title: "Java Certification",
    description: "Developed practical skills in Java programming",
    date: "January 2022",
    icon: "java"
  },
  {
    title: "Programming for Everybody",
    description: "Coursera - Fundamentals of Programming Languages",
    date: "June 2020",
    icon: "code"
  },
  {
    title: "INSIGNIA Robo-War",
    description: "Robot Combat Competition at COEP, Phaltan",
    date: "February 2017",
    icon: "trophy"
  },
  {
    title: "Google Cloud Facilitator",
    description: "Learned Google Cloud Technologies",
    date: "May 2020",
    icon: "cloud"
  }
];

export const achievements = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "8+" },
  { label: "CGPA", value: "8.57" },
  { label: "Certifications", value: "10+" }
];
