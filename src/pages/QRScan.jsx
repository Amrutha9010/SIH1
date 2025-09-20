import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { HiExclamationTriangle } from 'react-icons/hi2';

import { 
  HiQrcode, 
  HiCamera, 
  HiUpload, 
  HiRefresh,
  HiCheckCircle 
} from 'react-icons/hi';
import './QRScan.css';

const QRScan = () => {
  const [scanResult, setScanResult] = useState('');
  const [scanError, setScanError] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanMode, setScanMode] = useState('camera'); // 'camera' or 'upload'
  const navigate = useNavigate();
  const scannerRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (scanMode === 'camera' && isScanning) {
      startCameraScanner();
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
      }
    };
  }, [scanMode, isScanning]);

  const startCameraScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.clear().catch(console.error);
    }

    const scanner = new Html5QrcodeScanner(
      'qr-scanner',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
      },
      false
    );

    scanner.render(onScanSuccess, onScanError);
    scannerRef.current = scanner;
  };

  const onScanSuccess = (decodedText) => {
    setScanResult(decodedText);
    setScanError('');
    
    // Simulate processing
    setTimeout(() => {
      // Extract product ID from QR code or use the full string
      const productId = decodedText.includes('product') 
        ? decodedText.split('product=')[1] || decodedText
        : decodedText;
      
      navigate(`/provenance/${productId}`);
    }, 2000);

    if (scannerRef.current) {
      scannerRef.current.clear().catch(console.error);
      setIsScanning(false);
    }
  };

  const onScanError = (error) => {
    // Ignore frequent scan errors to avoid spam
    if (!error.includes('NotFoundException')) {
      setScanError('Unable to scan QR code. Please try again.');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setScanResult('');
      setScanError('');
      
      // Simulate file processing
      setTimeout(() => {
        // For demo purposes, simulate successful scan
        const mockProductId = 'AYUR_' + Date.now();
        setScanResult(mockProductId);
        setTimeout(() => {
          navigate(`/provenance/${mockProductId}`);
        }, 2000);
      }, 1500);
    }
  };

  const toggleScanning = () => {
    setIsScanning(!isScanning);
    setScanResult('');
    setScanError('');
  };

  const switchScanMode = (mode) => {
    setScanMode(mode);
    setScanResult('');
    setScanError('');
    setIsScanning(false);
    
    if (scannerRef.current) {
      scannerRef.current.clear().catch(console.error);
    }
  };

  return (
    <motion.div 
      className="qr-scan"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <motion.div 
          className="scan-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="scan-title">
            <HiQrcode className="title-icon" />
            Scan Product QR Code
          </h1>
          <p className="scan-subtitle">
            Discover the complete journey of your Ayurvedic product
          </p>
        </motion.div>

        <div className="scan-content">
          {/* Mode Selector */}
          <motion.div 
            className="mode-selector"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button 
              className={`mode-btn ${scanMode === 'camera' ? 'active' : ''}`}
              onClick={() => switchScanMode('camera')}
            >
              <HiCamera size={20} />
              Camera Scan
            </button>
            <button 
              className={`mode-btn ${scanMode === 'upload' ? 'active' : ''}`}
              onClick={() => switchScanMode('upload')}
            >
              <HiUpload size={20} />
              Upload Image
            </button>
          </motion.div>

          {/* Scanner Area */}
          <motion.div 
            className="scanner-container card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {scanMode === 'camera' ? (
              <div className="camera-scanner">
                {!isScanning ? (
                  <div className="scanner-placeholder">
                    <HiQrcode size={80} className="placeholder-icon" />
                    <h3>Ready to Scan</h3>
                    <p>Point your camera at the QR code on your product</p>
                    <button className="btn btn-primary" onClick={toggleScanning}>
                      <HiCamera size={20} />
                      Start Camera
                    </button>
                  </div>
                ) : (
                  <div className="scanner-active">
                    <div id="qr-scanner"></div>
                    <div className="scanner-overlay">
                      <div className="scan-frame">
                        <div className="scan-corners"></div>
                      </div>
                    </div>
                    <button className="btn btn-secondary stop-btn" onClick={toggleScanning}>
                      Stop Scanning
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="file-uploader">
                <div className="upload-area" onClick={() => fileInputRef.current?.click()}>
                  <HiUpload size={60} className="upload-icon" />
                  <h3>Upload QR Code Image</h3>
                  <p>Click to select or drag and drop your QR code image</p>
                  <button className="btn btn-primary">
                    <HiUpload size={20} />
                    Choose File
                  </button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </div>
            )}

            {/* Scan Result */}
            {scanResult && (
              <motion.div 
                className="scan-result success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HiCheckCircle size={24} />
                <div>
                  <h4>QR Code Detected!</h4>
                  <p>Redirecting to product information...</p>
                </div>
                <div className="loading-spinner"></div>
              </motion.div>
            )}

            {/* Scan Error */}
            {scanError && (
              <motion.div 
                className="scan-result error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HiExclamationTriangle size={24} />
                <div>
                  <h4>Scan Failed</h4>
                  <p>{scanError}</p>
                </div>
                <button className="btn btn-secondary" onClick={() => setScanError('')}>
                  <HiRefresh size={16} />
                  Try Again
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Instructions */}
          <motion.div 
            className="scan-instructions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Scanning Tips</h3>
            <div className="instructions-grid">
              <div className="instruction-item">
                <div className="instruction-icon">📱</div>
                <p>Hold your device steady</p>
              </div>
              <div className="instruction-item">
                <div className="instruction-icon">💡</div>
                <p>Ensure good lighting</p>
              </div>
              <div className="instruction-item">
                <div className="instruction-icon">🎯</div>
                <p>Center the QR code</p>
              </div>
              <div className="instruction-item">
                <div className="instruction-icon">📏</div>
                <p>Maintain proper distance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default QRScan;