import { contact, ContactItem } from "../../data/contact";
import { motion } from "framer-motion";

export function Contact({ dark }: { dark: boolean }) {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto my-20 px-6 py-12 space-y-6"
    >
      <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Let’s talk</p>
      <h2 className={`mt-2 text-4xl font-bold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>Contact</h2>
      <p className="text-sm">Have a project in mind? Reach out by email, phone, or social media.</p>
      <div className="flex flex-wrap gap-4 items-center">
        {contact.map((c: ContactItem) => (
          <a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className={`rounded-full border px-4 py-2 hover:-translate-y-0.5 hover:underline flex items-center transition-transform ${dark ? "border-white/10 text-blue-300" : "border-slate-300 text-blue-600"}`}
          >
            {c.icon}
            <span className="ml-2">{c.label}</span>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
