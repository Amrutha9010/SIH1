import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiTruck, HiGlobeAlt } from 'react-icons/hi';
import './InteractiveMap.css';

const InteractiveMap = ({ mapData }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const getLocationIcon = (type) => {
    switch (type) {
      case 'farm': return '🌾';
      case 'collection': return '📦';
      case 'lab': return '🔬';
      case 'processing': return '⚙️';
      case 'distribution': return '🚛';
      default: return '📍';
    }
  };

  const getLocationColor = (type) => {
    switch (type) {
      case 'farm': return '#22c55e';
      case 'collection': return '#3b82f6';
      case 'lab': return '#f59e0b';
      case 'processing': return '#8b5cf6';
      case 'distribution': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="map-container card">
      <h3 className="map-title">Product Journey Map</h3>
      
      {/* Interactive Map Visualization */}
      <div className="map-visualization">
        <div className="map-svg">
          <svg viewBox="0 0 800 400" className="journey-map">
            {/* Route Line */}
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            
            <polyline
              points="100,300 200,200 400,150 600,100 700,50"
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="3"
              strokeDasharray="5,5"
              className="route-line"
            />
            
            {/* Location Points */}
            {mapData.locations.map((location, index) => {
              const x = 100 + (index * 150);
              const y = 300 - (index * 50);
              
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="20"
                    fill={getLocationColor(location.type)}
                    className="location-point"
                    onClick={() => setSelectedLocation(location)}
                    style={{ cursor: 'pointer' }}
                  />
                  <text
                    x={x}
                    y={y + 35}
                    textAnchor="middle"
                    className="location-label"
                    onClick={() => setSelectedLocation(location)}
                    style={{ cursor: 'pointer' }}
                  >
                    {location.name.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        
        {/* Location Details */}
        {selectedLocation && (
          <motion.div
            className="location-details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="location-header">
              <span className="location-emoji">{getLocationIcon(selectedLocation.type)}</span>
              <h4>{selectedLocation.name}</h4>
              <button 
                className="close-btn"
                onClick={() => setSelectedLocation(null)}
              >
                ×
              </button>
            </div>
            <div className="location-coords">
              <HiLocationMarker size={16} />
              <span>Lat: {selectedLocation.lat}, Lng: {selectedLocation.lng}</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Location Cards */}
      <div className="locations-grid">
        {mapData.locations.map((location, index) => (
          <motion.div
            key={index}
            className={`location-card ${selectedLocation === location ? 'selected' : ''}`}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedLocation(location)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="location-card-header">
              <div 
                className="location-indicator"
                style={{ backgroundColor: getLocationColor(location.type) }}
              >
                <span>{getLocationIcon(location.type)}</span>
              </div>
              <div className="location-info">
                <h4>{location.name}</h4>
                <p className="location-type">{location.type.replace('_', ' ').toUpperCase()}</p>
              </div>
            </div>
            
            <div className="location-coordinates">
              <HiLocationMarker size={14} />
              <span>{location.lat}, {location.lng}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Journey Statistics */}
      <div className="journey-stats">
        <div className="stat-item">
          <HiGlobeAlt className="stat-icon" />
          <div>
            <span className="stat-value">{mapData.locations.length}</span>
            <span className="stat-label">Locations</span>
          </div>
        </div>
        
        <div className="stat-item">
          <HiTruck className="stat-icon" />
          <div>
            <span className="stat-value">~2,500 km</span>
            <span className="stat-label">Distance Traveled</span>
          </div>
        </div>
        
        <div className="stat-item">
          <HiLocationMarker className="stat-icon" />
          <div>
            <span className="stat-value">6 days</span>
            <span className="stat-label">Total Journey Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;