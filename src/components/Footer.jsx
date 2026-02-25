import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const socials = [
        { icon: < FaLinkedinIn className="text-3xl" />, link: "https://www.linkedin.com/in/malcolm-ekajja/" },
        { icon: <FaGithub className="text-3xl" />, link: "https://github.com/MalcolmX2145" }
      ]

  return (
    <div className="section">
        <div className="w-[100%] flex flex-col gap-5 justify-center border-t border-backrgound py-6">
        <ul className="flex mx-auto gap-5 text-background">
        {socials.map((item, index) => (
          <Link key={index} to={item.link} target='_blank'>
            <li className="text-4xl p-2 rounded-full hover:bg-background hover:text-primary transition-all ease-in-out duration-500">{item.icon}</li>
          </Link>
        ))}
        </ul>
           <p className="mx-auto text-background">2025 &copy; Malcolm Ekajja. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer