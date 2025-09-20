import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiDocument, 
  HiDownload, 
  HiEye, 
  HiCheckCircle,
  HiExclamationCircle,
  HiCalendar,
  HiBeaker,
  HiShieldCheck
} from 'react-icons/hi';
import './LabReports.css';

const LabReports = ({ reports }) => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'preview'

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'passed':
      case 'clear':
      case 'premium grade':
        return <HiCheckCircle className="status-icon success" />;
      case 'failed':
      case 'detected':
        return <HiExclamationCircle className="status-icon error" />;
      default:
        return <HiBeaker className="status-icon info" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'passed':
      case 'clear':
      case 'premium grade':
        return 'success';
      case 'failed':
      case 'detected':
        return 'error';
      default:
        return 'info';
    }
  };

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'quality':
        return '🏆';
      case 'safety':
        return '🛡️';
      case 'potency':
        return '⚡';
      default:
        return '📋';
    }
  };

  const mockPDFContent = (report) => {
    return (
      <div className="pdf-preview">
        <div className="pdf-header">
          <h3>{report.title}</h3>
          <div className="pdf-meta">
            <span>Report ID: {report.id.toString().padStart(6, '0')}</span>
            <span>Date: {new Date(report.date).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="pdf-content">
          <section className="test-summary">
            <h4>Test Summary</h4>
            <div className="summary-grid">
              <div className="summary-item">
                <strong>Sample ID:</strong> 
                <span>SAMPLE-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="summary-item">
                <strong>Testing Method:</strong> 
                <span>HPLC Analysis</span>
              </div>
              <div className="summary-item">
                <strong>Accreditation:</strong> 
                <span>ISO 17025:2017</span>
              </div>
              <div className="summary-item">
                <strong>Result:</strong> 
                <span className={`result ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
              </div>
            </div>
          </section>

          <section className="test-parameters">
            <h4>Test Parameters</h4>
            <div className="parameters-table">
              <div className="table-row header">
                <span>Parameter</span>
                <span>Result</span>
                <span>Limit</span>
                <span>Status</span>
              </div>
              
              {report.type === 'Quality' && (
                <>
                  <div className="table-row">
                    <span>Moisture Content</span>
                    <span>8.2%</span>
                    <span>≤10%</span>
                    <span className="result success">PASS</span>
                  </div>
                  <div className="table-row">
                    <span>Ash Content</span>
                    <span>5.8%</span>
                    <span>≤8%</span>
                    <span className="result success">PASS</span>
                  </div>
                  <div className="table-row">
                    <span>Foreign Matter</span>
                    <span>0.1%</span>
                    <span>≤2%</span>
                    <span className="result success">PASS</span>
                  </div>
                </>
              )}

              {report.type === 'Safety' && (
                <>
                  <div className="table-row">
                    <span>Organochlorine</span>
                    <span>Not Detected</span>
                    <span>≤0.01 ppm</span>
                    <span className="result success">CLEAR</span>
                  </div>
                  <div className="table-row">
                    <span>Organophosphorus</span>
                    <span>Not Detected</span>
                    <span>≤0.01 ppm</span>
                    <span className="result success">CLEAR</span>
                  </div>
                  <div className="table-row">
                    <span>Heavy Metals</span>
                    <span>Within Limits</span>
                    <span>As per USP</span>
                    <span className="result success">CLEAR</span>
                  </div>
                </>
              )}

              {report.type === 'Potency' && (
                <>
                  <div className="table-row">
                    <span>Curcumin Content</span>
                    <span>6.8%</span>
                    <span>≥3%</span>
                    <span className="result success">PREMIUM</span>
                  </div>
                  <div className="table-row">
                    <span>Essential Oils</span>
                    <span>4.2%</span>
                    <span>≥2%</span>
                    <span className="result success">HIGH</span>
                  </div>
                  <div className="table-row">
                    <span>Antioxidant Activity</span>
                    <span>92.5%</span>
                    <span>≥80%</span>
                    <span className="result success">EXCELLENT</span>
                  </div>
                </>
              )}
            </div>
          </section>

          <section className="certification">
            <div className="cert-badge">
              <HiShieldCheck size={24} />
              <span>Certified by Accredited Laboratory</span>
            </div>
            <p>
              This report is issued in accordance with ISO/IEC 17025:2017 standards 
              and is valid for regulatory compliance purposes.
            </p>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div className="lab-reports card">
      <div className="reports-header">
        <h3 className="reports-title">Laboratory Test Reports</h3>
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            List View
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'preview' ? 'active' : ''}`}
            onClick={() => setViewMode('preview')}
          >
            Preview Mode
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="reports-list">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              className="report-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="report-header">
                <div className="report-icon">
                  <span className="type-emoji">{getTypeIcon(report.type)}</span>
                  <HiDocument className="doc-icon" />
                </div>
                
                <div className="report-info">
                  <h4 className="report-title">{report.title}</h4>
                  <div className="report-meta">
                    <span className="report-date">
                      <HiCalendar size={14} />
                      {new Date(report.date).toLocaleDateString()}
                    </span>
                    <span className={`report-type ${report.type.toLowerCase()}`}>
                      {report.type}
                    </span>
                  </div>
                </div>
                
                <div className="report-status">
                  {getStatusIcon(report.status)}
                  <span className={`status-text ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                </div>
              </div>
              
              <div className="report-actions">
                <button 
                  className="action-btn preview-btn"
                  onClick={() => setSelectedReport(report)}
                >
                  <HiEye size={16} />
                  Preview
                </button>
                <button 
                  className="action-btn download-btn"
                  onClick={() => {
                    // Simulate download
                    alert('Downloading report...');
                  }}
                >
                  <HiDownload size={16} />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="preview-mode">
          <div className="preview-sidebar">
            <h4>Available Reports</h4>
            {reports.map((report) => (
              <button
                key={report.id}
                className={`preview-item ${selectedReport?.id === report.id ? 'active' : ''}`}
                onClick={() => setSelectedReport(report)}
              >
                <span className="preview-icon">{getTypeIcon(report.type)}</span>
                <div className="preview-info">
                  <span className="preview-title">{report.title}</span>
                  <span className="preview-date">
                    {new Date(report.date).toLocaleDateString()}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="preview-content">
            {selectedReport ? (
              mockPDFContent(selectedReport)
            ) : (
              <div className="no-selection">
                <HiDocument size={64} className="placeholder-icon" />
                <h4>Select a report to preview</h4>
                <p>Choose a report from the sidebar to view its contents</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Report Modal for List View */}
      <AnimatePresence>
        {selectedReport && viewMode === 'list' && (
          <motion.div
            className="report-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReport(null)}
          >
            <motion.div
              className="report-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedReport.title}</h3>
                <button 
                  className="close-btn"
                  onClick={() => setSelectedReport(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-content">
                {mockPDFContent(selectedReport)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LabReports;