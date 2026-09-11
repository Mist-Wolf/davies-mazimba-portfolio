import { experience, ExperienceItem } from "../../data/experience";
import { motion } from "framer-motion";

export function Experience({ dark }: { dark: boolean }) {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">My journey</p>
        <h2 className={`mt-2 text-4xl font-bold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>Experience</h2>
      </div>
      <div className="space-y-6">
        {experience.map((item: ExperienceItem) => (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            key={item.company}
            className={`group relative p-6 rounded-2xl shadow-md border border-transparent hover:border-emerald-400 transition-all duration-300
              ${dark ? "bg-white/[0.07] hover:bg-white/[0.12]" : "bg-white hover:bg-gray-50"}`}
          >
            <div className="flex items-center gap-4 mb-2">
              <img src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`} width="48" height="48" className="rounded-full" alt={`${item.company} logo`} />
              <div>
                <h3 className={`text-lg font-semibold ${dark ? "text-white" : "text-gray-900"}`}>{item.company}</h3>
                <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-800"}`}>{item.role}, {item.duration}</p>
              </div>
            </div>
            <p className={`text-sm mt-2 ${dark ? "text-gray-300" : "text-gray-900"}`}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
