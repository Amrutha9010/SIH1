import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiShieldCheck,  
  HiGlobeAlt, 
  HiHeart,
  HiStar,
  HiTrendingUp
} from 'react-icons/hi';
import { HiOutlineGlobeAlt } from "react-icons/hi2";

import './SustainabilityBadges.css';

const SustainabilityBadges = ({ data }) => {
  const getBadgeIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'usda organic':
        return HiOutlineGlobeAlt;
      case 'fair trade':
        return HiHeart;
      case 'carbon neutral':
        return HiGlobeAlt;
      case 'rainforest alliance':
        return HiStar;
      default:
        return HiShieldCheck;
    }
  };

  const getBadgeColor = (name, verified) => {
    if (!verified) return 'gray';
    
    switch (name.toLowerCase()) {
      case 'usda organic':
        return 'green';
      case 'fair trade':
        return 'blue';
      case 'carbon neutral':
        return 'teal';
      case 'rainforest alliance':
        return 'orange';
      default:
        return 'green';
    }
  };

  return (
    <div className="sustainability-section">
      {/* Certifications */}
      <motion.div 
        className="certifications-container card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="section-title">
          <HiShieldCheck className="title-icon" />
          Sustainability Certifications
        </h3>
        
        <div className="badges-grid">
          {data.certifications.map((cert, index) => {
            const IconComponent = getBadgeIcon(cert.name);
            const color = getBadgeColor(cert.name, cert.verified);
            
            return (
              <motion.div
                key={index}
                className={`certification-badge ${color} ${cert.verified ? 'verified' : 'not-verified'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="badge-icon">
                  <IconComponent size={24} />
                </div>
                
                <div className="badge-content">
                  <h4 className="badge-name">{cert.name}</h4>
                  <div className="badge-status">
                    {cert.verified ? (
                      <>
                        <HiShieldCheck className="status-icon verified" />
                        <span className="status-text verified">Verified</span>
                      </>
                    ) : (
                      <>
                        <div className="status-icon pending"></div>
                        <span className="status-text pending">Pending</span>
                      </>
                    )}
                  </div>
                </div>
                
                {cert.verified && (
                  <div className="verification-mark">✓</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Environmental Metrics */}
      <motion.div 
        className="metrics-container card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="section-title">
          <HiTrendingUp className="title-icon" />
          Environmental Impact Metrics
        </h3>
        
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">
              <span>🌱</span>
            </div>
            <div className="metric-content">
              <h4>Carbon Footprint</h4>
              <div className="metric-value">{data.metrics.carbonFootprint}</div>
              <div className="metric-label">per unit produced</div>
              <div className="metric-bar">
                <div className="metric-fill green" style={{ width: '75%' }}></div>
              </div>
              <div className="metric-comparison">25% below industry average</div>
            </div>
          </div>
          
          <div className="metric-card">
            <div className="metric-icon">
              <span>💧</span>
            </div>
            <div className="metric-content">
              <h4>Water Usage</h4>
              <div className="metric-value">{data.metrics.waterUsage}</div>
              <div className="metric-label">in production process</div>
              <div className="metric-bar">
                <div className="metric-fill blue" style={{ width: '60%' }}></div>
              </div>
              <div className="metric-comparison">40% reduction achieved</div>
            </div>
          </div>
          
          <div className="metric-card highlight">
            <div className="metric-icon">
              <span>⭐</span>
            </div>
            <div className="metric-content">
              <h4>Sustainability Score</h4>
              <div className="metric-value large">{data.metrics.sustainabilityScore}/100</div>
              <div className="metric-label">overall rating</div>
              <div className="score-bar">
                <div 
                  className="score-fill" 
                  style={{ width: `${data.metrics.sustainabilityScore}%` }}
                ></div>
              </div>
              <div className="score-grade">Grade: A+</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Impact Summary */}
      <motion.div 
        className="impact-summary card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="section-title">
          <HiGlobeAlt className="title-icon" />
          Positive Impact Highlights
        </h3>
        
        <div className="impact-items">
          <div className="impact-item">
            <div className="impact-icon">🌍</div>
            <div className="impact-content">
              <h4>Environmental Protection</h4>
              <p>Organic farming practices protect soil health and biodiversity while reducing chemical runoff.</p>
            </div>
          </div>
          
          <div className="impact-item">
            <div className="impact-icon">👥</div>
            <div className="impact-content">
              <h4>Fair Labor Practices</h4>
              <p>Fair trade certification ensures farmers receive fair wages and work in safe conditions.</p>
            </div>
          </div>
          
          <div className="impact-item">
            <div className="impact-icon">♻️</div>
            <div className="impact-content">
              <h4>Sustainable Packaging</h4>
              <p>Biodegradable and recyclable packaging materials minimize environmental waste.</p>
            </div>
          </div>
          
          <div className="impact-item">
            <div className="impact-icon">🌱</div>
            <div className="impact-content">
              <h4>Carbon Neutral Production</h4>
              <p>Renewable energy usage and carbon offset programs achieve net-zero emissions.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SustainabilityBadges;