import { contact, ContactItem } from "../../data/contact";

export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto my-20 px-6 py-12 space-y-6">
      <h2 className="text-3xl font-bold text-cyan-400">Contact</h2>
      <p className="text-sm">Feel free to reach out to me via email or social media:</p>
      <div className="flex space-x-4 items-center">
        {contact.map((c: ContactItem) => (
          <a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className="text-blue-400 hover:underline flex items-center"
          >
            {c.icon}
            <span className="ml-2">{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
