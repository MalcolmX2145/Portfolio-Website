//import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
  const socials = [
    { icon: < FaLinkedinIn className="text-3xl" />, link: "https://www.linkedin.com/in/malcolm-ekajja/" },
    { icon: <FaGithub className="text-3xl" />, link: "https://github.com/MalcolmX2145" },
    { icon: <FaInstagram className="text-3xl" />, link: "https://www.instagram.com/malcolm.x21/" }
  ]
  return (
    <div className="min-h-[100vh] w-[100%] flex justify-center items-center">
      <div className="text-center grid gap-5">
        <h3 className="text-3xl" data-aos="fade-up">I&apos;m Malcolm Ekajja</h3>
        <h1 className="text-5xl md:text-6xl text-primary" data-aos="fade-up" data-aos-delay="300">A Software Developer</h1>
        <p className="text-muted-foreground text-md md:text-lg md:w-[50%] mx-auto" data-aos="fade-up" data-aos-delay="500">
          I meticulastly craft pixel-perfect web applications that seasmlessly blend form and function, delivery and exceptional user experience
        </p>
        <ul className="flex mx-auto gap-5 text-primary" data-aos="fade-up" data-aos-delay="700">
        {socials.map((item, index) => (
          <Link key={index} to={item.link} target='_blank'>
            <li className="text-4xl">{item.icon}</li>
          </Link>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Hero