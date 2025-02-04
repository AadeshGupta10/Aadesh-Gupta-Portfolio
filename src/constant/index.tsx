import Home from "@/components/Home"
import Skills from "@/components/Skills"
import Qualification from "@/components/Qualification"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Certificates from "@/components/Certificates"
// import Testimonial from "@/components/Testimonials"
// import Contact from "@/components/Contact"
import StackIcon from "tech-stack-icons"

export const components = [
    {
        label: "Home",
        path: "",
        component: <Home />
    },
    {
        label: "Skills",
        path: "skills",
        component: <Skills />
    },
    {
        label: "Qualification",
        path: "qualification",
        component: <Qualification />
    },
    {
        label: "Experience",
        path: "experience",
        component: <Experience />
    },
    {
        label: "Projects",
        path: "projects",
        component: <Projects />
    },
    {
        label: "Certificates",
        path: "certificates",
        component: <Certificates />
    },
    // {
    //     label: "Testimonial",
    //     path: "testimonial",
    //     component: <Testimonial />
    // },
    // {
    //     label: "Contact",
    //     path: "contact",
    //     component: <Contact />
    // },
]

export const tags = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Next.js Developer"
];

export const skillset = [
    {
        title: "Front-End Development Skills",
        data: [
            {
                label: "HTML",
                type: "Markup Language",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                image: <StackIcon name="html5" />
            },
            {
                label: "XML",
                type: "Markup Language",
                link: "https://www.w3.org/XML/",
                image: "skills/xml.png"
            },
            {
                label: "CSS",
                type: "Style Sheet Language",
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                image: <StackIcon name="css3" />
            },
            {
                label: "JavaScript",
                type: "Programming Language",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                image: <StackIcon name="js" />
            },
            {
                label: "Jquery",
                type: "JavaScript Library",
                link: "https://jquery.com/",
                image: <StackIcon name="jquery" />
            },
            {
                label: "TypeScript",
                type: "Programming Language",
                link: "https://www.typescriptlang.org/",
                image: <StackIcon name="typescript" />
            },
            {
                label: "React",
                type: "JavaScript Library",
                link: "https://react.dev/",
                image: <StackIcon name="reactjs" />
            },
            {
                label: "Next.js",
                type: "React Framework",
                link: "https://nextjs.org/",
                image: <StackIcon name="nextjs" />
            },
            {
                label: "Redux",
                type: "State Management Library",
                link: "https://redux.js.org/",
                image: <StackIcon name="redux" />
            },
            // {
            //     label: "Zustand",
            //     type: "State Management Library",
            //     link: "https://zustand-demo.pmnd.rs/",
            //     image: "skills/zustand.png"
            // },
            {
                label: "Tanstack Query",
                type: "Data Fetching and State Management Library",
                link: "https://tanstack.com/query/latest",
                image: "skills/tanstack_query.png"
            },
            {
                label: "React Hook Form",
                type: "Form Management Library",
                link: "https://react-hook-form.com/",
                image: "skills/react_hook_form.png"
            },
        ]
    },
    {
        title: "UI Libraries",
        data: [
            {
                label: "Shadcn/ui",
                type: "UI Component Library",
                link: "https://shadcn.dev/",
                image: <StackIcon name="shadcnui" />
            },
            {
                label: "Material UI",
                type: "UI Component Library",
                link: "https://mui.com/",
                image: <StackIcon name="materialui" />
            },
            {
                label: "Ant Design",
                type: "UI Component Library",
                link: "https://ant.design/",
                image: <StackIcon name="antd" />
            },
            {
                label: "Tailwind CSS",
                type: "CSS Framework",
                link: "https://tailwindcss.com/",
                image: <StackIcon name="tailwindcss" />
            },
            {
                label: "Bootstrap",
                type: "CSS Framework",
                link: "https://getbootstrap.com/",
                image: <StackIcon name="bootstrap5" />
            },
            {
                label: "Sass",
                type: "CSS Preprocessor",
                link: "https://sass-lang.com/",
                image: <StackIcon name="sass" />
            },
        ],
    },
    {
        title: "Back-End Development Skills",
        data: [
            {
                label: "Node.js",
                type: "JavaScript Runtime",
                link: "https://nodejs.org/",
                image: <StackIcon name="nodejs" />
            },
            {
                label: "Express",
                type: "Web Framework",
                link: "https://expressjs.com/",
                image: "skills/express_js.png"
            },
            {
                label: "REST API",
                type: "API Architecture",
                link: "https://restfulapi.net/",
                image: "skills/rest_api.png"
            },
            {
                label: "JSON Web Token",
                type: "Authentication Standard",
                link: "https://jwt.io/",
                image: "skills/json_web_token.png"
            },
            {
                label: "Multi-Factor Authentication",
                type: "Security Mechanism",
                link: "https://en.wikipedia.org/wiki/Multi-factor_authentication",
                image: "skills/mfa.png"
            },
            {
                label: "Auth0",
                type: "Identity & Access Platform",
                link: "https://auth0.com/",
                image: <StackIcon name="auth0" />
            },
        ]
    },
    {
        title: "Database Skills",
        data: [
            {
                label: "MongoDB",
                type: "NoSQL Database",
                link: "https://www.mongodb.com/",
                image: <StackIcon name="mongodb" />
            },
            {
                label: "Mongoose",
                type: "MongoDB ODM Library",
                link: "https://mongoosejs.com/",
                image: "skills/mongoose.webp"
            },
            {
                label: "MySQL",
                type: "Relational Database",
                link: "https://www.mysql.com/",
                image: <StackIcon name="mysql" />
            },
            // {
            //     label: "PostgreSQL",
            //     type: "Relational Database",
            //     link: "https://www.postgresql.org/",
            //     image: <StackIcon name="postgresql" />
            // }
        ]
    },
    {
        title: "DevOps and Tools",
        data: [
            {
                label: "Git",
                type: "Version Control System",
                link: "https://git-scm.com/",
                image: <StackIcon name="git" />
            },
            {
                label: "GitHub",
                type: "Code Hosting Platform",
                link: "https://github.com/",
                image: <StackIcon name="github" />
            },
            {
                label: "Vercel",
                type: "Hosting Platform",
                link: "https://vercel.com/",
                image: "skills/vercel.png"
            },
            {
                label: "Postman",
                type: "API Testing Tool",
                link: "https://www.postman.com/",
                image: <StackIcon name="postman" />
            }
        ]
    },
    {
        title: "Programming Languages",
        data: [
            {
                label: "Python",
                type: "Programming Language",
                link: "https://www.python.org/",
                image: <StackIcon name="python" />
            },
            {
                label: "Java",
                type: "Programming Language",
                link: "https://www.java.com/",
                image: <StackIcon name="java" />
            },
            {
                label: "PHP",
                type: "Scripting Language",
                link: "https://www.php.net/",
                image: <StackIcon name="php" />
            }
        ]
    },
    {
        title: "AI Tools",
        data: [
            {
                label: "ChatGPT",
                type: "AI Chatbot",
                link: "https://chat.openai.com/",
                image: "skills/chatgpt.avif"
            },
            {
                label: "Gemini",
                type: "Browser for Low-Bandwidth Internet",
                link: "https://gemini.circumlunar.space/",
                image: "skills/gemini.png"
            }
        ]
    },
    {
        title: "Core Competencies",
        data: [
            {
                label: "Analytical Skills",
                type: "",
                image: "skills/analytics.png"
            },
            {
                label: "Logical Reasoning",
                type: "",
                image: "skills/logical_reasoning.png"
            },
            {
                label: "Problem Solving",
                type: "",
                image: "skills/problem_solving.png"
            },
            {
                label: "Critical Thinking",
                type: "",
                image: "skills/critical_thinking.png"
            },
            {
                label: "Adaptability",
                type: "",
                image: "skills/adaptability.jpg"
            },
            {
                label: "Design and Development",
                type: "",
                image: "skills/design_and_development.png"
            },
        ]
    },
    // {
    //     title: "",
    //     data: []
    // },
]

export const qualifications = [

    //Feed Data in Sequential Order in respect to Year and Months

    {
        image: "education_and_experience/sjic.png",
        period: "Mar 2017 - May 2018",
        course_role: "ICSE (X), Science with Computer Applications",
        school_university_company: "St. Joseph Montessori School",
        grade: "81.40%"
    },
    {
        image: "education_and_experience/sjic",
        period: "Mar 2019 - July 2020",
        course_role: "ISC (XII), Science with Computer Science",
        school_university_company: "St. Joseph Montessori School",
        grade: "91.50%"
    },
    {
        image: "education_and_experience/npgc",
        period: "Oct 2021 - May 2024",
        course_role: "Bachelor of Vocational Software Development and E-governance",
        school_university_company: "National P.G. College (University of Lucknow)",
        grade: "8.20 CGPA"
    }
]

export const experiences = [

    //Feed Data in Sequential Order in respect to Year and Months

    {
        image: "education_and_experience/quaere",
        period: "Jun 2023 - Aug 2023",
        course_role: "PHP Internship",
        school_university_company: "Quaere E-technologies Pvt. Ltd. (CMMI Level 3)",
        description: `Full-stack developer with experience in building web applications using HTML, CSS, JavaScript, jQuery, PHP, and Bootstrap. Successfully developed a "Library Management System" with features for admin to manage publishers, authors, books, and track students. Also contributed to a "Kanpur Smart City" project as a Quality Analyst, focusing on user interface evaluation and data flow process assessment.`,
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "Bootstrap"],
    },
    {
        image: "education_and_experience/softice",
        period: "Jan 2024 - Apr 2024",
        course_role: "MERN Stack Internship",
        school_university_company: "Softice Technologies Pvt. Ltd.",
        description: `As a Web Developer at Softice Technologies, I honed my full-stack development skills, including frontend and backend development. I independently developed a comprehensive Note-taking application, "Notely," from inception to deployment. This project involved designing the system architecture, implementing all application logic and user interface, and ensuring robust authentication and secure routing. This experience significantly enhanced my abilities in system design, testing, and deployment.`,
        skills: ["React", "Node.js", "Express", "MongoDB"],
    },
]

