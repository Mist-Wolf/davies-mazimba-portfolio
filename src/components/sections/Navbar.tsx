import { useState } from "react";
import { Button } from "../ui/button";
import { Sun, Moon, Linkedin, Mail, Github, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  dark: boolean;
  setDark: (value: boolean) => void;
}

const sections = ["about", "experience", "education", "skills", "projects", "contact"];

const socialLinks = [
  { href: "https://www.linkedin.com/in/yourusername/", icon: <Linkedin /> },
  { href: "https://wa.me/260970193419?text=Hi%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.", icon: <span className="pi pi-whatsapp"></span> },
  { href: "https://www.github.com/Mist-Wolf/", icon: <Github /> },
];

export const Navbar = ({ dark, setDark }: NavbarProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* Desktop + Mobile Navbar */}
      <nav className={`backdrop-blur-xl rounded-xl px-6 py-4 flex justify-between items-center mb-12 shadow-lg
        ${dark ? "bg-white/10" : "bg-gray-200/80"}`}>
        
        {/* Logo */}
        <h1 className={`text-3xl font-bold ${dark ? "text-green-400" : "text-blue-600"}`}>
          Mist-Wolf
        </h1>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <Button onClick={() => setMobileNavOpen(!mobileNavOpen)} variant="ghost">
            {mobileNavOpen ? <X /> : <span className="pi pi-bars"></span>}
          </Button>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-6 items-center">
          {sections.map((section) => (
            <a key={section} href={`#${section}`} className="hover:underline transition-colors duration-200">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          {/* Social icons */}
          <div className="flex space-x-4 items-center">
            {socialLinks.map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
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
      {mobileNavOpen && (
        <div className="lg:hidden flex flex-col items-center text-center space-y-4 mb-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMobileNavOpen(false)}
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
        </div>
      )}
    </>
  );
};
