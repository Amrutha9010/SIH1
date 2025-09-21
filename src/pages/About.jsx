import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiShieldCheck, 
  HiGlobeAlt, 
  HiUsers, 
  HiHeart,
  HiMail,
  HiPhone,
  HiLocationMarker
} from 'react-icons/hi';
import './About.css';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: HiShieldCheck,
      title: "Transparency",
      description: "We believe every consumer deserves to know the complete journey of their products."
    },
    {
      icon: HiGlobeAlt,
      title: "Sustainability",
      description: "Supporting eco-friendly practices and sustainable farming methods worldwide."
    },
    {
      icon: HiUsers,
      title: "Fair Trade",
      description: "Ensuring fair compensation and working conditions for farmers and workers."
    },
    {
      icon: HiHeart,
      title: "Quality",
      description: "Maintaining the highest standards of purity and authenticity in all products."
    }
  ];

  const team = [
    {
      name: "Arepalli Asha",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Creative designer passionate about crafting intuitive and engaging user experiences."
    },
    {
      name: "Chiini Novahu",
      role: "CTO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Blockchain technology specialist focused on creating transparent and secure supply chains."
    },
    {
      name: "Amrutha Chappa",
      role: "Head of Sustainability",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Environmental scientist dedicated to promoting sustainable agricultural practices."
    },
    {
      name: "D.J.N.P. Keerthika",
      role: "Farmer Relations Manager",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Connecting traditional farming wisdom with modern transparency technologies."
    },
    {
      name: "Lokesh Gandhi  Modalavalasa",
      role: "Head of Sustainability",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Environmental scientist dedicated to promoting sustainable agricultural practices."
    },
    {
      name: "Arumalli VijayBabu",
      role: "Head of Sustainability",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Environmental scientist dedicated to promoting sustainable agricultural practices."
    },
  ];

  return (
    <>
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="about-hero gradient-bg">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              About <span className="text-gradient">AyurChain</span>
            </h1>
            <p className="hero-description">
              Revolutionizing the Ayurvedic industry through blockchain-powered transparency, 
              connecting conscious consumers with authentic, traceable products from farm to pharmacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Mission</h2>
              <p>
                To create a transparent, sustainable, and trusted ecosystem for Ayurvedic products 
                by leveraging cutting-edge blockchain technology. We empower consumers with complete 
                visibility into their product's journey while ensuring fair compensation for farmers 
                and adherence to the highest quality standards.
              </p>
              <p>
                Through AyurChain, we're not just tracking products – we're building trust, 
                supporting communities, and preserving the integrity of ancient Ayurvedic wisdom 
                for future generations.
              </p>
            </motion.div>
            
            <motion.div 
              className="mission-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Ayurvedic herbs and traditional medicine"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values gradient-bg">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Passionate individuals working to transform the Ayurvedic industry
            </p>
          </motion.div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact gradient-bg">
        <div className="container">
          <motion.div 
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Have questions about AyurChain? We'd love to hear from you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <HiMail className="contact-icon" />
                  <div>
                    <h4>Email Us</h4>
                    <p>contact@ayurchain.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <HiPhone className="contact-icon" />
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <HiLocationMarker className="contact-icon" />
                  <div>
                    <h4>Visit Us</h4>
                    <p>123 Innovation Hub<br />Bangalore, India 560001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
    <Footer />
    </>
  );
};

export default About;