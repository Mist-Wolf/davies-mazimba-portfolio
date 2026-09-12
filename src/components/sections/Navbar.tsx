import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { Sun, Moon, Linkedin, Github, X } from 'lucide-react';

interface NavbarProps {
  dark: boolean;
  setDark: (value: boolean) => void;
}

const sections = ["about", "experience", "education", "skills", "projects", "contact"];

const socialLinks = [
  //{ href: "https://linkedin.com/in/Davies", icon: <Linkedin /> },
  { href: "https://wa.me/260970193419?text=Hi%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.", icon: <span className="pi pi-whatsapp"></span> },
  { href: "https://www.github.com/Mist-Wolf/", icon: <Github /> },
];

export const Navbar = ({ dark, setDark }: NavbarProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* Desktop + Mobile Navbar */}
      <nav className={`sticky top-4 z-40 backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-4 flex justify-between items-center mb-12 shadow-lg border border-white/10
        ${dark ? "bg-white/10" : "bg-gray-200/80"}`}>
        
        {/* Logo */}
        <h1 className={`text-2xl font-bold tracking-tight ${dark ? "text-green-300" : "text-emerald-700"}`}>
          Mist-Wolf<span className={dark ? "text-white/40" : "text-slate-400"}>.</span>
        </h1>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <Button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            variant="ghost"
            aria-expanded={mobileNavOpen}
            aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileNavOpen ? <X /> : <span className="pi pi-bars"></span>}
          </Button>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-5 items-center text-sm">
          {sections.map((section) => (
            <a key={section} href={`#${section}`}             className="text-white/70 hover:text-emerald-300 transition-colors duration-200">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          {/* Social icons */}
          <div className="flex space-x-4 items-center">
            {socialLinks.map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label="Social profile" className="text-white/60 hover:text-emerald-300 transition-colors">
                {icon}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </Button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
      {mobileNavOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -12 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden overflow-hidden flex flex-col items-center text-center space-y-4 mb-6"
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              //onClick={() => setMobileNavOpen(false)}
              className="hover:underline transition-colors duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          <div className="flex space-x-6 mt-4 justify-center items-center">
            {socialLinks.map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                {icon}
              </a>
            ))}

            {/* Theme toggle */}
            <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
              {dark ? <Sun /> : <Moon />}
            </Button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};
