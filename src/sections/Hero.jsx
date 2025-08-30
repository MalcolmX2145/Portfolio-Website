import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import profilePic from "../assets/LinkdIn.jpg"; // ✅ import your image

const Hero = () => {
  const socials = [
    { icon: <FaLinkedinIn className="text-3xl" />, link: "https://www.linkedin.com/in/malcolm-ekajja/" },
    { icon: <FaGithub className="text-3xl" />, link: "https://github.com/MalcolmX2145" }
  ];

  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center">
      <div className="text-center grid gap-5">
        
        {/* Profile Photo with animation */}
        <img 
          src={profilePic}
          alt="Malcolm Ekajja" 
          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="100"
        />

        <h3 className="text-3xl" data-aos="fade-up" data-aos-delay="200">
          I&apos;m Malcolm Ekajja
        </h3>
        <h1 
          className="text-5xl md:text-6xl text-primary" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          A Software & Cloud Engineer
        </h1>
        <p 
          className="text-muted-foreground text-md md:text-lg md:w-[50%] mx-auto" 
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          I design and build scalable software solutions and cloud-powered systems that are secure, efficient, and user-focused. 
          With expertise across full-stack development and cloud infrastructure, I bring together creativity and engineering 
          to deliver impactful digital experiences.
        </p>

        {/* Social Icons */}
        <ul 
          className="flex mx-auto gap-5 text-primary" 
          data-aos="fade-up" 
          data-aos-delay="800"
        >
          {socials.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <li className="text-4xl hover:text-green-400 transition-colors duration-300">
                {item.icon}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
