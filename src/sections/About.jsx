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
          I build reliable, scalable, and secure systems, from the connected
          device to the cloud backend to the app people use. Based in Kenya, I
          focus on three areas: cloud and DevOps, software development, and IoT.
        </p>
      </div>
    </div>
  );
};

export default About;
