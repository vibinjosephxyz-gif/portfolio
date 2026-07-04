import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const role = {
    company: "Fisherman Community Development Programme (FCDP)",
    location: "Kollam, Kerala",
    title: "Social Work Intern",
    period: "Jan 2026 – Mar 2026",
    summary:
      "Engaged in coastal community welfare and development initiatives, focusing on community engagement and large-scale event coordination.",
    highlights: [
      "Event Coordination: Assisted and participated in the Kadal Conclave 2026.",
      "Community Engagement: Assisted agency operations in coastal community welfare and development.",
      "Conducted community outreach programs focusing on local fisherman families.",
      "Collaborated with local authorities and NGOs to streamline development efforts."
    ],
    projects: [
      {
        name: "SADGAMAYA 25",
        status: "National Seminar",
        tech: "Event Organization",
        description: "Organized the National Seminar 'Reimagining Disability: From Stigma to Empowerment', bringing together experts, social workers, and community members.",
        features: [
          "Coordinated speakers and panelists",
          "Managed event logistics and attendee registration",
          "Facilitated discussions on disability empowerment"
        ]
      },
      {
        name: "LFA Approach Workshop",
        status: "Training Workshop",
        tech: "Project Proposals",
        description: "Trained in developing effective project proposals through the Logical Framework Approach (LFA), enhancing project planning and execution skills.",
        features: [
          "Learned structural project design",
          "Developed sample project proposals for community health",
          "Applied PRA tools for effective planning"
        ]
      },
      {
        name: "Sports Leadership",
        status: "Mentorship",
        tech: "Table Tennis",
        description: "Served as Table Tennis Coach at Marian College (2025–2026), demonstrating strong leadership and team-building skills outside of academics.",
        features: [
          "Trained collegiate sports teams",
          "Developed fitness and game strategies",
          "Fostered teamwork and discipline among students"
        ]
      }
    ]
  };

  return (
    <section
      id="experience"
      className="py-8 sm:py-10 md:py-16 bg-stone-900 text-white relative overflow-hidden font-sans"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
              Experience & Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          <motion.div
            className="bg-stone-800/40 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 md:p-10 border border-stone-700/50 shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "rgba(16, 185, 129, 0.3)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-30" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                      {role.title}
                    </h3>
                    <p className="text-lg font-bold text-emerald-400 font-sans">{role.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-stone-400">
                    <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-black uppercase tracking-widest font-sans">
                      {role.period}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-bold font-sans">{role.location}</span>
                  </div>
                </div>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-4xl font-sans">
                  {role.summary}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {role.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-stone-900/50 rounded-xl border border-stone-700/50 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                      <p className="text-sm text-stone-300 antialiased font-sans leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {role.projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-stone-800/20 backdrop-blur-xl border border-stone-700/50 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl relative overflow-hidden group flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.4)" }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-600 opacity-40 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-stone-500 mb-1 block font-sans">
                    {project.status}
                  </span>
                  <h4 className="text-xl font-bold text-white font-sans">{project.name}</h4>
                  <p className="text-xs font-bold text-emerald-500 mt-1 uppercase font-sans tracking-wider">{project.tech}</p>
                </div>

                <p className="text-stone-300 text-sm leading-relaxed mb-6 font-sans flex-grow">
                  {project.description}
                </p>

                {project.features && (
                  <div className="space-y-2">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-stone-400 font-sans">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

