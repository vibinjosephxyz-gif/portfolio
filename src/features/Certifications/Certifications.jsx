import React from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    { 
      title: "Inter-Collegiate Interzone Table Tennis", 
      issuer: "Marian College", 
      instructor: "Sports Leadership",
      duration: "2023 - 2026",
      description: "Secured 2nd Place (2023-24) and 3rd Place (2024-26) representing the college in table tennis tournaments.",
      featured: true,
      tags: ["Sports", "Leadership", "Table Tennis", "Team Building"]
    },
    { 
      title: "MS Office Training", 
      issuer: "Infotech", 
      instructor: "",
      duration: "3 Months",
      description: "Completed comprehensive training in Microsoft Office suite for technical and administrative documentation.",
      featured: false,
      tags: ["Technical", "MS Office"]
    },
    { 
      title: "Basic Digital Marketing", 
      issuer: "AIBI Campus", 
      instructor: "",
      duration: "",
      description: "Acquired fundamental skills in digital marketing strategies and online presence management.",
      featured: false,
      tags: ["Marketing", "Digital"]
    }
  ];

  return (
    <section id="certifications" className="py-8 sm:py-10 md:py-16 bg-stone-900 text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-teal-600">
            Awards & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className={`bg-stone-800/30 backdrop-blur-xl border border-stone-700/50 rounded-2xl p-6 shadow-xl relative overflow-hidden group transition-all duration-300 flex flex-col ${
                cert.featured ? 'md:col-span-2 lg:col-span-2 border-emerald-500/30 ring-1 ring-emerald-500/20' : ''
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.4)" }}
            >
              <div className="relative z-10 space-y-6 flex-grow">
                <div className="space-y-2">
                  <h3 className={`font-black text-white font-sans tracking-tight leading-tight ${
                    cert.featured ? 'text-2xl sm:text-3xl md:text-4xl pr-20' : 'text-lg'
                  }`}>
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-emerald-400 font-black uppercase tracking-widest text-[10px] sm:text-xs">
                    <span>{cert.issuer}</span>
                    {cert.instructor && (
                      <>
                        <span className="w-1 h-1 bg-stone-600 rounded-full hidden sm:block" />
                        <span>{cert.instructor}</span>
                      </>
                    )}
                  </div>
                </div>

                {cert.description && (
                  <>
                    {cert.tags && (
                      <div className="flex flex-wrap gap-2">
                        {cert.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-stone-900/50 text-stone-400 rounded-md border border-stone-700/50 text-[9px] font-bold uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="space-y-4">
                      <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans antialiased">
                        {cert.description}
                      </p>
                      {cert.duration && (
                        <div className="flex items-center gap-2 text-emerald-400/80 text-xs font-bold font-sans">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {cert.duration}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {!cert.featured && (
                <div className="mt-4 pt-4 border-t border-stone-700/50">
                  <span className="text-stone-400 text-xs font-bold italic font-sans uppercase tracking-widest opacity-60">Completed</span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-20 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
