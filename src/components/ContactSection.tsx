import React, { useState } from 'react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Thank you for your message! I will get back to you soon.');
  };
  return <section id="contact" className="w-full bg-blue-600 py-16 md:py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">CONTACT</h2>
        <div className="w-16 h-1 bg-white mx-auto mb-16"></div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Enter Your Message" rows={6} className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition-colors w-full md:w-auto">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>;
};
export default ContactSection;