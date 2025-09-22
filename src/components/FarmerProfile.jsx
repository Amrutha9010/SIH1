import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiLocationMarker, 
  HiPhone, 
  HiClock, 
  HiTrendingUp,
  HiShieldCheck,
  HiStar 
} from 'react-icons/hi';
import './FarmerProfile.css';

const FarmerProfile = ({ farmer }) => {
  return (
    <motion.div 
      className="farmer-profile card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="profile-header">
        <div className="farmer-image">
          <img src="https://i.pinimg.com/736x/91/ac/57/91ac5704e2eda1ab1f504c7b03a9e455.jpg" alt={farmer.name} />
          <div className="verified-badge">
            <HiShieldCheck size={16} />
            Verified Farmer
          </div>
        </div>
        
        <div className="farmer-info">
          <h2 className="farmer-name">{farmer.name}</h2>
          <div className="farmer-details">
            <div className="detail-item">
              <HiLocationMarker className="detail-icon" />
              <span>{farmer.location}</span>
            </div>
            <div className="detail-item">
              <HiClock className="detail-icon" />
              <span>{farmer.experience} Experience</span>
            </div>
            <div className="detail-item">
              <HiTrendingUp className="detail-icon" />
              <span>{farmer.farmSize} Farm</span>
            </div>
            <div className="detail-item">
              <HiPhone className="detail-icon" />
              <span>{farmer.contact}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-content">
        {/* Farmer Story */}
        <div className="farmer-story">
          <h3>Farmer's Story</h3>
          <p>{farmer.story}</p>
        </div>

        {/* Certifications */}
        <div className="certifications">
          <h3>Certifications</h3>
          <div className="certification-badges">
            {farmer.certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <HiShieldCheck className="cert-icon" />
                <span>{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Farming Practices */}
        <div className="farming-practices">
          <h3>Sustainable Practices</h3>
          <div className="practices-grid">
            <div className="practice-item">
              <div className="practice-icon">🌱</div>
              <div className="practice-content">
                <h4>Organic Farming</h4>
                <p>No synthetic pesticides or fertilizers used</p>
              </div>
            </div>
            
            <div className="practice-item">
              <div className="practice-icon">💧</div>
              <div className="practice-content">
                <h4>Water Conservation</h4>
                <p>Drip irrigation and rainwater harvesting</p>
              </div>
            </div>
            
            <div className="practice-item">
              <div className="practice-icon">🔄</div>
              <div className="practice-content">
                <h4>Crop Rotation</h4>
                <p>Maintains soil health and prevents pests</p>
              </div>
            </div>
            
            <div className="practice-item">
              <div className="practice-icon">🌿</div>
              <div className="practice-content">
                <h4>Natural Composting</h4>
                <p>Farm waste converted to organic fertilizer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="quality-metrics">
          <h3>Quality Metrics</h3>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">98%</div>
              <div className="metric-label">Quality Score</div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '98%' }}></div>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">5.0</div>
              <div className="metric-label">
                <span>Customer Rating</span>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="star filled" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">100%</div>
              <div className="metric-label">Organic Certified</div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Impact */}
        <div className="community-impact">
          <h3>Community Impact</h3>
          <div className="impact-stats">
            <div className="impact-item">
              <div className="impact-number">50+</div>
              <div className="impact-text">Local Jobs Created</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">15</div>
              <div className="impact-text">Years of Fair Trade</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">25%</div>
              <div className="impact-text">Carbon Footprint Reduced</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FarmerProfile;