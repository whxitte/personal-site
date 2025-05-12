import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Code, Server, AlertCircle, Users, Linkedin, Github, Mail, Instagram } from 'lucide-react';
import { FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {Helmet} from "react-helmet";


const HomePage: React.FC = () => {
  useEffect(() => {
    const fetchUserInfo = () => {
      fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
          const ip = data.ip || 'Not available';
          const city = data.city || 'Not available';
          const region = data.region || 'Not available';
          const country = data.country || 'Not available';
          const location = `${city}, ${region}, ${country}`;
          const org = data.org || 'Not available';
          const postal = data.postal || 'Not available';
          const timezone = data.timezone || 'Not available';
          const browserInfo = navigator.userAgent;
          const systemInfo = navigator.platform;

          const marquee = document.getElementById('infoMarquee');
          if (marquee) {
            marquee.textContent = `IP Address: ${ip} | Location: ${location} | ISP: ${org} | Postal Code: ${postal} | timezone: ${timezone} | Browser: ${browserInfo} | System: ${systemInfo}`;
          }
        })
        .catch(error => {
          console.error('Error fetching user information:', error);
          const marquee = document.getElementById('infoMarquee');
          if (marquee) {
            marquee.textContent = 'Failed to load information.';
          }
        });
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      {/* SEO Meta Tags and Schema */}
      <Helmet>
        <title>Sethu Satheesh | Cybersecurity Expert</title>
        <meta
          name="description"
          content="Sethu Satheesh, a cybersecurity expert in Kerala, India, specializing in penetration testing, cloud security, DevSecOps, and vulnerability assessment."
        />
        <meta
          name="keywords"
          content="Sethu Satheesh, cybersecurity, penetration testing, cloud security, DevSecOps, vulnerability assessment, Kerala, India"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Sethu Satheesh Cybersecurity Homepage",
              "description": "Homepage of Sethu Satheesh, a cybersecurity expert offering penetration testing, cloud security, and DevSecOps services in Kerala, India.",
              "url": "https://sethusatheesh.vercel.app/",
              "keywords": "Sethu Satheesh, cybersecurity, penetration testing, cloud security, DevSecOps, Kerala",
              "author": {
                "@type": "Person",
                "name": "Sethu Satheesh",
                "url": "https://sethusatheesh.vercel.app/"
              }
            }
          `}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full overflow-hidden mb-8">
                <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-[#192230] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-[#1D2A37] to-transparent z-10 pointer-events-none"></div>
                <marquee id="infoMarquee" className="text-primary-400 text-sm">
                  Loading information...
                </marquee>
              </div>
              <h1 className="mb-6">
                Hi, I'm <span style={{ color: '#26A69A' }}>Sethu Satheesh</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Cyber security researcher from Kerala, India, specializing in vulnerability assessment, Penetration testing of web apps, cloud security and SOC.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link to="/contact" className="btn-primary text-base">
                  Get in Touch
                </Link>
                <Link to="/services" className="btn border border-gray-600 text-white hover:bg-white/10 focus:ring-white text-base">
                  Explore Services
                </Link>
              </div>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/sethusatheesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://medium.com/@S3THU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                  aria-label="Medium"
                >
                  <FaMedium className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/whxitte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:sethusatheesh40@gmail.com" 
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com/whxitte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark-800">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cybersecurity Professional" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-white mb-6">About Me</h2>
              <p className="text-dark-300 mb-4">
                Experienced DevSecOps Engineer & Cybersecurity Researcher with a strong foundation in offensive and
                defensive security. Experienced in integrating security into CI/CD pipelines, conducting vulnerability
                assessments, and hardening cloud environments (AWS). Skilled in penetration testing, and security
                automation. Adept at identifying and mitigating security risks in web applications, infrastructure, and cloud
                native environments. 
              </p>
              <p className="text-dark-300 mb-6">
                Passionate about enhancing security postures through continuous learning, research,
                and innovative solutions
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary-400 mr-2" />
                  <span className="text-dark-300">4+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-primary-400 mr-2" />
                  <span className="text-dark-300">AWS Certified</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-5 w-5 text-primary-400 mr-2" />
                  <span className="text-dark-300">Ethical Hacker</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-400 mr-2" />
                  <span className="text-dark-300">Security Trainer</span>
                </div>
              </div>
              <Link to="/resume" className="btn-primary">
                View Full Resume
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-dark-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white mb-4">My Services</h2>
            <p className="text-dark-300">
              Comprehensive cybersecurity solutions to protect your organization's digital assets and infrastructure from evolving threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary-400" />,
                title: 'Security Assessment',
                description: 'Comprehensive evaluation of your security posture to identify vulnerabilities and recommend improvements.',
                link: '/services#security-assessment'
              },
              {
                icon: <Code className="h-8 w-8 text-primary-400" />,
                title: 'Penetration Testing',
                description: 'Simulated cyber attacks to identify and exploit vulnerabilities before malicious actors do.',
                link: '/services#penetration-testing'
              },
              {
                icon: <AlertCircle className="h-8 w-8 text-primary-400" />,
                title: 'Incident Response',
                description: 'Rapid and effective response to security incidents to minimize damage and recover quickly.',
                link: '/services#incident-response'
              },
              {
                icon: <Users className="h-8 w-8 text-primary-400" />,
                title: 'Security Training',
                description: 'Customized training programs to educate your team on security best practices and threat awareness.',
                link: '/services#security-training'
              },
              {
                icon: <Server className="h-8 w-8 text-primary-400" />,
                title: 'Security Architecture',
                description: 'Design and implementation of robust security architectures aligned with business objectives.',
                link: '/services#security-architecture'
              },
              {
                icon: <Lock className="h-8 w-8 text-primary-400" />,
                title: 'Forensic Solutions',
                description: 'Digital forensics services to investigate cyber incidents, recover evidence, trace attacker footprints, or other  digital forensic supports.',
                link: '/services#compliance'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-dark-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-4 p-3 bg-dark-900 rounded-full w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-dark-300 mb-4 flex-grow">{service.description}</p>
                <Link to={service.link} className="text-primary-400 font-medium hover:text-primary-500 inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-dark-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-white mb-4">Latest Insights</h2>
            <p className="text-dark-300">
              Stay updated with the latest cybersecurity trends, threats, and best practices through my blog.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://cdn-images-1.medium.com/v2/resize:fit:1000/1*yWBx1US6Iv_iNyJ0GwkUzQ.jpeg",
                title: "Android's Silent Threat: NotificationListenerService Fuels Malware Persistence",
                excerpt: "While this API is good for legitimate use cases, its ability to bind automatically after a reboot caught my attention. Could this be exploited for persistence and data theft? I set out to investigate.",
                date: "May 15, 2025",
                link: "https://medium.com/@S3THU/"
              },
              {
                image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sV3S0kMNH1H7voY-TEfMqg.png",
                title: "Exploiting Firestore Database Rules: A Pathway to Data Breaches",
                excerpt: "In the world of cloud-based applications, Firebase Firestore provides a flexible and scalable NoSQL database solution. However, like any powerful tool, it comes with its own set of risks if not properly configured",
                date: "September 8, 2024",
                link: "https://medium.com/@S3THU/exploiting-firestore-database-rules-a-pathway-to-data-breaches-aa945476cc16"
              },
              {
                image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*m27ticiB9XAgoCPpajRTRw.png",
                title: "The Funniest Hacking that I’ve done: Turning Pranks into Profits!",
                excerpt: "Picture this: a novice hacker stumbling upon an Instagram hacking tool on GitHub, eager to test their newfound skills. Excitedly, they download the tool and set out on their hacking journey",
                date: "February 4, 2024",
                link: "https://medium.com/@S3THU/the-funniest-hacking-that-ive-done-turning-pranks-into-profits-800705fe7a83"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                className="bg-dark-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-primary-400 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                  <p className="text-dark-300 mb-4 flex-grow">{post.excerpt}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 font-medium hover:text-primary-500 inline-flex items-center mt-auto"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://medium.com/@S3THU"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View All Posts
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Secure Your Digital Assets?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's work together to protect your organization from cyber threats and build a robust security posture.
            </p>
            <Link to="/contact" className="btn bg-dark-900 text-white hover:bg-dark-800 focus:ring-dark-900 text-lg px-8 py-3">
              Get in Touch Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;