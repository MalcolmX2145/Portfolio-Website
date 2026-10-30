import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/constants";

const WhatsAppButton = () => {
  const [hidden, setHidden] = useState(false);

  // On small screens, step aside while the contact form is on screen so it never covers the inputs
  useEffect(() => {
    const formEl = document.getElementById("contact-form");
    if (!formEl || !("IntersectionObserver" in window)) return;

    const smallScreen = window.matchMedia("(max-width: 767px)");
    let formVisible = false;
    const update = () => setHidden(smallScreen.matches && formVisible);

    const observer = new IntersectionObserver(([entry]) => {
      formVisible = entry.isIntersecting;
      update();
    });
    observer.observe(formEl);
    smallScreen.addEventListener("change", update);

    return () => {
      observer.disconnect();
      smallScreen.removeEventListener("change", update);
    };
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Malcolm on WhatsApp"
      tabIndex={hidden ? -1 : 0}
      aria-hidden={hidden}
      className={`group fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 ${
        hidden ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100"
      }`}
    >
      <FaWhatsapp className="text-3xl md:text-4xl" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground px-3 py-1 text-sm text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