export const projects = [
    {
        image: "projects/trimrr.jpg",
        label: "Trimrr",
        description: "A sleek and efficient URL shortener app built with modern web technologies. It allows users to shorten long URLs, manage them easily, and access them instantly.",
        live_link: "https://aadesh-trimrr.vercel.app/9kgcc5",
        github_link: "https://aadesh-trimrr.vercel.app/eq1xn9"
    },
    {
        image: "projects/notely.jpg",
        label: "Notely",
        description: "It is a minimalist note-taking web app built with React, allowing users to create, edit, and delete notes seamlessly. Designed for simplicity and productivity, it demonstrates clean UI design and efficient state management.",
        live_link: "https://aadesh-trimrr.vercel.app/wdwb0h",
        github_link: "https://aadesh-trimrr.vercel.app/8cp9yd"
    },
    {
        image: "projects/klimate.jpg",
        label: "Klimate",
        description: "A sleek and user-friendly weather app built with React, providing real-time weather updates for any city worldwide. It fetches accurate weather data using OpenWeatherMap API and features a responsive design for seamless use across devices.",
        live_link: "https://aadesh-trimrr.vercel.app/surn7i",
        github_link: "https://aadesh-trimrr.vercel.app/ca1fd5"
    },
    {
        image: "projects/cineck.jpg",
        label: "Cineck",
        description: "A sleek and fast movie search web app that fetches real-time data from an API, allowing users to discover movies by title, view details like ratings, release date, and synopsis, and explore trending films effortlessly.",
        live_link: "https://aadesh-trimrr.vercel.app/kda7ek",
        github_link: "https://aadesh-trimrr.vercel.app/l5z99e"
    },
    {
        image: "projects/virtualR.jpg",
        label: "VirtualR - A Modern Website Landing Page",
        description: "Developed a visually appealing and responsive landing page using React and modern web technologies. The design emphasizes a clean, user-friendly layout with smooth navigation, showcasing proficiency in front-end development and UI/UX design.",
        live_link: "https://aadesh-trimrr.vercel.app/k08o77",
        github_link: "https://aadesh-trimrr.vercel.app/ok5qn4"
    },
    {
        image: "projects/numbo.jpg",
        label: "Numbo",
        description: "A fun and interactive memory game where players arrange numbers in the correct order on a dynamic grid. The grid size and challenge scale with the number of tiles, and the blank space adds an extra layer of difficulty. Built with a focus on logic and user engagement.",
        live_link: "https://aadesh-trimrr.vercel.app/45nwwt",
        github_link: "https://aadesh-trimrr.vercel.app/053h46"
    },
    {
        image: "projects/memoremo.jpg",
        label: "Memoremo",
        description: "A fun and interactive tile-matching game that challenges players' memory and logic. Built with a dynamic grid that adapts based on the input array.",
        live_link: "https://aadesh-trimrr.vercel.app/ga3yoa",
        github_link: "https://aadesh-trimrr.vercel.app/j2zy8u"
    },
    {
        image: "projects/curiosity_corner.jpg",
        label: "The Curiosity Corner",
        description: "An interactive quiz platform offering diverse sections to challenge and expand your knowledge. Designed for a fun and engaging learning experience.",
        live_link: "https://aadesh-trimrr.vercel.app/01wlgu",
        github_link: "https://aadesh-trimrr.vercel.app/2y9v0c"
    },
    {
        image: "projects/password_generator.jpg",
        label: "Password Generator",
        description: "A web-based application to generate secure and customizable passwords. Users can adjust parameters such as length, inclusion of uppercase letters, lowercase letters, numbers, and special characters, ensuring strong and personalized passwords for enhanced security.",
        live_link: "https://aadesh-trimrr.vercel.app/vdsm9d",
        github_link: "https://aadesh-trimrr.vercel.app/yhiorh"
    },
    // {
    //     image: "projects/",
    //     label: "",
    //     description: "",
    //     live_link: "",
    //     github_link: ""
    // },
]

