import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { initEmailJS, sendEmail } from '../utils/emailService'; // Import EmailJS utilities

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS when the component mounts
  useEffect(() => {
    initEmailJS();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send email using EmailJS
      await sendEmail({
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error: any) {
      setIsSubmitting(false);
      setErrorMessage(error.message || 'Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="bg-dark-900">
      {/* Header */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-300">
                Have a security concern or interested in my services? Let's connect.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-dark-900">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                <p className="text-dark-300 mb-8">
                  Feel free to reach out through any of the following channels. I am available for consultations, speaking engagements, and security services.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-dark-800 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-dark-300">sethusatheesh40@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-dark-800 p-3 rounded-full mr-4">
                      <svg className="h-6 w-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Linkedin</h3>
                      <p className="text-dark-300">linkedin.com/in/sethusatheesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-dark-800 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Home</h3>
                      <p className="text-dark-300">
                        Kerala,
                        India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-dark-700">
                  <h3 className="font-semibold text-white mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/sethusatheesh" className="bg-dark-800 text-white p-2 rounded-full hover:bg-primary-400 transition-colors" aria-label="LinkedIn">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/whxitte" className="bg-dark-800 text-white p-2 rounded-full hover:bg-primary-400 transition-colors" aria-label="Twitter">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                      </svg>
                    </a>
                    <a href="https://github.com/whxitte" className="bg-dark-800 text-white p-2 rounded-full hover:bg-primary-400 transition-colors" aria-label="GitHub">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h2>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-dark-800 border border-primary-400 text-white rounded-lg p-6 mb-8"
                  >
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-6 w-6 text-primary-400 mr-2" />
                      <h3 className="font-semibold text-white">Message Sent Successfully!</h3>
                    </div>
                    <p className="text-dark-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Your Name <span className="text-primary-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Your Email <span className="text-primary-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message <span className="text-primary-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white"
                        required
                      ></textarea>
                    </div>
                    
                    {errorMessage && (
                      <div className="bg-red-900 border border-red-700 text-white px-4 py-3 rounded-lg">
                        {errorMessage}
                      </ div>

                    )}
                    
                    <button
                      type="submit"
                      className="btn-primary flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-dark-800">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What is your typical response time?",
                  answer: "I typically respond to all inquiries within 24-48 hours during business days. For urgent security matters, please indicate the urgency in your message, and I'll prioritize accordingly."
                },
                {
                  question: "What information should I include in my initial contact?",
                  answer: "To help me respond effectively, please include a brief description of your security needs or concerns, brief detail of your organization, any relevant deadlines, and your preferred method of follow-up communication."
                },
                {
                  question: "What type of trainings you provied?",
                  answer: "I offer trainings in multiple security related topic for corporates, colleges, events etc according to your needs."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-dark-900 rounded-lg shadow-sm p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-dark-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-dark-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Visit My Office</h2>
            <div className="relative bg-dark-800 h-96 rounded-lg overflow-hidden">
              {/* Google Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016727.033476322!2d73.49602153006168!3d10.533316397034037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1747032013098!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Dark overlay */}
              <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-lg"
                style={{ backgroundColor: 'rgba(31, 41, 55, 0.3)' }} // rgba for #1F2937 with 50% opacity
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;