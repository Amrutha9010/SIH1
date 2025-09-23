import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about.png';
import { 
  HiShieldCheck, 
  HiGlobeAlt, 
  HiUsers, 
  HiHeart,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowRight
} from 'react-icons/hi';
import './About.css';
import Footer from '../components/Footer';

const About = () => {
  // State must be defined first
  const [activeTeamMember, setActiveTeamMember] = useState(0);

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
      bio: "Creative designer passionate about crafting intuitive and engaging user experiences.",
      expertise: ["User Research", "Visual Design", "Prototyping"]
    },
    {
      name: "Chinni Novahu",
      role: "CTO and Backend Developer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Blockchain technology specialist focused on creating transparent and secure supply chains.",
      expertise: ["Blockchain", "Security", "System Architecture"]
    },
    {
      name: "Amrutha Chappa",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Creative designer passionate about crafting intuitive and engaging user experiences.",
      expertise: ["UI Design", "User Experience", "Wireframing"]
    },
    {
      name: "D.J.N.P. Keerthika",
      role: "CTO and Backend Developer",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Blockchain technology specialist focused on creating transparent and secure supply chains.",
      expertise: ["Backend Development", "API Design", "Database Management"]
    },
    {
      name: "Lokesh Gandhi Modalavalasa",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Creative designer passionate about crafting intuitive and engaging user experiences.",
      expertise: ["Frontend Development", "Responsive Design", "Animation"]
    },
    {
      name: "Arumalli VijayBabu",
      role: "CTO and Backend Developer",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Blockchain technology specialist focused on creating transparent and secure supply chains.",
      expertise: ["DevOps", "Cloud Infrastructure", "Security"]
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Auto-rotate team members
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamMember((prev) => (prev + 1) % team.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [team.length]);

  return (
    <>
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
    <section className="about-hero about-hero-bg">
  <div className="about-hero-bg-container">
    <img src={aboutImage} alt="Ayurvedic herbs background" className="about-hero-bg-image" />
    <div className="about-hero-overlay"></div>
  </div>
  <div className="container">
    <motion.div 
      className="about-hero-content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="about-hero-title">
        About <span className="text-gradient">TrustTrace</span>
      </h1>
      <p className="about-hero-description">
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
              <br /><br /><br />
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
                src="https://i.pinimg.com/1200x/2c/bd/b7/2cbdb7bdbb4d2f90d473db37ea090fd6.jpg" 
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Passionate individuals working to transform the Ayurvedic industry
            </p>
          </motion.div>
          
          {/* Simple Team Grid (Fallback if new design doesn't work) */}
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
                  <div className="member-expertise">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
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
                Have questions about TrustTrace? We'd love to hear from you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <HiMail className="contact-icon" />
                  <div>
                    <h4>Email Us</h4>
                    <p>contact@trusttrace.com</p>
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