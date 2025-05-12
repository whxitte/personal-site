import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import {Helmet} from "react-helmet";

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allCategories = [
    'All',
    'Cloud Security',
    'Social Engineering',
    'IOT Hacking',
    'Physical Security',
    'Wireless Hacking'
  ];

  const allPosts = [
    {
      id: 1,
      title: 'Exploiting Firestore Database Rules: A Pathway to Data Breaches',
      excerpt: 'In the world of cloud-based applications, Firebase Firestore provides a flexible and scalable NoSQL database solution. However, like any powerful tool, it comes with its own set of risks if not properly configured.',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sV3S0kMNH1H7voY-TEfMqg.png',
      date: 'Sep 8, 2024',
      category: 'cloud security',
      mediumUrl: 'https://medium.com/@S3THU/exploiting-firestore-database-rules-a-pathway-to-data-breaches-aa945476cc16',
      readTime: '9 min read'
    },
    {
      id: 2,
      title: 'The Funniest Hacking that I’ve done: Turning Pranks into Profits !',
      excerpt: "I am going to take you on a ride through one of the simple but a crazy hack I’ve done. Join me as I walk you through the story of this hack and reveal how I turned a simple prank into a cybersecurity lesson you won’t soon forget.",
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*m27ticiB9XAgoCPpajRTRw.png',
      date: 'Feb 4, 2024',
      category: 'Social Engineering',
      mediumUrl: 'https://medium.com/@S3THU/the-funniest-hacking-that-ive-done-turning-pranks-into-profits-800705fe7a83',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Hacking Printers : Unveiling the Risks of Printer & IoT Hacking',
      excerpt: "Printers are frequently considered as low-risk devices in today’s digital world, yet this perception belies their true risk potential.",
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4h-epi73EwQHbDfgHHRYzg.jpeg',
      date: 'Feb 3, 2024',
      category: 'IOT Hacking',
      mediumUrl: 'https://medium.com/@S3THU/hacking-printers-unveiling-the-risks-of-printer-iot-hacking-94aaddaec626',
      readTime: '12 min read'
    },
    {
      id: 4,
      title: 'Lock Picking: From a Pentester’s point of view',
      excerpt: 'Lock picking, a skill often associated with clandestine activities, has found a legitimate place in the toolkit of cybersecurity professionals.',
      image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*4D20ZfMQ2kyOQ8dOqXlRUw.png',
      date: 'Dec 27, 2023',
      category: 'Physical Security',
      mediumUrl: 'https://medium.com/@S3THU/lock-picking-from-a-pentesters-point-of-view-48c67e0c5d81',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Funny Hacking i’ve done #2: I Owned Every Possible Account of Over 500+ Victims',
      excerpt: 'This write-up delves into a social engineering experiment i’ve done that highlights the risks associated with blindly trusting and running code obtained from unverified sources and how dangerous it can go.',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hzOBLGrVjFhWAO0kVlFdIQ.jpeg',
      date: 'Apr 27, 2024',
      category: 'Social Engineering',
      mediumUrl: 'https://medium.com/@S3THU/funny-hacking-ive-done-2-i-owned-every-possible-account-of-over-500-victims-4fbdf2d79f93',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'Funny Hacking i’ve done #2: I Owned Every Possible Account of Over 500+ Victims',
      excerpt: 'Bluetooth operates on a frequency hopping spread spectrum (FHSS) technique, as compare it with Wi-Fi’s channel-based approach.',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*puYcZ8BaJogfeRafvfXkLw.jpeg',
      date: 'Mar 30, 2024',
      category: 'Wireless Hacking',
      mediumUrl: 'https://medium.com/@S3THU/bluetooth-hacking-a-guide-for-cyber-security-enthusiasts-1-2f50a2b03136',
      readTime: '10 min read'
    }
  ];

  // Filter posts based on search term and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-dark-900">
      {/* SEO Meta Tags and Schema */}
      <Helmet>
        <title>Sethu Satheesh | Cybersecurity Blog</title>
        <meta
          name="description"
          content="Read Sethu Satheesh's blog for insights on cybersecurity, including cloud security, penetration testing, social engineering, IoT hacking, and more."
        />
        <meta
          name="keywords"
          content="Sethu Satheesh, cybersecurity, cloud security, penetration testing, social engineering, IoT hacking, physical security, wireless hacking, Kerala"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Sethu Satheesh Cybersecurity Blog",
              "description": "Blog by Sethu Satheesh covering cybersecurity topics like cloud security, penetration testing, and IoT hacking.",
              "url": "https://sethusatheesh.vercel.app/blog",
              "author": {
                "@type": "Person",
                "name": "Sethu Satheesh",
                "url": "https://sethusatheesh.vercel.app/"
              },
              "hasPart": [
                ${allPosts.map(post => `
                  {
                    "@type": "BlogPosting",
                    "headline": "${post.title}",
                    "description": "${post.excerpt}",
                    "datePublished": "${post.date}",
                    "url": "${post.mediumUrl}",
                    "image": "${post.image}",
                    "author": {
                      "@type": "Person",
                      "name": "Sethu Satheesh"
                    },
                    "keywords": "${post.category}, cybersecurity, Sethu Satheesh"
                  }
                `).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Header */}
      <section className="min-h-[50vh] flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6">Cybersecurity Blog</h1>
              <p className="text-xl text-gray-300">
                Insights, trends, and best practices in the world of cybersecurity
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-dark-900">
        <div className="container">
          {/* Search and filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-dark-800 rounded-lg shadow-md p-6 mb-8">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-dark-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {allCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category || (category === 'All' && !selectedCategory)
                        ? 'bg-primary-400 text-white'
                        : 'bg-dark-900 text-dark-300 hover:bg-dark-700'
                    }`}
                    onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog posts grid */}
          <div className="max-w-4xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-medium text-white mb-4">No articles found</h3>
                <p className="text-dark-300 mb-8">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                  className="btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-dark-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </a>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-dark-900 text-primary-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-dark-300 text-sm ml-3">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors text-white">
                        <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
                          {post.title}
                        </a>
                      </h3>
                      <p className="text-dark-300 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <a
                          href={post.mediumUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 font-medium hover:text-primary-500 inline-flex items-center"
                        >
                          Read on Medium
                          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                        <span className="text-dark-300 text-sm">{post.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;