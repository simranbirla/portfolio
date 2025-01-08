import { Icons } from "@/components/ui/Icon";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Simran Birla",
    initials: "",
    url: "https://simranbirla.netlify.app/",
    location: "Kalyan, Mumbai ,India",
    locationLink: "https://maps.app.goo.gl/7YgNCRYXREzb1Bcw5",
    description:
        "Full-Stack Developer with 4 years of experience specializing in Javascript techstack. Proven ability to build scalable web solutions and deliver impactful projects",
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
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
            logoUrl: "/hwsaver.png",
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
            title: "Chat Collect",
            href: "https://chatcollect.com",
            dates: "Jan 2024 - Feb 2024",
            active: true,
            description:
                "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://chatcollect.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
        },
        {
            title: "Magic UI",
            href: "https://magicui.design",
            dates: "June 2023 - Present",
            active: true,
            description:
                "Designed, developed and sold animated UI components for developers.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://magicui.design",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/magicuidesign/magicui",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.magicui.design/bento-grid.mp4",
        },
        {
            title: "llm.report",
            href: "https://llm.report",
            dates: "April 2023 - September 2023",
            active: true,
            description:
                "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://llm.report",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/dillionverma/llm.report",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.llm.report/openai-demo.mp4",
        },
        {
            title: "Automatic Chat",
            href: "https://automatic.chat",
            dates: "April 2023 - March 2024",
            active: true,
            description:
                "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://automatic.chat",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
        },
    ],
} as const;