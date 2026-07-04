import React, { memo } from "react";
import { motion } from "framer-motion";

import { IMAGES, DOCUMENTS } from "../../core/constants/assets";

const SkillItem = ({ item }) => (
  <motion.span
    className="text-[11px] sm:text-xs font-semibold px-3 py-1.5 bg-stone-900/50 text-stone-300 rounded-full border border-stone-700/50 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default font-sans"
    whileHover={{ scale: 1.05 }}
  >
    {item}
  </motion.span>
);

export default function About() {
  const competencies = [
    {
      category: "Social Work Methods",
      items: ["Case Work", "Group Work", "Community Organization", "Social Auditing"],
    },
    {
      category: "Specialized Knowledge",
      items: ["Tribal Maternal Health", "Disability Empowerment", "Sustainable Development", "Coastal Community Welfare"],
    },
    {
      category: "Technical & Project Skills",
      items: ["Logical Framework Approach (LFA)", "Project Proposals", "PRA tools", "MS Office"],
    },
    {
      category: "Interests & Focus",
      items: ["Child Development", "Community Health", "Research", "Event Coordination"],
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-10 md:py-16 bg-stone-900 text-white relative overflow-hidden font-sans">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 font-sans tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-teal-600">
              Profile Summary
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <motion.div
            className="w-full lg:w-1/3 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-stone-800/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-stone-700/50 shadow-2xl relative overflow-hidden group flex-grow flex flex-col items-center text-center"
              whileHover={{ y: -3, borderColor: "rgba(16, 185, 129, 0.3)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-30" />

              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center justify-center gap-2 uppercase tracking-wider text-xs font-sans">
                Personal Baseline
              </h3>

              <div className="relative mb-8 mt-2">
                <motion.div
                  className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-stone-700/50 group-hover:border-emerald-500/50 transition-all duration-500 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${IMAGES.DP})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>

              <div className="space-y-4 w-full">
                {[
                  { label: "Full Name", value: "Vibin Joseph" },
                  { label: "Email", value: "vibinjosephxyz@gmail.com", link: "mailto:vibinjosephxyz@gmail.com" },
                  { label: "Phone", value: "+91 6238545040", link: "tel:+916238545040" },
                  { label: "Location", value: "Purakkayam, Kerala" },
                  { label: "Education", value: "BSW @ Marian College" },
                  { label: "Experience", value: "Social Work Graduate" },
                  { label: "Languages", value: "English, Malayalam" }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-stone-700/50 pb-2.5 last:border-0">
                    <p className="text-[10px] uppercase text-stone-500 font-bold tracking-widest mb-1 font-sans">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className={`text-sm font-semibold text-white hover:text-emerald-400 transition-colors antialiased tracking-tight font-sans block ${item.label === 'Email' ? 'lowercase' : 'uppercase'}`}>
                        {item.value || "Not Set"}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-stone-200 uppercase antialiased tracking-tight font-sans">
                        {item.value || "Not Set"}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <motion.a
                href={DOCUMENTS.RESUME}
                download
                className="mt-auto w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/30 transition-all border border-white/10 font-sans"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Export CV (.PDF)
              </motion.a>
            </motion.div>

            <motion.div
              className="bg-stone-800/40 backdrop-blur-2xl rounded-2xl p-6 border border-stone-700/50 shadow-2xl relative overflow-hidden group"
              whileHover={{ y: -3, borderColor: "rgba(34, 197, 94, 0.3)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-40" />
              <h3 className="text-xl font-bold text-green-400 mb-5 flex items-center gap-2 uppercase tracking-wider text-xs font-sans">
                Current Intensive Focus
              </h3>
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                  Deeply diving into <strong className="text-white">Community Welfare</strong> and
                  evolving as a <strong className="text-emerald-400">Social Health Advocate</strong>.
                  Currently focusing on sustainable development and tribal health research.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[9px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded-md border border-green-500/20 font-black uppercase font-sans">Community</span>
                  <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 font-black uppercase font-sans">Research</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-2/3 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-stone-800/40 backdrop-blur-2xl rounded-2xl p-8 md:p-10 border border-stone-700/50 shadow-2xl relative overflow-hidden group"
              whileHover={{ borderColor: "rgba(16, 185, 129, 0.4)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-50" />
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-6 uppercase tracking-wider text-sm font-sans">
                About Me
              </h3>
              <div className="space-y-6 text-stone-300 leading-relaxed text-sm sm:text-base md:text-lg antialiased font-sans">
                <p>
                  <strong className="text-white">Dedicated and research-oriented Social Work graduate</strong> specializing in <strong className="text-emerald-400">community health and child development</strong>, with hands-on experience in coastal community welfare.
                </p>
                <p>
                  Strong expertise in <strong className="text-white">Social Work Methods</strong>, community organization, and tribal maternal health. Experienced in organizing national-level seminars, participating in field research, and developing effective project proposals.
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  {[
                    { label: "Role", value: "Social Worker" },
                    { label: "Key Areas", value: "Community Field Work, Research" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-stone-900/50 rounded-xl border border-stone-700/50">
                      <p className="text-[10px] uppercase text-emerald-500 font-bold tracking-widest mb-1 font-sans">{item.label}</p>
                      <p className="text-sm text-stone-200 antialiased font-medium font-sans">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-stone-800/40 backdrop-blur-2xl rounded-2xl p-8 md:p-10 border border-stone-700/50 shadow-2xl relative overflow-hidden group flex-grow"
              whileHover={{ borderColor: "rgba(16, 185, 129, 0.4)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-50" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-8 uppercase tracking-wider text-sm font-sans">
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {competencies.map((group, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-[10px] sm:text-xs font-black text-stone-500 uppercase tracking-[0.2em] border-l-2 border-emerald-500 pl-3 font-sans">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, sIdx) => (
                        <SkillItem key={sIdx} item={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

