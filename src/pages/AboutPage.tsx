import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

interface AboutPageProps {
  setCursorHover: (hover: boolean) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setCursorHover }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });

  const milestones = [
    { year: '2020', title: 'Foundation', description: 'Started with a vision to revolutionize technology', count: '1' },
    { year: '2021', title: 'Growth', description: 'Expanded team and launched first products', count: '50' },
    { year: '2022', title: 'Innovation', description: 'Breakthrough in AI and machine learning', count: '500' },
    { year: '2023', title: 'Global Reach', description: 'International expansion and partnerships', count: '5000' },
    { year: '2024', title: 'Future Vision', description: 'Leading the next wave of digital transformation', count: '50000' }
  ];

  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collective intelligence to solve complex challenges.',
      color: 'from-electric to-neon-blue'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters. We deliver solutions with unmatched accuracy and attention to detail.',
      color: 'from-gold to-yellow-400'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We set the highest standards and continuously strive to exceed expectations in everything we do.',
      color: 'from-neon-purple to-purple-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace change and constantly push boundaries to create breakthrough solutions.',
      color: 'from-neon-green to-green-400'
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
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-dark-900 opacity-50"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-space font-bold mb-8">
              <span className="bg-gradient-to-r from-electric via-gold to-neon-purple bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in the digital frontier, crafting tomorrow's solutions with today's innovation. 
              Our journey is defined by relentless pursuit of excellence and unwavering commitment to pushing technological boundaries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="text-4xl font-space font-bold mb-6 text-white">
                Our <span className="text-electric">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                To democratize cutting-edge technology and make it accessible to businesses worldwide. 
                We believe that innovation should empower everyone to achieve their boldest ambitions.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric mb-2">500+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">50+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-purple mb-2">25+</div>
                  <div className="text-sm text-gray-400">Countries Served</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-electric/20 via-gold/10 to-neon-purple/20 rounded-2xl backdrop-blur-sm border border-electric/30 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-4 border-electric border-t-transparent rounded-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
              Our <span className="bg-gradient-to-r from-gold via-electric to-neon-purple bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to global impact - witness our evolution through time
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric via-gold to-neon-purple opacity-30" />

            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <motion.div
                      className="p-8 bg-gradient-to-br from-dark-800/50 to-charcoal/30 backdrop-blur-sm rounded-2xl border border-electric/20 hover:border-electric/50 transition-all duration-500"
                      whileHover={{ scale: 1.05, y: -5 }}
                      onMouseEnter={() => setCursorHover(true)}
                      onMouseLeave={() => setCursorHover(false)}
                    >
                      <div className="text-4xl font-space font-bold text-electric mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-semibold text-white mb-4">{milestone.title}</h3>
                      <p className="text-gray-300 mb-4">{milestone.description}</p>
                      <div className="text-3xl font-bold text-gold">{milestone.count}+</div>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-r from-electric to-gold rounded-full border-4 border-navy z-10"
                      whileHover={{ scale: 1.5 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                    />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-space font-bold mb-6">
              Our <span className="bg-gradient-to-r from-neon-purple via-electric to-gold bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group text-center"
              >
                <motion.div
                  className="mb-8"
                  whileHover={{ y: -10, rotateY: 15 }}
                  onMouseEnter={() => setCursorHover(true)}
                  onMouseLeave={() => setCursorHover(false)}
                >
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:shadow-xl transition-all duration-500`}>
                    <value.icon className="text-navy" size={40} />
                  </div>
                  <h3 className="text-2xl font-space font-semibold text-white mb-4 group-hover:text-electric transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;