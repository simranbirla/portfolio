import { Icons } from "@/components/ui/Icon";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Simran Birla",
    avatarUrl: "/avatar.jpeg",
    initials: "",
    url: "https://simranbirla.netlify.app/",
    location: "Kalyan, Mumbai ,India",
    locationLink: "https://maps.app.goo.gl/7YgNCRYXREzb1Bcw5",
    description:
        "Full-Stack Developer with 3+ years of experience specializing in Javascript techstack. Proven ability to build scalable web solutions and deliver impactful projects",
    summary:
        "I started out as a frontend developer who used to work with React.js then I got the opportunity to do backend work and that transitioned me into full stack developer. I like getting know the business of a company and provide technical solutions tailored to that particular problem. I like working with various technologies and have worked in  different sectors such as edtech, ecommerce and industry 4.0",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Node.js",
        "MongoDB",
        "Postgres",
        "Javascript",
        "Cypress",
        "Jest",
        "MERN Stack",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
    ],
    contact: {
        email: "ssbirla01@gmail.com",
        tel: "+91-8082436329",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/simranbirla",
                icon: Icons.github,
                navbar: true,
            },
            Dev: {
                name: "Dev",
                url: "https://dev.to/simranbirla",
                icon: NotebookIcon,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/simran-birla-31b3901a4/",
                icon: Icons.linkedin,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:ssbirla01@gmail.com",
                icon: Icons.email,
                navbar: false,
            },
        },
    },

    work: [
        {
            company: "i4Tech",
            href: "https://i4-tech.io/",
            badges: [],
            location: "Remote",
            title: "Full Stack Developer",
            logoUrl: "/i4tech.png",
            start: "July 2023",
            end: "Sept 2024",
            description:
                "Developed a work item builder for the manufacturing industry,using technologies like ReactJS and Nodejs which enhanced operational efficiency resulting in a 30% reduction in manual data entry errors.",
        },
        {
            company: "Vertrical Gmbh",
            badges: [],
            href: "https://vertrical.com/",
            location: "Remote",
            title: "Software Engineer",
            logoUrl: "/vertrical.png",
            start: "March 2021",
            end: "Feb 2023",
            description: "Collaborated with a team to develop and enhance the payment section of a health e-commerce site which could accept payment from multiple cards, ensuring secure and efficient transaction processing using technologies such as Gatsby, NestJs, and Stripe API"
        },
        {
            company: "HW Saver",
            href: "https://hwsaver.com/",
            badges: [],
            location: "Mumbai, India",
            title: "Software Engineer - Intern",
            logoUrl: "/hwsaver.jpeg",
            start: "October 2020",
            end: "March 2021",
            description:
                "Worked on developing a math problem solver page, coding the functionality to send and parse data using the LaTeX library for accurate mathematical notation rendering using the latex and mathjs packages in ReactJS and Python in the backend",
        },

    ],
    education: [
        {
            school: "MIT ADT University",
            href: "https://www.mituniversity.ac.in/",
            degree: "B.tech Computer Science",
            logoUrl: "/buildspace.jpg",
            start: "2017",
            end: "2021",
        },
    ],
    projects: [
        {
            title: "Pinterest Clone",
            dates: "",
            href: "https://pin-clone-39acf.web.app/",

            active: true,
            description:
                "I wanted to replicate the UI of pintrest board where the images takes up space according to their resolution. Along with that firebase storage was used to store the custom board somebody would create.",
            technologies: [
                "React.js",
                "Javascript",
                "Firebase",
                "Unsplash API",
                "Redux",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://pin-clone-39acf.web.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/simranbirla/pin-clone",
                    icon: <Icons.github className="size-3" />
                }
            ],
            image: "/pin-clone.png",
            video: ""

        },
        {
            title: "Meme Generator",
            href: "https://memegene.netlify.app/",
            dates: "",
            active: false,
            description:
                "This application helped create memes for people or edit images.",
            technologies: [
                "React.js",
                "Javascript",
                "Canvas API",
                "Firebase storage",
                "Google Login",
                "Redux",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://memegene.netlify.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/simranbirla/meme-gen",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/meme.gif",
            video: "",
        },
    ],
} as const;