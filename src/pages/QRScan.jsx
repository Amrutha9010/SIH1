import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, Scan, AlertCircle, Sparkles, Leaf, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { HiQrcode, HiShieldCheck, HiHeart } from 'react-icons/hi';
import { FaLeaf } from 'react-icons/fa';
import Footer from '../components/Footer';
import heroImage from '../assets/hero.png';
import './QRScan.css';

const QRScan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState('');
  const [manualCode, setManualCode] = useState('');
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const features = [
    {
      icon: <Shield size={24} />,
      title: "Immutable Records",
      description: "Every product's journey is securely stored on blockchain"
    },
    {
      icon: <Leaf size={24} />,
      title: "Authentic Herbs",
      description: "Verified organic sources with sustainable farming practices"
    },
    {
      icon: <Clock size={24} />,
      title: "Real-time Tracking",
      description: "Follow your product's journey from farm to shelf"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleScan = (qrCode) => {
    if (qrCode) {
      setError('');
      const batchId = qrCode.replace(/[^a-zA-Z0-9]/g, '') || 'demo-batch-123';
      navigate(`/provenance/${batchId}`);
    } else {
      setError('Invalid QR code. Please try again.');
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (manualCode.trim()) {
      handleScan(manualCode.trim());
    } else {
      setError('Please enter a batch code.');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        handleScan('uploaded-qr-batch-456');
      }, 2000);
    }
  };

  const startCamera = () => {
    setIsScanning(true);
    setError('');
    setTimeout(() => {
      setIsScanning(false);
      handleScan('camera-batch-789');
    }, 3000);
  };

  return (
    <>
      <div className="qr-scan-page">
        {/* ✅ Hero Section with background image */}
        <section className="hero-section">
          <div className="hero-bg-container">
            <img src={heroImage} alt="Ayurvedic herbs background" className="hero-bg-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="floating-elements">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
            <div className="floating-element element-4"></div>
          </div>

          {/* Floating herbs */}
          <div className="floating-herbs">
            <div className="herb herb-1"></div>
            <div className="herb herb-2"></div>
            <div className="herb herb-3"></div>
            <div className="herb herb-4"></div>
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <div className="qr-scan-container">
              {/* Header with Left Content and Right Scanner */}
              <div className="qr-scan-header-wrapper">
                {/* Left Side - Text Content */}
                <div className="qr-scan-header-left">
                  <header className="qr-scan-header">
                    <div className="title-sparkle">
                      <Sparkles className="sparkle-icon" />
                      <h1 className="qr-scan-title">Scan Your Product</h1>
                      <Sparkles className="sparkle-icon" />
                    </div>
                    <p className="qr-scan-subtitle">
                      Discover the complete journey of your Ayurvedic products with our blockchain-powered verification system
                    </p>
                  </header>

                  {/* Features Showcase */}
                  <div className="features-showcase">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`feature-item ${index === activeFeature ? 'active' : ''}`}
                      >
                        <div className="feature-icon">{feature.icon}</div>
                        <div className="feature-content">
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>      
              </div>
            </div>
            {/* Right Side - Scanner Component */}
                <motion.div
                  className="qr-scan-header-right"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <div className="scanner-visual-container">
                    <div className="main-qr-card">
                      <div className="qr-header">
                        <div className="qr-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="qr-content">
                        <HiQrcode className="qr-icon" />
                        <div className="qr-text">
                          <span>Scan to Verify</span>
                          <small>AyurChain Certified</small>
                        </div>
                      </div>
                      <div className="qr-glow"></div>
                    </div>

                    <div className="floating-cards">
                      <motion.div 
                        className="floating-card card-1"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaLeaf />
                        <span>Organic</span>
                      </motion.div>
                      <motion.div 
                        className="floating-card card-2"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      >
                        <HiShieldCheck />
                        <span>Verified</span>
                      </motion.div>
                      <motion.div 
                        className="floating-card card-3"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      >
                        <HiHeart />
                        <span>Fair Trade</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="main-content-section">
          <div className="qr-scan-container">
            {/* Camera + Upload Grid */}
            <div className="qr-scan-grid">
              {/* Camera Scanner */}
              <div className="qr-scan-card scan-card-left">
                <div className="card-glow"></div>
                <div className="qr-scan-card-content">
                  <div className="qr-scan-icon-container">
                    <Camera className="qr-scan-icon" />
                  </div>
                  <h3 className="qr-scan-card-title">Use Camera</h3>
                  <p className="qr-scan-card-description">
                    Point your camera at the QR code on your product packaging
                  </p>

                  {!isScanning ? (
                    <button onClick={startCamera} className="qr-scan-button primary">
                      Start Camera Scan
                    </button>
                  ) : (
                    <div className="qr-scanning-container">
                      <div className="qr-scanning-animation">
                        <Scan className="qr-scanning-icon" />
                        <p className="qr-scanning-text">Scanning for QR code...</p>
                        <div className="qr-scanning-progress">
                          <div className="qr-scanning-progress-bar"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Image */}
              <div className="qr-scan-card scan-card-right">
                <div className="card-glow"></div>
                <div className="qr-scan-card-content">
                  <div className="qr-scan-icon-container">
                    <Upload className="qr-scan-icon" />
                  </div>
                  <h3 className="qr-scan-card-title">Upload Image</h3>
                  <p className="qr-scan-card-description">
                    Upload a photo of the QR code if you can't use the camera
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    ref={fileInputRef}
                    className="qr-scan-file-input"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="qr-scan-button secondary"
                  >
                    Choose Image
                  </button>
                </div>
              </div>
            </div>

            {/* Manual Entry */}
            <div className="qr-scan-card manual-card">
              <div className="card-glow"></div>
              <h3 className="qr-scan-card-title text-center">Manual Entry</h3>
              <p className="qr-scan-card-description text-center">
                Enter the batch code manually if scanning isn't working
              </p>

              <form onSubmit={handleManualSubmit} className="qr-scan-form">
                <div className="qr-scan-form-group">
                  <input
                    type="text"
                    value={manualCode}
                    onChange={(e) => setManualCode(e.target.value)}
                    placeholder="Enter batch code (e.g., BT123456)"
                    className="qr-scan-input"
                  />
                  <button type="submit" className="qr-scan-button primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Error Message */}
            {error && (
              <div className="qr-scan-error">
                <AlertCircle className="qr-scan-error-icon" />
                <p className="qr-scan-error-text">{error}</p>
              </div>
            )}

            {/* Demo Button */}
            <div className="qr-scan-demo">
              <p className="qr-scan-demo-text">Want to see a demo?</p>
              <button
                onClick={() => handleScan('demo-batch-123')}
                className="qr-scan-demo-button"
              >
                View Demo Product
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default QRScan;