import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, Clock, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  setCursorHover: (hover: boolean) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCursorHover }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true });
  const infoInView = useInView(infoRef, { once: true });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@futuretech.com',
      description: 'Send us an email anytime and we\'ll get back to you within 24 hours.'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Speak directly with our team during business hours.'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Innovation Drive, Tech City, TC 12345',
      description: 'Come visit our headquarters and experience the future firsthand.'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      info: '25+ Countries Worldwide',
      description: 'We have offices and partners across the globe to serve you better.'
    }
  ];

  const offices = [
    { city: 'New York', country: 'USA', timezone: 'EST', status: 'open' },
    { city: 'London', country: 'UK', timezone: 'GMT', status: 'open' },
    { city: 'Tokyo', country: 'Japan', timezone: 'JST', status: 'closed' },
    { city: 'Sydney', country: 'Australia', timezone: 'AEST', status: 'closed' }
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
                Contact
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Let's connect and explore the possibilities together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-space font-bold text-white mb-6">
                Let's Start a <span className="text-electric">Conversation</span>
              </h2>
              <p className="text-lg text-gray-300">
                Tell us about your project and we'll get back to you with a personalized solution.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-dark-800/50 backdrop-blur-sm border-2 border-electric/30 rounded-xl text-white placeholder-gray-400 focus:border-electric focus:outline-none transition-all duration-300 group-hover:border-electric/50"
                    onMouseEnter={() => setCursorHover(true)}
                    onMouseLeave={() => setCursorHover(false)}
                    required
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric/20 to-gold/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                    layoutId="input-glow"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group relative"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-dark-800/50 backdrop-blur-sm border-2 border-electric/30 rounded-xl text-white placeholder-gray-400 focus:border-electric focus:outline-none transition-all duration-300 group-hover:border-electric/50"
                    onMouseEnter={() => setCursorHover(true)}
                    onMouseLeave={() => setCursorHover(false)}
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="group relative"
              >
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-dark-800/50 backdrop-blur-sm border-2 border-electric/30 rounded-xl text-white placeholder-gray-400 focus:border-electric focus:outline-none transition-all duration-300 group-hover:border-electric/50"
                  onMouseEnter={() => setCursorHover(true)}
                  onMouseLeave={() => setCursorHover(false)}
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="group relative"
              >
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-dark-800/50 backdrop-blur-sm border-2 border-electric/30 rounded-xl text-white placeholder-gray-400 focus:border-electric focus:outline-none transition-all duration-300 group-hover:border-electric/50 resize-none"
                  onMouseEnter={() => setCursorHover(true)}
                  onMouseLeave={() => setCursorHover(false)}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="group w-full px-8 py-4 bg-gradient-to-r from-electric to-gold text-navy font-bold rounded-xl hover:shadow-xl hover:shadow-electric/30 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                <span>Send Message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send size={20} />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-space font-bold text-white mb-6">
                Get in <span className="text-gold">Touch</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We're here to help you succeed. Choose the best way to reach us.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={infoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-6 bg-gradient-to-br from-dark-800/50 to-charcoal/30 backdrop-blur-sm rounded-2xl border border-electric/20 hover:border-electric/50 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onMouseEnter={() => setCursorHover(true)}
                  onMouseLeave={() => setCursorHover(false)}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric to-gold flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <info.icon className="text-navy" size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-electric transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-electric font-medium mb-2">{info.info}</p>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Global Offices */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-8 bg-gradient-to-br from-dark-800/50 to-charcoal/30 backdrop-blur-sm rounded-2xl border border-electric/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-electric" size={24} />
                <h3 className="text-2xl font-space font-semibold text-white">
                  Global Offices
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={infoInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="flex items-center justify-between p-3 bg-dark-800/30 rounded-lg"
                  >
                    <div>
                      <div className="text-white font-medium">{office.city}</div>
                      <div className="text-gray-400 text-sm">{office.timezone}</div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      office.status === 'open' ? 'bg-neon-green' : 'bg-gray-500'
                    }`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Chat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="p-6 bg-gradient-to-r from-electric/10 via-gold/5 to-neon-purple/10 backdrop-blur-sm rounded-2xl border border-electric/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="text-electric" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Need Quick Help?
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Start a live chat with our support team for immediate assistance.
              </p>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-electric to-gold text-navy font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
              >
                Start Live Chat
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;