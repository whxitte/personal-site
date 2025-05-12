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
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHYYmbzgDWNUw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708012459355?e=2147483647&v=beta&t=Dbyvt9NequYXtZcYENM-7sO_6Qme_VS2i-BOX2003d0"
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