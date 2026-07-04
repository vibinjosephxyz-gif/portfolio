import React, { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import ScrollToTop from "./shared/components/ScrollToTop";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Preloader from "./shared/components/Preloader";


import { IMAGES, DOCUMENTS } from "./core/constants/assets";

import About from "./features/About/About";
import Experience from "./features/Experience/Experience";
import Publications from "./features/Publications/Publications";
import Certifications from "./features/Certifications/Certifications";
import Resume from "./features/Resume/Resume";

const Contact = lazy(() => import("./features/Contact/Contact"));

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const springY = useSpring(y, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-stone-900 text-white min-h-screen font-sans overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      <Navbar />

      <section
        id="top"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat lg:bg-fixed opacity-70"
            style={{ backgroundImage: `url(${IMAGES.MAIN_IMAGE})` }}
          ></div>
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.1),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white mb-4 leading-tight tracking-tighter"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Vibin{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  Joseph
                </span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-3xl md:text-4xl font-bold text-stone-100 mb-6 drop-shadow-lg"
              >
                Social Worker | BSW Graduate | Community Health Advocate
              </motion.p>

              <motion.p
                className="text-stone-200 text-base sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md"
              >
                Dedicated and research-oriented Social Work graduate with hands-on experience in community health, child development, and coastal community welfare.
              </motion.p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <motion.button
                  onClick={() => setCvModalOpen(true)}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all flex items-center gap-2 text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-stone-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-stone-400 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      <div id="about" className="scroll-mt-24">
        <About />
      </div>
      <div id="experience" className="scroll-mt-24">
        <Experience />
      </div>
      <div id="publications" className="scroll-mt-24">
        <Publications />
      </div>
      <div id="certifications" className="scroll-mt-24">
        <Certifications />
      </div>
      <div id="education" className="scroll-mt-24">
        <Resume />
      </div>
      


      <Suspense fallback={<div className="py-20 text-center text-stone-500 text-xl animate-pulse">Loading Contact...</div>}>
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </Suspense>
      <Footer />
      <ScrollToTop />

      <AnimatePresence>
        {cvModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <motion.div 
              className="bg-stone-800 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-hidden border border-stone-600"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex justify-between items-center p-3 sm:p-4 border-b border-stone-600 bg-gradient-to-r from-stone-700 to-stone-800">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-emerald-400">My Resume</h2>
                <motion.button
                  onClick={() => setCvModalOpen(false)}
                  className="text-stone-400 hover:text-emerald-400 text-lg sm:text-xl md:text-2xl font-bold transition-colors p-1 hover:bg-stone-700 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
              </div>
              <div className="p-3 sm:p-4">
                <iframe
                  src={DOCUMENTS.RESUME}
                  className="w-full h-48 sm:h-64 md:h-80 rounded-lg border border-stone-600"
                  title="Resume Preview"
                ></iframe>
              </div>
              <div className="p-3 sm:p-4 border-t border-stone-600 flex justify-end bg-gradient-to-r from-stone-800 to-stone-700">
                <motion.a
                  href={DOCUMENTS.RESUME}
                  download
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 text-xs sm:text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
