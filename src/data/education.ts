export interface EducationItem {
  school: string;
  degree: string;
  duration: string;
  description: string;
  image: string;
}

export const education: EducationItem[] = [
    {
      school: "Isoka Boys Technical Secondary School",
      degree: "Secondary School Certificate",
      duration: "20.. - 20..",
      description: "Acquaring the fundamentals of education that forged me to be open to experience and acquire needed skills",
      image: "/images/isoka.jpg"
  },
  {
    school: "Zambia University College of Technology",
    degree: "BSc. in Software Engineering",
    duration: "20.. - 2025",
    description: "Specialized in software engineering, algorithms, databases, and web technologies with hands-on project development.",
    image: "/images/zuct.png"
  }
];
