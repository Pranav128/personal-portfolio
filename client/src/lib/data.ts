export const personalInfo = {
  name: "Pranav Pisal",
  title: "Computer Engineer",
  roles: ["Java Developer", "Full-Stack Developer", "Problem Solver", "Backend Developer"],
  description: "Computer Engineer with expertise in Java development, full-stack solutions, and problem-solving. Passionate about creating innovative software solutions that exceed expectations.",
  email: "pranavpisal2528@gmail.com",
  phone: "+91 9139966859",
  location: "Pune, Maharashtra, India",
  birthday: "January 28, 2002",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
  aboutImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/pranav-pisal-06a4271b7/",
    github: "https://github.com/Pranav128",
    leetcode: "https://leetcode.com/u/pranavpisal2528/",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/pranavpisal2528/",
    whatsapp: "https://wa.me/919139966859",
    instagram: "https://www.instagram.com/_pranav_p.exe/"
  }
};

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 80 }
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Spring Boot", level: 88 },
      { name: "Angular", level: 82 },
      { name: "Hibernate", level: 75 }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "PostgreSQL", level: 70 }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 65 }
    ]
  },
  {
    category: "Design & Frontend",
    items: [
      { name: "HTML/CSS", level: 92 },
      { name: "Bootstrap", level: 88 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    category: "Problem Solving",
    items: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 80 },
      { name: "System Design", level: 75 }
    ]
  }
];

export const projects = [
  {
    title: "Eazy School Web Application",
    description: "A robust, secured and role-based online school platform with comprehensive features for course management, enrollment, and communication.",
    technologies: ["Java 8", "Spring Framework", "Thymeleaf", "CSS3"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Reduced development time by 30% through optimized code",
      "Increased user engagement by 25% through improved UX",
      "Enhanced data accuracy with automated testing",
      "Achieved 20% reduction in support queries"
    ]
  },
  {
    title: "E-commerce Website",
    description: "Dynamic and user-friendly e-commerce platform with secure payment processing, user authentication, and comprehensive shopping features.",
    technologies: ["Spring Boot", "Angular", "MySQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Improved security with JWT and OAuth 2.0",
      "Integrated Stripe for 20% increase in successful transactions",
      "Boosted customer satisfaction by 30%",
      "Increased website traffic by 15% through SEO"
    ]
  },
  {
    title: "Task Manager Application",
    description: "Modern task management system with real-time collaboration, priority tracking, and intuitive drag-and-drop interface for enhanced productivity.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Real-time collaboration with team members",
      "Drag-and-drop task management interface",
      "Priority tracking and deadline notifications",
      "Advanced filtering and search capabilities"
    ]
  },
  {
    title: "Personal Expense Tracker",
    description: "Comprehensive expense tracking application with budget planning, category management, and detailed financial analytics for better money management.",
    technologies: ["React Native", "Firebase", "Chart.js", "Redux"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Smart budget planning and alerts",
      "Category-wise expense categorization",
      "Interactive charts and financial reports",
      "Cloud sync across multiple devices"
    ]
  },
  {
    title: "Bank Management System",
    description: "Secure banking application with account management, transaction processing, and comprehensive reporting for efficient financial operations.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    features: [
      "Multi-layered security with encryption",
      "Real-time transaction processing",
      "Comprehensive audit trail and reporting",
      "Role-based access control system"
    ]
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
    ]
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
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "5+" },
  { label: "CGPA", value: "8.57" },
  { label: "Certifications", value: "4+" }
];
