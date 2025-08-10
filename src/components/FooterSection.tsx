import React from 'react';
import { LinkedinIcon, GithubIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from 'lucide-react';
const FooterSection = () => {
  return <footer className="w-full bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">JOHN DOE</h3>
            <p className="max-w-md text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
              tempora explicabo quae quod deserunt
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">SOCIAL</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://github.com" className="hover:text-blue-400 transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <TwitterIcon size={24} />
              </a>
              <a href="https://youtube.com" className="hover:text-blue-400 transition-colors">
                <YoutubeIcon size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400 transition-colors">
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            © Copyright 2021. Made by{' '}
            <span className="text-blue-400">Ram Maheshwari</span>
          </p>
        </div>
      </div>
    </footer>;
};
export default FooterSection;