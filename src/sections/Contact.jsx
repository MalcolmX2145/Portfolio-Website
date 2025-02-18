import { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast"

const Contact = () => {
  const inputs = [
    {
      name: "fullName",
      type: "text",
      value: "",
      label: "Full Name",
      id: "fullName",
    },
    {
      name: "emailAddress",
      type: "email",
      value: "",
      label: "Email Address",
      id: "emailAddress",
    },
    {
      name: "subject",
      type: "text",
      value: "",
      label: "Subject",
      id: "subject",
    },
  ];
  const [formValues, setFormValues] = useState({
    fullName: "",
    emailAddress: "",
    subject: "",
    message: ""
  })
  
  const form = useRef();
  const [msg, setMsg] = useState("")
  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setFormValues({ ...formValues, [name] : value })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
      publicKey: import.meta.env.VITE_PUBLIC_KEY
    })
    .then (() => {
      setMsg('Message sent successfully, I will get back to you')
      toast({
        toast: "Message sent",
        description: "I will get back to you shortly"
      })
    })
    .catch((error) => {
      setMsg("Message failed, Please try again!")
      toast({
        toast: "Message failed",
        description: "Please try again"
      })
    })
  }

  const contacts = [
    { icon: <FaPhoneAlt />, title: "Call Me", info: "+254 700743731" },
    { icon: <SiGmail />, title: "Email", info: "ekajjamalcolm@gmail.com" }
  ]

  return (
    <div className="section">
      <div className="w-[100%] flex flex-col md:flex-row justify-evenly gap-20 pt-32 pb-20">
        <div className="">
          <h1 className="text-2xl md:text-3xl text-background font-semibold" data-aos="fade-right" data-aos-delay="300">
            GET IN TOUCH WITH ME
          </h1>
          <p className="text-background mt-3 mb-6" data-aos="fade-right" data-aos-delay="500">
            I would love to hear from you and how I could help. Please fill in
            the form and I&apos;ll get back to you as soon as possible
          </p>
          <div className="grid gap-5" data-aos="fade-right" data-aos-delay="700">
            {contacts.map((item, index) => (
                <div key={index} className="flex gap-3">
                    <i className="my-auto text-2xl p-3 bg-background rounded-full text-primary">{item.icon}</i>
                    <span className="">
                        <h4 className="text-xl font-semibold text-background">{item.title}</h4>
                        <p className="text-background">{item.info}</p>
                    </span>
                </div>
            ))}
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="grid gap-5 w-3/4 md:w-1/2 mx-auto" data-aos="fade-right" data-aos-delay="900">
          {inputs.map((item, index) => (
            <div key={index} className="relative">
              <label
                htmlFor={item.id}
                className="absolute -top-3 left-3 px-2 bg-primary text-background text-sm"
              >
                {item.label}
              </label>
              <Input
                name={item.name}
                type={item.type}
                id={item.id}
                required
                onChange={handleChange}
                className="text-background pt-2"
              />
            </div>
          ))}
          <div className="relative">
            <label
              htmlFor="message"
              className="absolute -top-3 left-3 px-2 bg-primary text-background text-sm"
            >
              Message
            </label>
            <Textarea
              name="message"
              type="text"
              id="message"
              required
              onChange={handleChange}
              className="h-40 text-background"
            />
          </div>
          <Button 
            type="submit" 
            variant="secondary" 
            className="text-primary w-1/2 md:w-1/4 mx-auto"
          >
            Send Message
          </Button>
          { msg && <p className="mx-auto text-red-500">{msg}</p> }
        </form>
        
      </div>
    </div>
  );
};

export default Contact;
