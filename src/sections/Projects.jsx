import { FaLink, FaGithub } from "react-icons/fa";

import NotesApp from "../assets/noteapp.jpg";
import MovieApp from "../assets/movieapp.jpg";
import ExpenseTracker from "../assets/expense_tracker.jpg";
import ProductStore from "../assets/product_store.png";
import VogueHome from "../assets/Vogue.png";
import Trainium from "../assets/tranium.png";

const Projects = () => {
  const projects = [
    {
      image: VogueHome,
      title: "Vogue Smart Homes",
      demoLink: "https://voguesmarthomes.co.ke/",
      description:
        "A professional website for a home automation company, highlighting smart living and security solutions.",
      techStack: [{ name: "WordPress" }],
    },
    {
      image: Trainium,
      title: "Tranium AI",
      demoLink: "https://trainium-ai.vercel.app/",
      codeLink: "https://github.com/MalcolmX2145/trainium-ai",
      description:
        "An AI-driven fitness platform that generates personalized workout and diet plans for users.",
      techStack: [{ name: "NextJS" }, { name: "React" }, { name: "TailwindCSS" }],
    },
    {
      image: MovieApp,
      title: "Movie App",
      demoLink: "https://mnamsas.netlify.app/",
      codeLink: "https://github.com/MalcolmX2145/Movie-App-v2",
      description:
        "A movie browsing application where users can search and explore different films.",
      techStack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    },
    {
      image: NotesApp,
      title: "Note Taking App",
      demoLink: "https://note-taking-app-v3.vercel.app/",
      codeLink: "https://github.com/MalcolmX2145/note-taking-app-v3",
      description:
        "A simple and responsive app for creating, editing, and organizing personal notes.",
      techStack: [{ name: "ReactJS" }, { name: "TailwindCSS" }],
    },
    {
      image: ExpenseTracker,
      title: "Expense Tracker App",
      demoLink: "https://expense-tracker-app-ebon-nine.vercel.app/",
      codeLink: "https://github.com/MalcolmX2145/expense-tracker-app",
      description:
        "An app designed to help users track spending, manage budgets, and view expense history.",
      techStack: [
        { name: "ReactJS" },
        { name: "TailwindCSS" },
        { name: "Supabase" },
        { name: "PostgreSQL" },
      ],
    },
    {
      image: ProductStore,
      title: "Product Store App",
      demoLink: "https://product-store-v2.onrender.com/",
      codeLink: "https://github.com/MalcolmX2145/product-store-v2",
      description:
        "An e-commerce application that allows users to browse, manage, and shop for products.",
      techStack: [
        { name: "ReactJS" },
        { name: "TailwindCSS" },
        { name: "Express.js" },
        { name: "PostgreSQL" },
      ],
    },
  ];

  return (
    <div className="my-28 w-full flex justify-center">
      <div className="md:text-center grid gap-5 w-full">
        <h1
          className="text-2xl md:text-3xl text-primary mb-5 md:mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          PROJECTS
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <div
              key={index}
              className="border hover:border-primary rounded-md overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={item.image} alt="" className="" />
              <div className="px-3 py-2">
                <div className="flex justify-between">
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-bold text-xl hover:text-primary">
                      {item.title}
                    </h3>
                  </a>

                  <div className="flex text-2xl gap-2">
                    <a
                      href={item.demoLink}
                      className="hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>
                    {item.codeLink && (
                      <a
                        href={item.codeLink}
                        className="hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>

                <ul className="flex gap-2 flex-wrap my-3">
                  {item.techStack.map((stack, stackIndex) => (
                    <li
                      key={stackIndex}
                      className="px-2 bg-primary/30 rounded-full text-sm"
                    >
                      {stack.name}
                    </li>
                  ))}
                </ul>

                {/* Project description below tech stack */}
                <p className="text-white font-medium hover:text-green-400 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
