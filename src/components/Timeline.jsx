import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiClock } from 'react-icons/hi';
import './Timeline.css';

const TimelineComponent = ({ timeline }) => {
  return (
    <div className="timeline-container card">
      <h3 className="timeline-title">Product Journey Timeline</h3>
      <div className="timeline">
        {timeline.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <motion.div
              key={index}
              className={`timeline-item ${stage.status}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Icon size={20} />
                </div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4 className="timeline-stage">{stage.stage}</h4>
                  <div className="timeline-status">
                    {stage.status === 'completed' ? (
                      <HiCheckCircle className="status-icon completed" />
                    ) : (
                      <HiClock className="status-icon pending" />
                    )}
                    <span className="status-text">
                      {stage.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>
                
                <div className="timeline-details">
                  <div className="timeline-date">
                    {new Date(stage.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="timeline-location">{stage.location}</div>
                  <p className="timeline-description">{stage.details}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineComponent;