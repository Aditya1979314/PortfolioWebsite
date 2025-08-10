import React from 'react';
const AboutSection = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'GIT', 'Shopify', 'Wordpress', 'Google ADS', 'Facebook Ads', 'Android', 'iOS'];
  return <section id="about" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">ABOUT ME</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
          tempora explicabo quae quod deserunt eius sapiente
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Hey! It's <span className="font-medium">John Doe</span> and I'm
                a <span className="font-medium">Frontend Web Developer</span>{' '}
                located in Los Angeles. I've done{' '}
                <span className="font-medium">remote</span> projects for
                agencies, consulted for startups, and collaborated with talented
                people to create{' '}
                <span className="font-medium">digital products</span> for both
                business and consumer use.
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