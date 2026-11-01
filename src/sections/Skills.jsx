// import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// category icons
import { FaCloud, FaMicrochip } from "react-icons/fa";
// generic icons for skills without a logo
import { FaServer, FaRocket, FaShieldAlt, FaInfinity, FaLayerGroup, FaBug } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
// cloud & devops icons
import { FaGitAlt, FaLinux } from "react-icons/fa6";
// software icons
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql } from "react-icons/si";
// iot icons
import { SiArduino, SiEspressif, SiRaspberrypi, SiNodered, SiMqtt } from "react-icons/si";

const Skills = () => {
  const content = [
    {
      category: "Cloud & DevOps",
      icon: <FaCloud className="text-2xl" />,
      skills: [
        { icon: <FaServer className="text-4xl" />, skill: "Cloud/Server Infra" },
        { icon: <FaRocket className="text-4xl" />, skill: "Deployment & Hosting" },
        { icon: <FaShieldAlt className="text-4xl" />, skill: "Security" },
        { icon: <FaGitAlt className="text-4xl" />, skill: "Git" },
        { icon: <FaInfinity className="text-4xl" />, skill: "CI/CD" },
        { icon: <FaLinux className="text-4xl" />, skill: "Linux" },
      ],
    },
    {
      category: "Software",
      icon: <PiBracketsCurlyBold className="text-2xl" />,
      skills: [
        { icon: <FaLayerGroup className="text-4xl" />, skill: "Full-Stack Development" },
        { icon: <SiTypescript className="text-4xl" />, skill: "TypeScript" },
        { icon: <FaReact className="text-4xl" />, skill: "React" },
        { icon: <FaNodeJs className="text-4xl" />, skill: "Node.js" },
        { icon: <FaBug className="text-4xl" />, skill: "QA Testing" },
        { icon: <SiPostgresql className="text-4xl" />, skill: "PostgreSQL" },
      ],
    },
    {
      category: "IoT",
      icon: <FaMicrochip className="text-2xl" />,
      skills: [
        { icon: <SiArduino className="text-4xl" />, skill: "Arduino" },
        { icon: <SiEspressif className="text-4xl" />, skill: "ESP32" },
        { icon: <SiRaspberrypi className="text-4xl" />, skill: "Raspberry Pi" },
        { icon: <SiNodered className="text-4xl" />, skill: "Node-RED" },
        { icon: <SiMqtt className="text-4xl" />, skill: "MQTT" },
      ],
    },
  ];

  return (
    <div className="my-28 w-[100%] flex justify-center">
      <div className="md:text-center grid gap-5 w-[100%]">
        <h1 className="text-2xl md:text-3xl text-primary mb-5 md:mb-10" data-aos="fade-up" data-aos-delay="300">
          SKILLS & TOOLS
        </h1>
        <div className="w-[100%]">
          <Accordion
            type="single"
            collapsible
            className="md:w-[60%] mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {content.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
              >
                <AccordionTrigger className="px-5 font-bold uppercase text-lg md:text-xl">
                  <div className="flex gap-2">
                    <span className="my-auto">{item.icon}</span>
                    {item.category}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {item.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex pl-10 gap-5 my-2 text-primary hover:bg-primary/20 rounded-md py-2"
                    >
                      <span className="rotate-z-360">{skill.icon}</span>
                      <p className="my-auto">{skill.skill}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Skills;
