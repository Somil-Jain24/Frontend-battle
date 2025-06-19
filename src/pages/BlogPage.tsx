import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag, Search } from 'lucide-react';

interface BlogPageProps {
  setCursorHover: (hover: boolean) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ setCursorHover }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const heroRef = useRef(null);
  const blogRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const blogInView = useInView(blogRef, { once: true });

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'innovation', name: 'Innovation' },
    { id: 'industry', name: 'Industry News' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence in Business Operations',
      excerpt: 'Discover how AI is transforming business operations and what leaders need to know to stay ahead of the curve.',
      category: 'technology',
      author: 'Dr. Sarah Chen',
      date: '2024-03-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      tags: ['AI', 'Business', 'Future Tech']
    },
    {
      id: 2,
      title: 'Building Sustainable Smart Cities: A Comprehensive Guide',
      excerpt: 'Learn about the technologies and strategies behind creating environmentally conscious urban environments.',
      category: 'innovation',
      author: 'Michael Rodriguez',
      date: '2024-03-12',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Smart Cities', 'Sustainability', 'IoT']
    },
    {
      id: 3,
      title: 'Quantum Computing: Breaking the Barriers of Traditional Processing',
      excerpt: 'An in-depth look at quantum computing advancements and their potential impact on various industries.',
      category: 'technology',
      author: 'Prof. James Liu',
      date: '2024-03-10',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      tags: ['Quantum Computing', 'Innovation', 'Science']
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of Remote Work',
      excerpt: 'Essential security practices and technologies for protecting distributed workforces.',
      category: 'industry',
      author: 'Anna Thompson',
      date: '2024-03-08',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Cybersecurity', 'Remote Work', 'Technology']
    },
    {
      id: 5,
      title: 'Getting Started with Machine Learning: A Developer\'s Guide',
      excerpt: 'A comprehensive tutorial for developers looking to integrate machine learning into their applications.',
      category: 'tutorials',
      author: 'David Kim',
      date: '2024-03-05',
      readTime: '20 min read',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Machine Learning', 'Tutorial', 'Development']
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing Processing Power Closer',
      excerpt: 'Explore how edge computing is revolutionizing data processing and reducing latency for real-time applications.',
      category: 'innovation',
      author: 'Lisa Zhang',
      date: '2024-03-03',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Edge Computing', 'Cloud', 'Performance']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <motion.div
      className="min-h-screen bg-navy pt-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section ref={heroRef} className="py-32 px-4 relative">        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-space font-bold mb-8">
              <span className="bg-gradient-to-r from-electric via-gold to-neon-purple bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest insights, innovations, and trends 
              shaping the future of technology and business.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-dark-800/50 backdrop-blur-sm border-2 border-electric/30 rounded-xl text-white placeholder-gray-400 focus:border-electric focus:outline-none transition-all duration-300"
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-electric to-gold text-navy'
                      : 'bg-dark-800/50 text-gray-300 hover:text-white border border-electric/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorHover(true)}
                  onMouseLeave={() => setCursorHover(false)}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl font-space font-bold text-center mb-16"
            >
              Featured <span className="text-electric">Articles</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
                  className="group bg-gradient-to-br from-dark-800/50 to-charcoal/30 backdrop-blur-sm rounded-2xl border border-electric/20 hover:border-electric/50 overflow-hidden transition-all duration-500"
                  whileHover={{ y: -10, scale: 1.02 }}
                  onMouseEnter={() => setCursorHover(true)}
                  onMouseLeave={() => setCursorHover(false)}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-electric/20 backdrop-blur-sm rounded-full text-electric text-sm font-semibold border border-electric/30">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl font-space font-semibold text-white mb-4 group-hover:text-electric transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full border border-gold/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User size={16} />
                        {post.author}
                      </div>

                      <motion.button
                        className="group flex items-center gap-2 text-electric hover:text-gold transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="font-semibold">Read More</span>
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section ref={blogRef} className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={blogInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-space font-bold mb-4">
              Latest <span className="text-gold">Insights</span>
            </h2>
            <p className="text-lg text-gray-300">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={blogInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-dark-800/50 to-charcoal/30 backdrop-blur-sm rounded-2xl border border-electric/20 hover:border-electric/50 overflow-hidden transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-electric/20 backdrop-blur-sm rounded text-electric text-xs font-semibold border border-electric/30">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-space font-semibold text-white mb-3 group-hover:text-electric transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-electric/10 text-electric text-xs rounded border border-electric/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <User size={12} />
                      {post.author}
                    </div>

                    <motion.button
                      className="text-electric hover:text-gold transition-colors duration-300"
                      whileHover={{ x: 3 }}
                    >
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={blogInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <motion.button
                className="px-12 py-6 bg-gradient-to-r from-electric/20 to-gold/20 backdrop-blur-sm rounded-full border border-electric/30 hover:border-electric/60 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-electric/20"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                Load More Articles
              </motion.button>
            </motion.div>
          )}

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={blogInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-space font-semibold text-white mb-4">
                No Articles Found
              </h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search terms or category filter.
              </p>
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-8 py-4 bg-gradient-to-r from-electric to-gold text-navy font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;