export const certificates = [
    {
        image: "certificates/node.js.jpg",
        name: "Node_js Certificate : By Scaler Topics"
    },
    {
        image: "certificates/postman_api_fundamentals.png",
        name: "Postman API Fundamentals Student Expert Badge"
    },
    {
        image: "certificates/react.js.jpg",
        name: "React_js Certificate : By Scaler Topics"
    },
    {
        image: "certificates/sql_for_beginner.jpg",
        name: "SQL for Beginner Certificate : By Scaler Topics"
    },
    {
        image: "certificates/sql_vs_nosql.jpg",
        name: "SQL vs NoSQL Certificate : By Scaler Topics"
    },
    {
        image: "certificates/sql_for_intermediate.jpg",
        name: "SQL for Intermediate Certificate : By SoloLearn"
    },
    {
        image: "certificates/introduction_to_html.jpg",
        name: "Introduction to HTML Certificate : By SoloLearn"
    },
    {
        image: "certificates/introduction_to_javascript.jpg",
        name: "Introduction to JavaScript Certificate : By SoloLearn"
    },
    {
        image: "certificates/php.jpg",
        name: "Php Certificate : By SoloLearn"
    },
    {
        image: "certificates/introduction_to_sql.jpg",
        name: "Introduction to SQL Certificate : By SoloLearn"
    },
    {
        image: "certificates/java.jpg",
        name: "Java Certificate : By SoloLearn"
    },
    {
        image: "certificates/essential_of_html_and_css.jpg",
        name: "HTML & CSS Essentials Bootcamp Certificate : By LetsUpgrade"
    },
    {
        image: "certificates/frontend_development_HTML.jpg",
        name: "Introduction to Frontend Development : By Great Learning"
    },
    {
        image: "certificates/python_core.jpg",
        name: "Python Core Certificate : By SoloLearn"
    },
    {
        image: "certificates/essential_of_javascript.jpg",
        name: "Essential of JavaScript Certificate : By LetsUpgrade"
    },
    {
        image: "certificates/essential_of_python.jpg",
        name: "Essential of Python Certificate : By LetsUpgrade"
    },
    // {
    //     image: "certificates/",
    //     name: ""
    // },
]

export const testimonials = [
    {
        image: "testimonials/",
        name: "",
        designation: "",
        affiliation: "",
        description: "",
        rating: ""
    }
]