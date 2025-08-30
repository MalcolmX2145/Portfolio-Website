//import React from "react";

const About = () => {
  return (
    <div className=" w-[100%] flex justify-center">
      <div className="md:text-center grid gap-5">
        <h1
          className="text-2xl md:text-3xl text-primary mb-5 md:mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          ABOUT ME
        </h1>
        <p
          className="text-muted-foreground text-md md:text-lg md:w-[80%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          I am a Software and Cloud Engineer driven by a passion for building
          reliable, scalable, and secure systems. With a strong foundation in
          software development and cloud technologies, I enjoy designing and
          deploying solutions that seamlessly bridge user needs with powerful
          backend architectures. My focus is on creating applications that are
          efficient, user-friendly, and ready to scale in today’s fast-paced
          digital world.
        </p>
        <p
          className="text-muted-foreground text-md md:text-lg md:w-[80%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          Based in Kenya, I thrive on solving problems with innovative thinking
          and clean, maintainable code. My expertise spans full-stack
          development, cloud infrastructure, and automation, enabling me to
          deliver end-to-end solutions. I am constantly sharpening my skills
          with emerging technologies, ensuring the systems I build are modern,
          resilient, and aligned with industry best practices.
        </p>
        <p
          className="text-muted-foreground text-md md:text-lg md:w-[80%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          My mission is to combine creativity, technical expertise, and cloud
          innovation to develop impactful digital solutions. Whether it’s
          optimizing performance, enhancing security, or creating seamless user
          experiences, I strive to exceed expectations and contribute to a more
          connected, accessible, and innovative digital world.
        </p>
      </div>
    </div>
  );
};

export default About;
