import { FaLink, FaGithub } from "react-icons/fa";

import NotesApp from "../assets/noteapp.jpg";
import MovieApp from "../assets/movieapp.jpg";
import ExpenseTracker from "../assets/expense_tracker.jpg";
import ProductStore from "../assets/product_store.png";
import VogueHome from "../assets/Vogue.png";

const Projects = () => {
  const projects = [
    {
      image: VogueHome,
      title: "Vogue Smart Homes",
      demoLink: "https://voguesmarthomes.co.ke/",
      // codeLink: "https://github.com/MalcolmX2145/Movie-App-v2",
      techStack: [{ name: "WordPress" }],
    },
    {
      image: MovieApp,
      title: "Movie App",
      demoLink: "https://mnamsas.netlify.app/",
      codeLink: "https://github.com/MalcolmX2145/Movie-App-v2",
      techStack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    },
    {
      image: NotesApp,
      title: "Note Taking App",
      demoLink: "https://note-taking-app-v3.vercel.app/",
      codeLink: "https://github.com/MalcolmX2145/note-taking-app-v3",
      techStack: [{ name: "ReactJS" }, { name: "TailwindCSS" }],
    },
    {
      image: ExpenseTracker,
      title: "Expense Tracker App",
      demoLink: "https://expense-tracker-app-ebon-nine.vercel.app/",
      codeLink: "https://github.com/MalcolmX2145/expense-tracker-app",
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
            <div key={index} className="border hover:border-primary rounded-md overflow-hidden" data-aos="fade-up" data-aos-delay="500">
              <img src={item.image} alt="" className="" />
              <div className="px-3 py-2" >
                <div className="flex justify-between">
                  <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                    <h3 className="font-bold text-xl hover:text-primary">
                      {item.title}
                    </h3>
                  </a>

                  <div className="flex text-2xl gap-2">
                    <a href={item.demoLink} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <FaLink />
                    </a>
                    <a href={item.codeLink} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
