export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  image: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Wiphan Care Ministries",
    role: "Data Entry Clerk",
    duration: "March 2026 – June 2026",
    description: "Entered and updated data accurately into the organisation's database and record system",
    image: "/images/wiphan.webp"
  },
  {
    company: "Nhima",
    role: "Nhima agent",
    duration: "July 2026 – present",
    description: "Capturing and maintaining member information accurately in the system.",
    image: "/images/nhima.png"
  }
];
