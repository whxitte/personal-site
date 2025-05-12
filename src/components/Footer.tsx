import React from "react";
import { Link } from "react-router-dom";
import { FaMedium } from "react-icons/fa";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="h-6 w-6 rounded-full bg-primary-400 text-dark-900 flex items-center justify-center text-xl font-bold">
                S
              </span>
              <span className="text-xl font-bold">Sethu Satheesh</span>
            </div>
            <p className="text-dark-300 mb-4">
              Protecting your digital assets with expert cybersecurity solutions
              and proactive security strategies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sethusatheesh"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#security-assessment"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Security Assessment
                </Link>
              </li>
              <li>
                <Link
                  to="/services#penetration-testing"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link
                  to="/services#incident-response"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Incident Response
                </Link>
              </li>
              <li>
                <Link
                  to="/services#security-training"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Security Training
                </Link>
              </li>
              <li>
                <Link
                  to="/services#compliance"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  Compliance Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <span className="text-dark-300">sethusatheesh40@gmail.com</span>
              </li>
              <li className="flex items-start">
                <a
                  href="https://www.linkedin.com/in/sethusatheesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                </a>
                <span className="text-dark-300">linkedin.com/in/sethusatheesh</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <span className="text-dark-300">Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-700 text-dark-400 text-sm">
        <div className="flex justify-center items-center">
          <p>&copy; {currentYear} Sethu Satheesh. All rights reserved.</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
