import React from 'react';
const AboutSection = () => {
   const skills = [
    // Frontend
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",

    // Backend
    "Node.js",
    "Express.js",

    // Databases
    "MongoDB (Mongoose)",
    "PostgreSQL",

    // Deployment & Cloud
    "AWS",
    "Cloudflare",
    "Vercel",

    // Other
    "API Design",
    "Database Modeling",
    "Performance Optimization",
  ];
  return <section id="about" className="w-full bg-gray-50 py-16 md:py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-2">ABOUT ME</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
        Full-Stack Developer crafting seamless web experiences with React, Node.js, and Next.js.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Hey! I’m <span className='font-medium'>Aditya Singh</span>, a <span className='font-medium'>Full-Stack Web Developer</span> based in India. I’ve worked on end-to-end projects — from building sleek <span className='font-medium'>frontends</span> to architecting <span className='font-medium'>scalable backends</span> — and have collaborated with teams to deliver impactful digital products for both startups and businesses.

              I’m a bit of a tech enthusiast — over the years, I’ve explored countless web tools, frameworks, and apps across different domains. That curiosity drives me to keep experimenting, learning, and building better solutions every day.
            </p>
            <p>
              I'm a bit of a digital product junky. Over the years, I've used
              hundreds of web and mobile apps in different industries and
              verticals. Feel free to
              <span className="font-medium"> contact</span> me here.
            </p>
          </div>
          <button className="mt-8 bg-blue-600 text-white font-semibold py-3 px-8 rounded hover:bg-blue-700 transition-colors">
            RESUME
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">My Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => <span key={index} className="bg-gray-200 py-2 px-6 rounded font-medium">
              {skill}
            </span>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default AboutSection;