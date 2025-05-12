import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Code, Server, AlertCircle, Users, FileCheck, Zap, Database, Globe, Cloud, RefreshCcw, Ban as Bank, HeartPulse, Building, ShoppingCart, Rocket, Wifi, Lightbulb, CheckCircle2 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'security-assessment',
      icon: <Shield className="h-10 w-10 text-primary-400" />,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your organization\'s security posture to identify vulnerabilities, weaknesses, and areas for improvement.',
      benefits: [
        'Identify security gaps before attackers do',
        'Prioritize security investments based on risk',
        'Meet compliance requirements with thorough documentation',
        'Establish a security baseline for continuous improvement'
      ],
      process: [
        'Initial scoping and planning',
        'Asset discovery and enumeration',
        'Vulnerability scanning and analysis',
        'Control evaluation and testing',
        'Detailed reporting with actionable recommendations'
      ],
      imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

    },
    {
      id: 'penetration-testing',
      icon: <Code className="h-10 w-10 text-primary-400" />,
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to identify and exploit vulnerabilities in your systems, applications, and infrastructure before malicious actors do.',
      benefits: [
        'Validate security controls and defenses',
        'Uncover complex vulnerabilities automation can\'t detect',
        'Test incident response capabilities',
        'Demonstrate real-world impact of security issues'
      ],
      process: [
        'Reconnaissance and information gathering',
        'Vulnerability discovery and analysis',
        'Exploitation and privilege escalation',
        'Post-exploitation and lateral movement',
        'Detailed reporting with proof of concept'
      ],
      imageUrl: 'https://www.insecsys.com/images/penetration-testing.png'
    },
    {
      id: 'incident-response',
      icon: <AlertCircle className="h-10 w-10 text-primary-400" />,
      title: 'Incident Response',
      description: 'Rapid and effective response to security incidents to minimize damage, reduce recovery time, and strengthen future security posture.',
      benefits: [
        'Minimize damage from security breaches',
        'Reduce incident recovery time and costs',
        'Preserve evidence for investigation or legal proceedings',
        'Improve future incident response capabilities'
      ],
      process: [
        'Initial triage and containment',
        'Forensic investigation and evidence collection',
        'Threat elimination and system recovery',
        'Root cause analysis',
        'Post-incident review and recommendations'
      ],
      imageUrl: 'https://www.dataguard.com/hs-fs/hubfs/240402_AprilBatch_01_1.png?noresize&width=390&height=400&name=240402_AprilBatch_01_1.png'
    },
    {
      id: 'security-training',
      icon: <Users className="h-10 w-10 text-primary-400" />,
      title: 'Security Training',
      description: 'Customized training programs to educate your team on security best practices, threat awareness, and secure behavior.',
      benefits: [
        'Reduce human-related security incidents',
        'Create a security-aware organizational culture',
        'Empower employees to recognize and report threats',
        'Meet compliance training requirements'
      ],
      process: [
        'Training needs assessment',
        'Custom curriculum development',
        'Interactive workshop delivery',
        'Simulated phishing and social engineering exercises',
        'Ongoing reinforcement and assessment'
      ],
      imageUrl: 'https://www.securitymagazine.com/ext/resources/images/cybersecurity-training-fp1170x658x86.jpg?1666725710'
    },
    {
      id: 'security-architecture',
      icon: <Server className="h-10 w-10 text-primary-400" />,
      title: 'Security Architecture',
      description: 'Design and implementation of robust security architectures that align with business objectives while protecting critical assets.',
      benefits: [
        'Security built into systems from the ground up',
        'Reduced security debt and remediation costs',
        'Improved compliance posture',
        'Future-proof security design to adapt to evolving threats'
      ],
      process: [
        'Business and technical requirements gathering',
        'Threat modeling and risk assessment',
        'Architecture design with defense-in-depth',
        'Control selection and implementation planning',
        'Architecture review and validation'
      ],
      imageUrl: 'https://onlinedegrees.sandiego.edu/wp-content/uploads/2020/01/Cybersecurity-architect.jpeg'
    },
    {
      id: 'compliance',
      icon: <FileCheck className="h-10 w-10 text-primary-400" />,
      title: 'Compliance Consulting',
      description: 'Expert guidance on meeting regulatory requirements and industry standards such as GDPR, HIPAA, PCI DSS, and ISO 27001.',
      benefits: [
        'Navigate complex compliance requirements',
        'Reduce audit findings and non-compliance penalties',
        'Align security efforts with compliance objectives',
        'Prepare documentation for audits and certifications'
      ],
      process: [
        'Gap assessment against relevant standards',
        'Compliance roadmap development',
        'Policy and procedure development',
        'Implementation guidance and support',
        'Pre-audit preparation and remediation'
      ],
      imageUrl: 'https://blog.ipleaders.in/wp-content/uploads/2020/05/How-to-Build-Trust-in-Controls-With-Centralized-Compliance.jpg'
    },
    {
      id: 'cloud-security',
      icon: <Cloud className="h-10 w-10 text-primary-400" />,
      title: 'Cloud Security',
      description: 'Specialized security solutions for cloud environments, ensuring secure configuration, access control, and data protection.',
      benefits: [
        'Secure cloud migration and deployment',
        'Protection for multi-cloud environments',
        'Continuous monitoring for cloud-specific threats',
        'Automated security guardrails for development'
      ],
      process: [
        'Cloud environment assessment',
        'Security architecture design for cloud',
        'Implementation of cloud security controls',
        'Cloud-specific threat monitoring setup',
        'Ongoing optimization and management'
      ],
      imageUrl: 'https://globalcybersecuritynetwork.com/wp-content/uploads/2023/06/cloud-security-and-principles.jpg'
    },
    {
      id: 'application-security',
      icon: <Zap className="h-10 w-10 text-primary-400" />,
      title: 'Application Security',
      description: 'Comprehensive security testing and remediation for web, mobile, and desktop applications throughout the development lifecycle.',
      benefits: [
        'Identify vulnerabilities before release',
        'Reduce the cost of security remediation',
        'Build developer security awareness',
        'Protect sensitive user data'
      ],
      process: [
        'Static application security testing (SAST)',
        'Dynamic application security testing (DAST)',
        'Code review and architectural analysis',
        'Third-party component assessment',
        'Remediation guidance and verification'
      ],
      imageUrl: 'https://techvify-software.com/wp-content/uploads/2023/10/what-is-web-application-security.png'
    },
    {
      id: 'digital-forensics',
      icon: <Database className="h-10 w-10 text-primary-400" />,
      title: 'Digital Forensics',
      description: 'Digital forensics services to investigate cyber incidents, recover evidence, trace attacker footprints, or other digital forensic supports.',
      benefits: [
        'Identify the root cause of security incidents quickly and accurately',
        'Preserve digital evidence in a legally admissible manner',
        'Support internal investigations and legal actions with professional reports',
        'Recover lost data and other forensic services'
      ],    
      process: [
        'Initial triage and scoping of the incident or investigation',
        'Acquisition and preservation of volatile and non-volatile digital evidence',
        'Deep forensic analysis of systems, logs, memory dumps, and network activity',
        'Attribution of malicious activity and actor profiling where possible',
        'Reporting of findings, legal documentation, and recommendations for remediation',
        'Assistance in recovery, hardening, and post-incident reviews'
       ],
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ZVxICh71MADdPD9EeJth7A.png'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="min-h-screen flex items-center pt-16 bg-dark-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-white">Cybersecurity Services</h1>
              <p className="text-xl text-dark-300">
                Comprehensive security solutions to protect your organization's digital assets
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-dark-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">How I Can Help You</h2>
            <p className="text-lg text-dark-300">
              I offer a comprehensive range of cybersecurity services tailored to address the unique security challenges facing your organization. Whether you need to assess your current security posture, implement robust protections, or respond to security incidents, my expertise can help safeguard your digital assets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Shield className="h-12 w-12 text-primary-400" />,
                title: 'Protect',
                description: 'Implement robust security controls and architectures to defend against attacks and minimize risk.'
              },
              {
                icon: <RefreshCcw className="h-12 w-12 text-primary-400" />,
                title: 'Detect',
                description: 'Identify vulnerabilities, threats, and suspicious activities before they can cause damage.'
              },
              {
                icon: <Zap className="h-12 w-12 text-primary-400" />,
                title: 'Respond',
                description: 'React quickly and effectively to security incidents to minimize impact and recovery time.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-dark-900 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center p-3 bg-dark-800 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-dark-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="bg-dark-900 rounded-2xl p-8 h-full flex flex-col">
                      <div className="p-4 bg-dark-800 rounded-lg shadow-sm w-fit mb-6">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
                      <p className="text-dark-300 mb-6 text-lg">
                        {service.description}
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-3 text-white">Benefits</h3>
                      <ul className="mb-6 space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-dark-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-3 text-white">Process</h3>
                      <ol className="mb-6 space-y-2 list-decimal list-inside text-dark-300">
                        {service.process.map((step, i) => (
                          <li key={i}>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                      
                      <Link 
                        to="/contact" 
                        className="btn-primary mt-auto self-start"
                      >
                        Request This Service
                      </Link>
                    </div>
                  </div>
                  <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                      style={{ aspectRatio: '4/3' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-dark-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Industries Served</h2>
            <p className="text-lg text-dark-300">
              I have experience providing cybersecurity services across a wide range of industries, each with their unique security challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: <Bank className="h-10 w-10 text-primary-400" />, name: 'Financial Services' },
              { icon: <HeartPulse className="h-10 w-10 text-primary-400" />, name: 'Healthcare' },
              { icon: <Globe className="h-10 w-10 text-primary-400" />, name: 'Government' },
              { icon: <Rocket className="h-10 w-10 text-primary-400" />, name: 'Technology' },
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="bg-dark-800 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="inline-flex items-center justify-center p-3 bg-dark-900 rounded-full mb-4">
                  {industry.icon}
                </div>
                <h3 className="font-bold text-lg text-white">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-400 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Strengthen Your Security?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your specific security needs and develop a tailored approach to protect your organization.
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

export default ServicesPage;