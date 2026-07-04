import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Resume = () => {
  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y = useSpring(rawY, { stiffness: 100, damping: 30 });

  const educationData = [
    {
      title: "Bachelor of Social Work (BSW)",
      duration: "2023 - 2026",
      college: "Marian College Kuttikkanam (Autonomous)",
      description: "Field Work: Completed 1-month concurrent placements at ICDS and CHC Vandiperiyar. Conferences: Participated in OPSTA (2023, 2025) and 21st SAMANWAYA International Conference. Memberships: Registered member of Kerala Association of Professional Social Workers (KAPS).",
      status: "Ongoing",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Higher Secondary (Humanities)",
      duration: "2021 - 2023",
      college: "Seminary English studies and Plus Two completion",
      description: "Completed higher secondary education focusing on humanities subjects.",
      status: "Completed",
      color: "from-teal-500 to-emerald-600"
    },
    {
      title: "SSLC",
      duration: "2020",
      college: "Schooling",
      description: "Completed secondary education. Participated in Little KITE program and served in the Scout and Guide program.",
      status: "Completed",
      color: "from-emerald-400 to-teal-500"
    },
  ];

  return (
    <section id="education" className="py-8 sm:py-10 md:py-16 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-teal-600">
            Education
          </span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-stone-300 text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl sm:max-w-5xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My academic journey and qualifications
        </motion.p>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 sm:w-2 h-full bg-gradient-to-b from-emerald-500 via-teal-600 to-teal-700 rounded-full shadow-2xl"></div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center pt-8 sm:pt-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div 
                  className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full border-2 sm:border-4 border-stone-900 z-10 shadow-lg"
                  whileHover={{ scale: 1.2 }}
                />

                <div className={`w-full sm:w-5/12 pl-12 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'}`}>
                  <motion.div 
                    className="bg-stone-800/30 backdrop-blur-xl border border-stone-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl transition-colors duration-500 hover:border-emerald-500/40"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.15)"
                    }}
                    style={{ y }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-400">{item.title}</h3>
                      </div>
                      <span 
                        className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold self-start sm:self-auto ${
                          item.status === 'Completed' 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <p className="text-emerald-300 font-medium text-sm sm:text-base md:text-lg">
                        {item.duration}
                      </p>
                      <p className="text-stone-200 font-semibold text-lg sm:text-xl">
                        {item.college}
                      </p>
                      <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default Resume;
