import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Zap, Shield, Rocket, Globe, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  setCursorHover: (hover: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCursorHover }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience unprecedented speed with our cutting-edge technology that revolutionizes the way you work.",
      color: "from-electric to-neon-blue"
    },
    {
      icon: Shield,
      title: "Ultra Secure",
      description: "Military-grade security protocols ensure your data remains protected with quantum encryption standards.",
      color: "from-gold to-yellow-400"
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Pioneering solutions that push boundaries and redefine what's possible in the digital landscape.",
      color: "from-neon-purple to-purple-400"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Seamlessly scale across continents with our distributed infrastructure and intelligent load balancing.",
      color: "from-neon-green to-green-400"
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-navy relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-dark-900 opacity-90"
        />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-9xl font-space font-bold leading-tight">
              <span className="bg-gradient-to-r from-electric via-gold to-neon-purple bg-clip-text text-transparent">
                FUTURE
              </span>
              <br />
              <span className="text-white">TECH</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
          >
            Revolutionizing the digital landscape with{' '}
            <motion.span
              className="text-electric font-semibold cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
            >
              innovative solutions
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-electric/20 backdrop-blur-md rounded-lg p-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                AI-powered technology that adapts to your needs
              </motion.div>
            </motion.span>
            {' '}that push the boundaries of what's possible in the modern world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-electric to-neon-blue text-navy font-semibold rounded-full flex items-center gap-3 hover:shadow-lg hover:shadow-electric/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
              onClick={() => navigate('/features')}
            >
              Get Started
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>

            {/* Watch Demo removed per request */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-electric" size={32} />
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-32 px-4 relative">
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
              <span className="bg-gradient-to-r from-gold via-electric to-neon-purple bg-clip-text text-transparent">
                Core Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful capabilities that make our platform the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group p-8 bg-gradient-to-br from-dark-800/50 to-charcoal/30 backdrop-blur-sm rounded-2xl border border-electric/20 hover:border-electric/50 transition-all duration-500 hover:shadow-xl hover:shadow-electric/20"
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <feature.icon className="text-navy" size={32} />
                </motion.div>

                <h3 className="text-2xl font-space font-semibold mb-4 text-white group-hover:text-electric transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                <motion.div
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -20 }}
                  whileHover={{ x: 0 }}
                >
                  <ArrowRight className="text-electric" size={20} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="p-12 bg-gradient-to-br from-electric/10 via-gold/5 to-neon-purple/10 backdrop-blur-sm rounded-3xl border border-electric/30"
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-electric via-gold to-neon-purple bg-clip-text text-transparent">
                Transform
              </span>
              {' '}Your Future?
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of innovators who are already experiencing the power of next-generation technology.
            </p>

            <motion.button
              className="group px-12 py-6 bg-gradient-to-r from-electric to-gold text-navy font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-electric/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
              onClick={() => navigate('/contact')}
            >
              <motion.span
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                Start Your Journey
                <ArrowRight size={24} />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;