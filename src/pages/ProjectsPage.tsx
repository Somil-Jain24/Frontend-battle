import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Filter, ExternalLink, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  setCursorHover: (hover: boolean) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ setCursorHover }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'smart-offices', name: 'Smart Offices' },
    { id: 'residential', name: 'Residential' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Smart City Infrastructure',
      category: 'commercial',
      location: 'New York, USA',
      date: '2024',
      image: 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Revolutionary IoT-enabled smart city platform integrating traffic management, energy optimization, and citizen services.',
      technologies: ['IoT', 'AI', 'Cloud Computing', 'Big Data'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Autonomous Manufacturing Plant',
      category: 'industrial',
      location: 'Tokyo, Japan',
      date: '2024',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fully automated manufacturing facility with AI-driven quality control and predictive maintenance systems.',
      technologies: ['Robotics', 'Machine Learning', 'Computer Vision', 'Automation'],
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Next-Gen Office Complex',
      category: 'smart-offices',
      location: 'London, UK',
      date: '2023',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intelligent office building with adaptive lighting, climate control, and seamless collaboration technologies.',
      technologies: ['Smart Sensors', 'Building Automation', 'AR/VR', 'Unified Communications'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Sustainable Energy Grid',
      category: 'industrial',
      location: 'Berlin, Germany',
      date: '2024',
      image: 'https://images.pexels.com/photos/9799725/pexels-photo-9799725.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced renewable energy distribution system with AI-powered load balancing and storage optimization.',
      technologies: ['Renewable Energy', 'Grid Management', 'Energy Storage', 'Analytics'],
      status: 'In Progress'
    },
    {
      id: 5,
      title: 'Luxury Smart Residences',
      category: 'residential',
      location: 'Dubai, UAE',
      date: '2023',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium residential complex featuring AI concierge services, biometric security, and environmental automation.',
      technologies: ['Home Automation', 'Biometrics', 'AI Assistant', 'Security Systems'],
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Digital Healthcare Hub',
      category: 'commercial',
      location: 'Singapore',
      date: '2024',
      image: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Integrated healthcare facility with telemedicine capabilities, AI diagnostics, and patient monitoring systems.',
      technologies: ['Telemedicine', 'AI Diagnostics', 'Patient Monitoring', 'Data Analytics'],
      status: 'Planning'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'from-neon-green to-green-400';
      case 'In Progress': return 'from-electric to-neon-blue';
      case 'Planning': return 'from-gold to-yellow-400';
      default: return 'from-gray-400 to-gray-600';
    }
  };

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
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of groundbreaking projects that are reshaping industries 
              and setting new standards for innovation and excellence.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '50+', label: 'Countries Served' },
              { number: '98%', label: 'Success Rate' },
              { number: '24/7', label: 'Global Support' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 bg-gradient-to-br from-dark-800/50 to-charcoal/30 backdrop-blur-sm rounded-2xl border border-electric/20"
                whileHover={{ scale: 1.05, y: -5 }}
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                <div className="text-4xl font-space font-bold text-electric mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <div className="flex items-center gap-2 text-electric mb-4 w-full justify-center">
              <Filter size={20} />
              <span className="font-semibold">Filter Projects:</span>
            </div>
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-electric to-gold text-navy'
                    : 'bg-dark-800/50 text-gray-300 hover:text-white border border-electric/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                {filter.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-dark-800/50 to-charcoal/30 backdrop-blur-sm rounded-2xl border border-electric/20 hover:border-electric/50 overflow-hidden transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(project.status)} text-navy`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay Icons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      className="w-16 h-16 bg-electric/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-electric/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="text-electric" size={24} />
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {project.location}
                    </div>
                  </div>

                  <h3 className="text-2xl font-space font-semibold text-white mb-4 group-hover:text-electric transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-electric/10 text-electric text-xs rounded-full border border-electric/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="group flex items-center gap-3 text-electric hover:text-gold transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-semibold">View Project</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
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
              Load More Projects
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsPage;