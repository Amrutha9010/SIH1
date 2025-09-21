// src/pages/QRScan.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, Scan, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';            // ← import your Footer
import './QRScan.css';
import '../components/Footer.jsx';

const QRScan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState('');
  const [manualCode, setManualCode] = useState('');
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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
        <div className="qr-scan-container">
          
          {/* Header */}
          <header className="qr-scan-header">
            <h1 className="qr-scan-title"><br/>Scan Your Product</h1>
            <p className="qr-scan-subtitle">
              Use your camera or upload a QR code image to discover the complete journey of your product
            </p>
          </header>

          {/* Camera + Upload Grid */}
          <div className="qr-scan-grid">
            {/* Camera Scanner */}
            <div className="qr-scan-card">
              <div className="qr-scan-card-content">
                <div className="qr-scan-icon-container">
                  <Camera className="qr-scan-icon" />
                </div>
                <h3 className="qr-scan-card-title">Use Camera</h3>
                <p className="qr-scan-card-description">
                  Point your camera at the QR code on your product packaging
                </p>

                {!isScanning ? (
                  <button
                    onClick={startCamera}
                    className="qr-scan-button primary"
                  >
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
            <div className="qr-scan-card">
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
                <button
                  type="submit"
                  className="qr-scan-button primary"
                >
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
      </div>

      <Footer />
    </>
  );
};

export default QRScan;
