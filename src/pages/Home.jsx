import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero2.png';
import {
  HiQrcode,
  HiShieldCheck,
  HiGlobeAlt,
  HiSparkles,
  HiTrendingUp,
  HiEye,
  HiHeart,
  HiPlay
} from 'react-icons/hi';
import { FaLeaf, FaSeedling, FaMountain, FaWater } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: HiShieldCheck,
      title: "Blockchain Transparency",
      description: "Every product journey is recorded on an immutable blockchain, ensuring complete transparency from farm to consumer.",
      color: "#10B981"
    },
    {
      icon: FaLeaf,
      title: "Sustainable Practices",
      description: "Supporting eco-friendly farming methods and fair trade practices that benefit both farmers and the environment.",
      color: "#059669"
    },
    {
      icon: HiEye,
      title: "Full Traceability",
      description: "Track your product's complete journey including harvest, processing, testing, and distribution stages.",
      color: "#047857"
    },
    {
      icon: HiHeart,
      title: "Farmer Stories",
      description: "Connect with the farmers behind your products and learn about their dedication to quality and sustainability.",
      color: "#EC4899"
    },
    {
      icon: MdOutlineScience,
      title: "Quality Assurance",
      description: "Access verified lab reports and quality certifications for every batch.",
      color: "#8B5CF6"
    },
    {
      icon: FaHandshake,
      title: "Fair Trade",
      description: "Support farmers with fair wages and ethical trading practices.",
      color: "#F59E0B"
    },
  ];

  const stats = [
    { number: "10,000+", label: "Products Tracked", icon: HiTrendingUp },
    { number: "500+", label: "Partner Farmers", icon: FaSeedling },
    { number: "25+", label: "Countries Served", icon: HiGlobeAlt },
    { number: "99.9%", label: "Authenticity Rate", icon: HiSparkles }
  ];

  const journeySteps = [
    { icon: FaSeedling, title: "Seed Sourcing", description: "Ethically sourced seeds from trusted suppliers" },
    { icon: FaMountain, title: "Organic Farming", description: "Grown in pristine natural environments" },
    { icon: MdOutlineScience, title: "Quality Testing", description: "Rigorous laboratory testing and verification" },
    { icon: HiShieldCheck, title: "Blockchain Recording", description: "Immutable record creation on blockchain" },
    { icon: HiQrcode, title: "QR Code Generation", description: "Unique tracking code for each product" },
    { icon: FaWater, title: "Sustainable Packaging", description: "Eco-friendly packaging and distribution" }
  ];

  return (
    <>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg-container">
            <img src={heroImage} alt="Ayurvedic herbs background" className="hero-bg-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-background">
            <div className="hero-gradient"></div>
            <div className="hero-pattern"></div>
          </div>
          
          <div className="container">
            <div className="hero-content">
              <motion.div
                className="hero-text"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {/* <motion.div
                  className="badge"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <HiSparkles className="badge-icon" />
                  Trusted by 50K+ Customers
                </motion.div> */}

                <h1 className="hero-title">
                  <span className="title-line">Experience Pure</span>
                  <span className="title-gradient">Ayurvedic Transparency</span>
                  <span className="title-line">From Farm to Soul</span>
                </h1>

                <p className="hero-description">
                  Discover the complete journey of your Ayurvedic products with blockchain-powered transparency. 
                  Every herb, every process, every story - verified and traceable.
                </p>
                <br/>
                <div className="hero-actions">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/scan" className="btn btn-primary">
                      <HiQrcode className="btn-icon" />
                      Scan Product QR
                      <div className="btn-shine"></div>
                    </Link>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/about" className="btn btn-secondary">
                      <HiPlay className="btn-icon" />
                      Watch Story
                    </Link>
                  </motion.div>
                </div>

                {/* <div className="hero-stats">
                  {stats.slice(0, 2).map((stat, index) => (
                    <motion.div
                      key={index}
                      className="hero-stat"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-badge">Why Choose Us</div>
              <h2 className="section-title">Revolutionizing Ayurvedic Trust</h2>
              <p className="section-subtitle">
                Combining ancient wisdom with modern technology for complete peace of mind
              </p>
            </motion.div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div 
                    className="feature-icon-wrapper"
                    style={{ '--icon-color': feature.color }}
                  >
                    <feature.icon className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-hover-effect"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="journey">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-badge">The Journey</div>
              <h2 className="section-title">From Seed to Shelf</h2>
              <p className="section-subtitle">
                Follow your product's complete transparent journey
              </p>
            </motion.div>

            <div className="journey-steps">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="journey-step"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="step-icon">
                    <step.icon />
                  </div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="stats-background"></div>
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="cta-text">
                <h2>Ready to Experience True Transparency?</h2>
                <p>Scan any Ayurvedic product QR code to unlock its complete story and verification details.</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/scan" className="btn btn-primary btn-large">
                  <HiQrcode className="btn-icon" />
                  Start Your Verification Journey
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;