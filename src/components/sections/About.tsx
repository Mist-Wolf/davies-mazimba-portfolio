import { about } from "../../data/about";
import { motion } from "framer-motion";

export function About({ dark }: { dark: boolean }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 pt-4 pb-20 md:pt-12 md:pb-28 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`${dark ? "bg-white/10" : "bg-gray-200/70"} p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-xl space-y-5 border border-white/10`}
      >
        <p className={`text-sm uppercase tracking-[0.25em] ${dark ? "text-emerald-300" : "text-emerald-700"}`}>Software engineer</p>
        <h2 className="text-4xl sm:text-6xl font-bold leading-tight bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">{about.name}</h2>
        <p className={`text-xl ${dark ? "text-white" : "text-blue-600"}`}>{about.title}</p>
        <p className={`text-base leading-7 ${dark ? "text-gray-100" : "text-gray-800"}`}>{about.description}</p>
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${dark ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200" : "border-emerald-600/20 bg-emerald-600/10 text-emerald-700"}`}>
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to meaningful opportunities
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="#projects" className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-1">View my work</a>
          <a href="#contact" className={`rounded-full border px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-1 ${dark ? "border-white/30 text-white" : "border-slate-500 text-slate-800"}`}>Let's connect</a>
        </div>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        src={`${import.meta.env.BASE_URL}${about.image.replace(/^\//, '')}`}
        alt="Developer illustration"
        className="w-56 sm:w-72 md:w-80 mx-auto drop-shadow-2xl"
      />
    </section>
  );
}
