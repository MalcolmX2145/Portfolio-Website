import { useEffect, useState } from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import AOS from "aos";

import HoriserverAttendance from "../assets/horiserver-attendance.png";
import ComfortHome from "../assets/comfort.png";
import ExpenseTracker from "../assets/expense_tracker.jpg";
import LacesNHeels from "../assets/lacesnheels.png";
import VogueHome from "../assets/Vogue.png";
import Trainium from "../assets/tranium.png";
import Bizventory from "../assets/bizventory.png";

const filters = ["All", "Cloud & DevOps", "Software", "IoT"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Cards mounted by a filter change need AOS to pick them up, or they stay invisible
  useEffect(() => {
    AOS.refreshHard();
  }, [activeFilter]);

  // Ordered by focus area: IoT work first, then cloud, then software
  const projects = [
    {
      image: HoriserverAttendance,
      title: "Horiserver Attendance",
      areas: ["IoT", "Software", "Cloud & DevOps"],
      demoLink: "https://horiserver.horizontelemetry.com/",
      description:
        "A fingerprint attendance and access control system for managing staff, devices, base stations and roles, with live dashboards for daily attendance trends and system alerts, working with our own RFID and fingerprint door panels.",
      techStack: [{ name: "ReactTS" }, { name: "TailwindCSS" }, { name: "CI/CD" }],
    },
    {
      image: ComfortHome,
      title: "Comfort Home Automation Web App",
      areas: ["IoT", "Software", "Cloud & DevOps"],
      demoLink: "https://comfort.voguesmarthomes.co.ke",
      codeLink: "https://github.com/MalcolmX2145/comfort-home-automation",
      description:
        "Built for Vogue Smart Homes. A luxury home automation web application for controlling a Comfort Home Automation System, synced with its panel and NSPanel wall switches. (Work in Progress)",
      techStack: [
        { name: "ReactTS" },
        { name: "TailwindCSS" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MySQL" },
        { name: "cPanel" },
        { name: "CI/CD" },
      ],
    },
    {
      image: LacesNHeels,
      title: "Laces & Heels",
      areas: ["Cloud & DevOps"],
      demoLink: "https://lacesnheels.co.ke/",
      description:
        "Online store for Laces & Heels Kenya, selling curated fashion, handbags, shoes and travel essentials. I handled the hosting and set up the CI/CD pipeline.",
      techStack: [{ name: "Hosting" }, { name: "CI/CD" }],
    },
    {
      image: Bizventory,
      title: "Bizventory Inventory Management System",
      areas: ["Software", "Cloud & DevOps"],
      demoLink: "https://bizventory-mu.vercel.app/",
      codeLink: "https://github.com/MalcolmX2145/bizflow-kit/tree/main",
      description:
        "A web-based inventory and stock management system designed to help businesses track products, manage sales, monitor stock levels, and streamline daily operations.",
      techStack: [
        { name: "ReactTS" },
        { name: "TailwindCSS" },
        { name: "Express.js" },
        { name: "PostgreSQL" },
        { name: "CI/CD" },
      ],
    },
    {
      image: Trainium,
      title: "Tranium AI",
      areas: ["Software", "Cloud & DevOps"],
      demoLink: "https://trainium-ai.vercel.app/",
      codeLink: "https://github.com/MalcolmX2145/trainium-ai",
      description:
        "An AI-driven fitness platform that generates personalized workout and diet plans for users.",
      techStack: [{ name: "NextJS" }, { name: "ReactTS" }, { name: "TailwindCSS" }, { name: "CI/CD" }],
    },
    {
      image: VogueHome,
      title: "Vogue Smart Homes",
      areas: ["Software", "Cloud & DevOps"],
      demoLink: "https://voguesmarthomes.co.ke/",
      description:
        "A professional website for a home automation company, highlighting smart living and security solutions.",
      techStack: [{ name: "WordPress" }, { name: "cPanel" }, { name: "CI/CD" }],
    },
  ];

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((item) => item.areas.includes(activeFilter));

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

        <div
          className="flex flex-wrap gap-2 md:justify-center"
          role="group"
          aria-label="Filter projects by focus area"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-4 py-1 rounded-full border border-primary text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeFilter === filter
                  ? "bg-primary text-background"
                  : "text-primary hover:bg-primary/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {visibleProjects.map((item) => (
            <div
              key={item.title}
              className="border hover:border-primary rounded-md overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={item.image} alt="" className="" />
              <div className="px-3 py-2">
                <ul className="flex gap-2 flex-wrap mb-2" aria-label="Focus areas">
                  {item.areas.map((area) => (
                    <li
                      key={area}
                      className="px-2 border border-primary text-primary rounded-full text-xs font-semibold uppercase"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
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
                    {item.demoLink && (
                      <a
                        href={item.demoLink}
                        className="hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink />
                      </a>
                    )}
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

                {item.techStack.length > 0 && (
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
                )}

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
