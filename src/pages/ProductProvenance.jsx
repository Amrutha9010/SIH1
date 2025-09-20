import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HiCheckCircle, 
  HiLocationMarker, 
  HiCalendar,
  HiUser,
  HiDocumentText,
  HiShieldCheck,
  HiStar,
  HiGlobeAlt,
  HiTruck,
  HiBeaker
} from 'react-icons/hi';
import { FaLeaf } from "react-icons/fa"; 
import TimelineComponent from '../components/Timeline';
import InteractiveMap from '../components/InteractiveMap';
import FarmerProfile from '../components/FarmerProfile';
import LabReports from '../components/LabReports';
import SustainabilityBadges from '../components/SustainabilityBadges';
import './ProductProvenance.css';

const ProductProvenance = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('timeline');

  useEffect(() => {
    // Simulate API call to fetch product data
    setTimeout(() => {
      setProductData(generateMockData(id));
      setLoading(false);
    }, 2000);
  }, [id]);

  const generateMockData = (productId) => {
    return {
      id: productId,
      name: "Organic Turmeric Powder",
      batchNumber: `BATCH-${productId.slice(-8)}`,
      productImage: "https://images.pexels.com/photos/2378795/pexels-photo-2378795.jpeg?auto=compress&cs=tinysrgb&w=400",
      manufacturer: "AyurVeda Naturals Pvt. Ltd.",
      manufactureDate: "2024-01-15",
      expiryDate: "2026-01-15",
      authenticity: "Verified",
      blockchainHash: "0x" + Math.random().toString(16).slice(2, 42),
      
      timeline: [
        {
          stage: "Harvest",
          date: "2024-01-10",
          location: "Erode, Tamil Nadu, India",
          status: "completed",
          icon: FaLeaf,
          details: "Organic turmeric harvested from certified organic farm"
        },
        {
          stage: "Collection",
          date: "2024-01-11",
          location: "Collection Center, Erode",
          status: "completed",
          icon: HiTruck,
          details: "Quality checked and collected at local center"
        },
        {
          stage: "Lab Testing",
          date: "2024-01-12",
          location: "Quality Labs, Chennai",
          status: "completed",
          icon: HiBeaker,
          details: "Comprehensive quality and purity tests conducted"
        },
        {
          stage: "Processing",
          date: "2024-01-13",
          location: "Processing Unit, Coimbatore",
          status: "completed",
          icon: HiShieldCheck,
          details: "Cleaned, dried, and processed under hygienic conditions"
        },
        {
          stage: "Packaging",
          date: "2024-01-14",
          location: "Packaging Unit, Coimbatore",
          status: "completed",
          icon: HiDocumentText,
          details: "Sealed in food-grade packaging with QR code"
        },
        {
          stage: "Distribution",
          date: "2024-01-15",
          location: "Distribution Center, Mumbai",
          status: "completed",
          icon: HiGlobeAlt,
          details: "Ready for shipment to retail outlets"
        }
      ],

      farmer: {
        name: "Rajesh Kumar",
        photo: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=300",
        location: "Erode, Tamil Nadu",
        experience: "15+ years",
        farmSize: "5 acres",
        story: "Third generation turmeric farmer committed to organic farming practices. Believes in sustainable agriculture and maintaining soil health for future generations.",
        certifications: ["NPOP Organic", "Fair Trade"],
        contact: "+91 98765 43210"
      },

      labReports: [
        {
          id: 1,
          title: "Purity Analysis Report",
          date: "2024-01-12",
          status: "Passed",
          type: "Quality",
          downloadUrl: "#"
        },
        {
          id: 2,
          title: "Pesticide Residue Test",
          date: "2024-01-12",
          status: "Clear",
          type: "Safety",
          downloadUrl: "#"
        },
        {
          id: 3,
          title: "Curcumin Content Analysis",
          date: "2024-01-12",
          status: "Premium Grade",
          type: "Potency",
          downloadUrl: "#"
        }
      ],

      sustainability: {
        certifications: [
          { name: "USDA Organic", verified: true },
          { name: "Fair Trade", verified: true },
          { name: "Carbon Neutral", verified: true },
          { name: "Rainforest Alliance", verified: false }
        ],
        metrics: {
          carbonFootprint: "2.3 kg CO2e",
          waterUsage: "145L per kg",
          sustainabilityScore: 92
        }
      },

      mapData: {
        locations: [
          { lat: 11.3410, lng: 77.7172, name: "Farm Location", type: "farm" },
          { lat: 11.3410, lng: 77.7172, name: "Collection Center", type: "collection" },
          { lat: 13.0827, lng: 80.2707, name: "Lab Testing", type: "lab" },
          { lat: 11.0168, lng: 76.9558, name: "Processing Unit", type: "processing" },
          { lat: 19.0760, lng: 72.8777, name: "Distribution Center", type: "distribution" }
        ],
        route: [
          { lat: 11.3410, lng: 77.7172 },
          { lat: 13.0827, lng: 80.2707 },
          { lat: 11.0168, lng: 76.9558 },
          { lat: 19.0760, lng: 72.8777 }
        ]
      }
    };
  };

  if (loading) {
    return (
      <div className="provenance-loading">
        <div className="loading-spinner large"></div>
        <p>Fetching product information from blockchain...</p>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="provenance-error">
        <h2>Product Not Found</h2>
        <p>The requested product information could not be retrieved.</p>
      </div>
    );
  }

  const tabs = [
    { id: 'timeline', label: 'Journey Timeline', icon: HiCalendar },
    { id: 'map', label: 'Location Map', icon: HiLocationMarker },
    { id: 'farmer', label: 'Farmer Profile', icon: HiUser },
    { id: 'reports', label: 'Lab Reports', icon: HiDocumentText }
  ];

  return (
    <motion.div 
      className="product-provenance"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        {/* Product Header */}
        <motion.div 
          className="product-header card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="product-image">
            <img src={productData.productImage} alt={productData.name} />
            <div className="authenticity-badge">
              <HiShieldCheck size={20} />
              Verified Authentic
            </div>
          </div>
          
          <div className="product-info">
            <h1 className="product-name">{productData.name}</h1>
            <div className="product-details">
              <div className="detail-item">
                <strong>Batch Number:</strong> {productData.batchNumber}
              </div>
              <div className="detail-item">
                <strong>Manufacturer:</strong> {productData.manufacturer}
              </div>
              <div className="detail-item">
                <strong>Manufacture Date:</strong> {new Date(productData.manufactureDate).toLocaleDateString()}
              </div>
              <div className="detail-item">
                <strong>Expiry Date:</strong> {new Date(productData.expiryDate).toLocaleDateString()}
              </div>
            </div>
            
            <div className="blockchain-info">
              <h3>Blockchain Verification</h3>
              <div className="hash-display">
                <span className="hash-label">Transaction Hash:</span>
                <span className="hash-value">{productData.blockchainHash}</span>
              </div>
              <div className="verification-status">
                <HiCheckCircle className="verified-icon" />
                <span>Verified on Ethereum Blockchain</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sustainability Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SustainabilityBadges data={productData.sustainability} />
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          className="provenance-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div 
          className="tab-content"
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'timeline' && <TimelineComponent timeline={productData.timeline} />}
          {activeTab === 'map' && <InteractiveMap mapData={productData.mapData} />}
          {activeTab === 'farmer' && <FarmerProfile farmer={productData.farmer} />}
          {activeTab === 'reports' && <LabReports reports={productData.labReports} />}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductProvenance;