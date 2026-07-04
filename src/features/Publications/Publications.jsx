import React from "react";
import { motion } from "framer-motion";

export default function Publications() {
  const publications = [
    {
      title: "Maternal Health and Sustainable Development among Tribal Women in Wayanad",
      type: "Paper Presentation",
      description: "Presented research focusing on the intersection of maternal health and sustainable development within tribal communities in Wayanad.",
      presentation: "Presented at OPSTA 2025",
      tags: ["Tribal Health", "Maternal Health", "Sustainable Development"]
    },
    {
      title: "Reimagining Disability",
      type: "Book Chapter",
      description: "Contributed a chapter focusing on social perspectives of disability, advocating for a shift from stigma to empowerment.",
      presentation: "Published Book Chapter",
      tags: ["Disability Empowerment", "Social Perspectives"]
    },
    {
      title: "Annual Status of Education Report (ASER 2024)",
      type: "Field Research",
      description: "Participated as a field researcher to assess the status of education and learning outcomes.",
      presentation: "Field Research Participation",
      tags: ["Education", "Field Research", "Data Collection"]
    }
  ];

  return (
    <section id="publications" className="py-8 sm:py-10 md:py-16 bg-stone-900 text-white relative overflow-hidden font-sans">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
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
              Publications & Research
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {publications.map((research, idx) => (
            <motion.div
              key={idx}
              className="bg-stone-800/40 backdrop-blur-2xl rounded-2xl p-6 md:p-12 border border-stone-700/50 shadow-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              viewport={{ once: true }}
              whileHover={{ borderColor: "rgba(16, 185, 129, 0.3)" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-30" />
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30 text-[10px] font-black uppercase tracking-widest font-sans">
                    {research.type}
                  </span>
                  {research.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-stone-900/50 text-stone-300 rounded-full border border-stone-700/50 text-[10px] font-black uppercase tracking-widest font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight leading-tight">
                  {research.title}
                </h3>
                
                <p className="text-emerald-400 font-bold text-sm sm:text-base font-sans italic opacity-80">
                  {research.presentation}
                </p>

                <div className="pt-6 border-t border-stone-700/50">
                  <p className="text-stone-300 leading-relaxed text-sm sm:text-base md:text-lg antialiased font-sans">
                    {research.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
