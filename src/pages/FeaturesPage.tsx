import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Database, Cloud, Shield, Zap, Globe, ArrowRight } from 'lucide-react';

interface FeaturesPageProps {
  setCursorHover: (hover: boolean) => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ setCursorHover }) => {
  const [activeTab, setActiveTab] = useState(0);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const detailsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const detailsInView = useInView(detailsRef, { once: true });

  const featureCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Cpu,
      color: 'from-electric to-neon-blue',
      features: [
        'Advanced Neural Networks',
        'Real-time Data Processing',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Integration'
      ]
    },
    {
      title: 'Data Infrastructure',
      icon: Database,
      color: 'from-gold to-yellow-400',
      features: [
        'Distributed Database Systems',
        'Real-time Synchronization',
        'Advanced Query Optimization',
        'Data Lake Architecture',
        'Automated Backup & Recovery'
      ]
    },
    {
      title: 'Cloud Solutions',
      icon: Cloud,
      color: 'from-neon-purple to-purple-400',
      features: [
        'Multi-Cloud Deployment',
        'Serverless Architecture',
        'Auto-scaling Infrastructure',
        'Container Orchestration',
        'Edge Computing Network'
      ]
    },
    {
      title: 'Security Framework',
      icon: Shield,
      color: 'from-neon-green to-green-400',
      features: [
        'Zero-Trust Architecture',
        'End-to-end Encryption',
        'Biometric Authentication',
        'Threat Intelligence',
        'Compliance Automation'
      ]
    }
  ];

  const detailedFeatures = [
    {
      title: 'Quantum Processing Power',
      description: 'Harness the power of quantum computing for unprecedented computational capabilities.',
      icon: Zap,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      capabilities: ['100x faster processing', 'Complex problem solving', 'Advanced optimization']
    },
    {
      title: 'Global Network Architecture',
      description: 'Deploy across our worldwide infrastructure with intelligent load balancing.',
      icon: Globe,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      capabilities: ['99.99% uptime', 'Sub-second latency', 'Automatic failover']
    },
    {
      title: 'Intelligent Automation',
      description: 'AI-driven automation that learns and adapts to your workflow patterns.',
      icon: Cpu,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      capabilities: ['Smart workflow optimization', 'Predictive maintenance', 'Self-healing systems']
    }
  ];

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
                Features
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the cutting-edge capabilities that power the future of technology. 
              Our advanced features are designed to transform how you work, create, and innovate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      <section ref={featuresRef} className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
              Core <span className="bg-gradient-to-r from-gold via-electric to-neon-purple bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of technologies built for the modern digital landscape
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {featureCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <motion.button
                  key={category.title}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-electric to-gold text-navy'
                      : 'bg-dark-800/50 text-gray-300 hover:text-white border border-electric/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorHover(true)}
                  onMouseLeave={() => setCursorHover(false)}
                >
                  <CategoryIcon className="inline mr-2" size={20} />
                  {category.title}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              {(() => {
                const ActiveIcon = featureCategories[activeTab].icon;
                return (
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${featureCategories[activeTab].color} flex items-center justify-center mb-8`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <ActiveIcon className="text-navy" size={40} />
                  </motion.div>
                );
              })()}

              <h3 className="text-4xl font-space font-bold text-white mb-6">
                {featureCategories[activeTab].title}
              </h3>

              <div className="space-y-4">
                {featureCategories[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-dark-800/30 rounded-lg border border-electric/20 hover:border-electric/50 transition-all duration-300"
                    onMouseEnter={() => setCursorHover(true)}
                    onMouseLeave={() => setCursorHover(false)}
                  >
                    <div className="w-2 h-2 bg-electric rounded-full" />
                    <span className="text-gray-300 hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div className="relative" whileHover={{ scale: 1.02 }}>
              <div className="aspect-video rounded-2xl overflow-hidden border border-electric/30 bg-gradient-to-br from-dark-800/40 to-charcoal/20">
                {/* Replace video placeholder with a representative image and CTA */}
                <img
                  src={detailedFeatures[activeTab]?.image || 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200'}
                  alt={featureCategories[activeTab].title + ' preview'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-navy/60 backdrop-blur-md rounded-lg px-5 py-3 flex items-center gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{featureCategories[activeTab].title} Preview</h4>
                    <p className="text-sm text-gray-300">Explore key capabilities and see how they power your solutions.</p>
                  </div>
                  <button className="px-4 py-2 bg-electric text-navy font-semibold rounded-full hover:brightness-105 transition">Learn More</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features */}
      <section ref={detailsRef} className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
              Advanced <span className="bg-gradient-to-r from-neon-purple via-electric to-gold bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep dive into the sophisticated technologies that make our platform extraordinary
            </p>
          </motion.div>

          <div className="space-y-32">
            {detailedFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={detailsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric to-gold flex items-center justify-center mb-8"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <FeatureIcon className="text-navy" size={32} />
                    </motion.div>

                    <h3 className="text-4xl font-space font-bold text-white mb-6">
                      {feature.title}
                    </h3>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      {feature.capabilities.map((capability, capIndex) => (
                        <motion.div
                          key={capability}
                          initial={{ opacity: 0, x: -20 }}
                          animate={detailsInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: (index * 0.3) + (capIndex * 0.1) }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-electric to-gold rounded-full" />
                          <span className="text-gray-300">{capability}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric/20 to-gold/20 backdrop-blur-sm rounded-full border border-electric/30 hover:border-electric/60 transition-all duration-300"
                      whileHover={{ scale: 1.05, x: 10 }}
                      onMouseEnter={() => setCursorHover(true)}
                      onMouseLeave={() => setCursorHover(false)}
                    >
                      <span className="text-white font-semibold">Learn More</span>
                      <ArrowRight className="text-electric" size={20} />
                    </motion.button>
                  </div>

                  <motion.div
                    className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                    whileHover={{ scale: 1.02, y: -10 }}
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-electric/30">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-electric/20 via-transparent to-gold/20"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FeaturesPage;