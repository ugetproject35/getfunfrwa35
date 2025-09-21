import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import PurchasePage from './pages/PurchasePage';
import ROIPage from './pages/ROIPage';
import NodePage from './pages/NodePage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/node" element={<NodePage />} />
          <Route path="/roi" element={<ROIPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}