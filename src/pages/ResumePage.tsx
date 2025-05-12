import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle2, Shield, Code, Download, User, Mail, Phone, MapPin, Award as AwardIcon, Linkedin as LinkedIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage: React.FC = () => {
  return (
    <div className="bg-dark-900">
      {/* Header */}
      <section className="min-h-[50vh] flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 flex items-center justify-center gap-4 text-3xl font-bold">
  Professional Resume
  <a
    href="https://drive.usercontent.google.com/download?id=18PoKbMVo3EphUAlC_XOJOlOLAvrH2jvS&export=download&authuser=0&confirm=t&uuid=310a510c-9036-4048-b65e-75a2307da4c3&at=APcmpoxmUU6guLctidnpll-QX8ay:1746529085558#"
    className="text-primary-400 hover:text-primary-300"
    title="Download Resume PDF"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="w-6 h-6" />
  </a>
</h1>
              <p className="text-xl text-gray-300">
                A dedicated experience of hacking and securing digital assets and infrastructure
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16 bg-dark-900">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Personal Info */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24"
              >
                {/* Profile Image */}
                <div className="mb-8">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Profile"
                    className="w-40 h-40 object-cover rounded-full mx-auto"
                  />
                </div>

                {/* Contact Info */}
                <div className="bg-dark-800 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">Email:</span>
                      <span className="text-dark-300">sethusatheesh40@gmail.com</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">Location:</span>
                      <span className="text-dark-300">Kerala, India</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">LinkedIn:</span>
                      <a href="https://www.linkedin.com/in/sethusatheesh" className="text-primary-400 hover:underline">
                        linkedin.com/in/sethusatheesh
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Skills */}
                <div className="bg-dark-800 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Penetration Testing',
                      'Vulnerability Assessment',
                      'SOC',
                      'DevSecOps',
                      'Incident Response',
                      'Security Architecture',
                      'Cloud Security',
                      'Infrastructure Security',
                      'Security Operations',
                      'Security Automation',
                      'Compliance',
                      'Network Security',
                      'Python',
                      'Bash',
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="bg-dark-900 text-primary-400 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-dark-800 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">Certifications</h3>
                  <ul className="space-y-3">
                    {[
                      { name: 'AWS Certified Cloud Practitioner', year: '2025' },
                      { name: 'Certified AppSec Practitioner', year: '2024' },
                      { name: 'Certified Cyber Security Analyst', year: '2024' },
                    ].map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-dark-300">{cert.name}</div>
                          <div className="text-sm text-dark-400">Obtained: {cert.year}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Languages */}
                <div className="bg-dark-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Languages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-dark-300">Malayalam</span>
                      <span className="text-sm text-dark-400">Native</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-dark-300">English</span>
                      <span className="text-sm text-dark-400">Professional</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-dark-300">Hindi</span>
                      <span className="text-sm text-dark-400">Professional</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Experience, Education, etc. */}
            <div className="md:col-span-2">
              {/* Professional Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-dark-800 text-primary-400 p-2 rounded-lg mr-3">
                    <Shield className="h-6 w-6" />
                  </span>
                  Professional Summary
                </h2>
                <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 shadow-sm">
                  <p className="text-dark-300 leading-relaxed mb-4">
                    Dedicated and Experienced DevSecOps Engineer & Cybersecurity Researcher with a strong foundation in offensive and
                    defensive security. Specialized in vulnerability assessment, penetration testing, SOC, DevSecOps and cloud security with a proven track record of strengthening security postures and mitigating risks.
                  </p>
                  <p className="text-dark-300 leading-relaxed">
                  Adept at identifying and mitigating security risks in web applications, infrastructure, and cloud
                  native environments. Passionate about enhancing security postures through continuous learning, research,
                  and innovative solutions. Seeking challenging opportunities to apply expertise in protecting digital assets and infrastructure.
                  </p>
                </div>
              </motion.div>

              {/* Work Experience */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-dark-800 text-primary-400 p-2 rounded-lg mr-3">
                    <Briefcase className="h-6 w-6" />
                  </span>
                  Work Experience
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      title: 'DevSecOps Engineer',
                      company: 'AOT Technologies | Technopark, Trivandrum',
                      period: 'June 2024 - Present',
                      responsibilities: [
                        'Implemented security automation across various projects in SDLC.',
                        'Developed and maintained security policies for cloud infrastructure, ensuring compliance with industry standards (CIS benchmarks, OWASP, NIST, HIPPA).',
                        'Led incident response activities for cloud-based infrastructure (AWS), rapidly identifying and mitigating security breaches, reducing potential data exposure by 60% and decreasing incident resolution time by 40%.',
                        'Led penetration testing and red teaming exercises for web application projects, uncovering critical vulnerabilities and delivering remediation strategies that reduced data breach risk by 70% and ensured continued compliance with security standards',
                        ' Collaborated with DevOps and engineering teams to implement security best practices software development life cycle'
                      ]
                    },
                    
                  ].map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-dark-800 border border-dark-700 rounded-lg p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <div className="flex justify-between items-center my-2">
                        <div className="text-primary-400 font-medium">{job.company}</div>
                        <div className="text-dark-400 text-sm bg-dark-900 px-3 py-1 rounded-full">{job.period}</div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-dark-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-dark-800 text-primary-400 p-2 rounded-lg mr-3">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  Education
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      degree: 'Diploma in Computer Engineering',
                      institution: 'Govt. Polytechnic College Kaduthuruthy, Kerala',
                      period: '2021 - 2024',
                      details: 'Specialized in computer software engineering and cyber security'
                    },
                    {
                      degree: 'Plus Two Bio Science',
                      institution: 'SMSNHSS Vaikom, Kerala',
                      period: '2019 - 2021',
                      details: 'Passed course in Bio Science with 87%'
                    }
                  ].map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-dark-800 border border-dark-700 rounded-lg p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <div className="flex justify-between items-center my-2">
                        <div className="text-primary-400 font-medium">{edu.institution}</div>
                        <div className="text-dark-400 text-sm bg-dark-900 px-3 py-1 rounded-full">{edu.period}</div>
                      </div>
                      <p className="mt-3 text-dark-300">{edu.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-dark-800 text-primary-400 p-2 rounded-lg mr-3">
                    <Code className="h-6 w-6" />
                  </span>
                  Notable Projects
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      title: (
                        <a
                          href="https://github.com/whxitte/gixposed"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:underline"
                        >
                          Gixposed
                        </a>
                      ),
                      description:
                        'Gixposed is a powerful command-line tool designed to search the commit history of Git repositories for sensitive information, such as API keys and access tokens. Its purpose is to help developers and security professionals quickly identify and remediate exposed sensitive informations in their codebases.',
                      achievements: [
                        'Searches through all commits in the entire Git history rather than just the current branch or HEAD',
                        'Supports full repository-wide scans, including old/deleted files',
                        'Allows users to define and search for custom strings or regex patterns',
                        'Automatically detects the GitHub remote origin URL and builds direct clickable links',
                        'Built to help developers and security professionals'
                      ]
                    },
                    {
                      title: (
                        <a
                          href="https://github.com/whxitte/cutie-pie"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:underline"
                        >
                          Cutie-Pie
                        </a>
                      ),
                      description:
                        'Cutie-Pie, is a Shodan-inspired customizable fun project that does live internet scanning tool to dynamically scan exposed devices, classify, enrich and crack them.',
                      achievements: [
                        'Scans the entire internet for exposed devices based on user defined services at rocket speed',
                        'Classifies and present all outputs to user via a web front end in a cyberpunk style',
                        'Supports cracking multiple services (SSH, FTP, MySQL, RDP)',
                        'Enriched view of exposed services like a Shodan2000 inspired dashboard'
                      ]
                    },
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-dark-800 border border-dark-700 rounded-lg p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="my-3 text-dark-300">{project.description}</p>
                      <div className="mt-4">
                        <h4 className="font-medium text-white mb-2">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-dark-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Resume CTA */}
      <section className="py-16 bg-dark-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Need a Copy of My Resume?</h2>
            <p className="text-lg text-dark-300 mb-8">
              Download a PDF version of my resume for your records or to share with your team.
            </p>
            <a 
              href="https://drive.usercontent.google.com/download?id=18PoKbMVo3EphUAlC_XOJOlOLAvrH2jvS&export=download&authuser=0&confirm=t&uuid=310a510c-9036-4048-b65e-75a2307da4c3&at=APcmpoxmUU6guLctidnpll-QX8ay:1746529085558#" 
              className="btn bg-dark-900 text-white hover:bg-dark-700 focus:ring-dark-900 text-lg px-8 py-3 inline-flex items-center"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;