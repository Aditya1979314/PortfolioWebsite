import React from "react";
import { Link } from "react-router-dom";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const name = "ADITYA SINGH".split("");
  const tagline = "Building fast, reliable, and modern web applications with full-stack expertise.".split(
    ""
  );

  return (
    <section className="w-full bg-blue-600 text-white relative overflow-hidden">
      {/* Social Media Sidebar */}
      <div className="absolute left-0 top-1/3 flex flex-col">
        <a
          href="https://www.linkedin.com/in/aditya-singh-76376721a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 p-4 hover:bg-blue-800 transition-colors"
        >
          <LinkedinIcon size={24} />
        </a>
        <a
          href="https://github.com/Aditya1979314"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 p-4 hover:bg-blue-800 transition-colors"
        >
          <GithubIcon size={24} />
        </a>
        <a
          href="https://x.com/Aditya31872628"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 p-4 hover:bg-blue-800 transition-colors"
        >
          <TwitterIcon size={24} />
        </a>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        {/* Name with stagger + glow */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 flex flex-wrap justify-center gap-1 leading-tight">
          <span className="block w-full sm:w-auto">HEY, MY NAME IS</span>
          <motion.span
            className="ml-2 flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {name.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-block"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0px 0px 0px #fff",
                      "0px 0px 8px #fff",
                      "0px 0px 0px #fff",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Typing effect for tagline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.03 },
            },
          }}
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 text-center leading-relaxed"
        >
          {tagline.map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.05 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {/* Blinking cursor */}
          <motion.span
            className="inline-block ml-1 border-r-4 border-white"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.p>

        {/* CTA Button */}
        <Link
          to="/projects"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 md:py-4 md:px-8 rounded hover:bg-gray-100 transition-colors"
        >
          PROJECTS
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
