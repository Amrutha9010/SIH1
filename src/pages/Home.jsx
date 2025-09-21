import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiQrcode,
  HiShieldCheck,
  HiGlobeAlt,
  HiSparkles,
  HiTrendingUp,
  HiEye,
  HiHeart
} from 'react-icons/hi';
import { FaLeaf } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: HiShieldCheck,
      title: "Blockchain Transparency",
      description:
        "Every product journey is recorded on an immutable blockchain, ensuring complete transparency from farm to consumer."
    },
    {
      icon: FaLeaf, // replaced HiLeaf with FaLeaf
      title: "Sustainable Practices",
      description:
        "Supporting eco-friendly farming methods and fair trade practices that benefit both farmers and the environment."
    },
    {
      icon: HiEye,
      title: "Full Traceability",
      description:
        "Track your product's complete journey including harvest, processing, testing, and distribution stages."
    },
    {
      icon: HiHeart,
      title: "Farmer Stories",
      description:
        "Connect with the farmers behind your products and learn about their dedication to quality and sustainability."
    },
    {
      icon: MdOutlineScience,
      title: "Quality Assurance",
      description:
        "Access verified lab reports and quality certifications for every batch."
    },
    {
      icon: FaHandshake,
      title: "Fair Trade",
      description:
        "Support farmers with fair wages and ethical trading practices."
    },
  ];

  const stats = [
    { number: "10,000+", label: "Products Tracked" },
    { number: "500+", label: "Partner Farmers" },
    { number: "25+", label: "Countries Served" },
    { number: "99.9%", label: "Authenticity Rate" }
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
      <section className="hero gradient-bg">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                <span className="text-gradient">Transparency</span> in Every
                <br />
                <span className="text-gradient">Drop</span> of Ayurveda
              </h1>
              <p className="hero-description">
                Discover the complete journey of your Ayurvedic products with
                blockchain-powered transparency. From farm to pharmacy, every
                step is verified and traceable.
              </p><br/>
              <div className="hero-actions">
                <Link to="/scan" className="btn btn-primary">
                  <HiQrcode size={20} />
                  Scan Product QR
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="qr-mockup">
                <div className="qr-code bounce">
                  <HiQrcode size={120} />
                </div>
                <div className="scan-line"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose AyurChain?</h2>
            <p className="section-subtitle">
              Experience the future of Ayurvedic product transparency and trust
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats gradient-bg">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-number text-gradient">{stat.number}</div>
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
            className="cta-content card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-text">
              <h2>Ready to Verify Your Product?</h2>
              <p>
                Simply scan the QR code on your Ayurvedic product to see its
                complete journey from farm to your hands.
              </p>
            </div>
            <Link to="/scan" className="btn btn-primary">
              <HiQrcode size={20} />
              Start Scanning
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
    <Footer />
    </>
  );
};

export default Home;
