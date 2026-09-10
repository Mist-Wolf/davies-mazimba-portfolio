import {Linkedin, Mail, Github, X, MessageCircle, PhoneCallIcon } from 'lucide-react';
import 'primeicons/primeicons.css';


export interface ContactItem {
  label: string;
  href: string;
  icon: JSX.Element;
  external?: boolean;
}

export const contact: ContactItem[] = [
  { label: "Email", href: "mailto:mazimbabwalya@gmail.com", icon: <Mail /> },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/Davies",
    icon: <Linkedin />,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Mist-Wolf",
    icon: <Github />,
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/260970193419?text=Hi%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.",
    icon: <MessageCircle />,
    external: true,
  },
  {
    label: "Call +260 970193419",
    href: "#",
    icon: <PhoneCallIcon />,
    external: true,
  }
];

