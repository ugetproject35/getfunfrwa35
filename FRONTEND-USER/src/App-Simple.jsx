import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Inline styles as backup
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  header: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 50,
    display: 'flex',
    height: '90px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
    padding: '0 24px'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  userImg: {
    height: '40px',
    width: '40px',
    borderRadius: '50%'
  },
  title: {
    background: 'linear-gradient(to right, #ffe665, #d29729)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  main: {
    flex: 1,
    paddingBottom: '80px'
  },
  footer: {
    position: 'sticky',
    bottom: 0,
    left: 0,
    display: 'flex',
    height: '75px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid #404040',
    backgroundColor: '#000000'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around'
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#ffffff'
  },
  navIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px'
  },
  navIconActive: {
    background: 'linear-gradient(to right, #ffe665, #d29729)'
  },
  navIconInactive: {
    backgroundColor: '#666666'
  },
  navText: {
    fontSize: '12px'
  },
  navTextActive: {
    color: '#ffe665'
  },
  navTextInactive: {
    color: '#999999'
  },
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#ffffff',
    paddingBottom: '80px'
  },
  pageContent: {
    width: '100%',
    padding: '28px 24px'
  },
  pageTitle: {
    background: 'linear-gradient(to right, #ffe665, #d29729)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '32px'
  },
  card: {
    margin: '0 auto',
    display: 'flex',
    minHeight: '300px',
    width: '100%',
    maxWidth: '448px',
    flexDirection: 'column',
    borderRadius: '12px',
    border: '1px solid #d29729',
    padding: '24px',
    background: 'linear-gradient(to bottom, #252525, #252525)',
    marginBottom: '24px'
  },
  cardTitle: {
    background: 'linear-gradient(to right, #ffe665, #d29729)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px'
  },
  label: {
    color: '#aba7a7',
    marginBottom: '8px',
    fontSize: '14px'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#1a1a1a',
    border: '1px solid #404040',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '16px',
    outline: 'none'
  },
  button: {
    width: '100%',
    padding: '12px 24px',
    background: 'linear-gradient(to right, #ffe665, #d29729)',
    color: '#000000',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

const SimpleApp = () => {
  const [ref, setRef] = useState(() => new URLSearchParams(window.location.search).get('ref') || '');
  const [dep, setDep] = useState(10);
  const [roiAmt, setRoiAmt] = useState(1);
  const [nodeCnt, setNodeCnt] = useState(1);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <img src="/src/assets/img/user.png" alt="User" style={styles.userImg} />
          <div style={styles.title}>GetFund – User</div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.pageContent}>
          <div style={styles.pageTitle}>DeFi Investment Platform</div>
          
          {/* Deposit Section */}
          <div style={styles.card}>
            <div style={styles.cardTitle}>入金</div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>推薦人地址：</label>
              <input 
                style={styles.input}
                value={ref} 
                onChange={e => setRef(e.target.value)}
                placeholder="0xReferrerAddress"
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>入金金額（USDT）：</label>
              <input 
                style={styles.input}
                type="number"
                min="10"
                step="10"
                value={dep}
                onChange={e => setDep(Number(e.target.value))}
              />
            </div>
            <button style={styles.button}>入金</button>
          </div>

          {/* ROI Section */}
          <div style={styles.card}>
            <div style={styles.cardTitle}>領取 ROI</div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>提領金額（USDT）：</label>
              <input 
                style={styles.input}
                type="number"
                min="1"
                step="1"
                value={roiAmt}
                onChange={e => setRoiAmt(Number(e.target.value))}
              />
            </div>
            <button style={styles.button}>領取</button>
          </div>

          {/* Node Section */}
          <div style={styles.card}>
            <div style={styles.cardTitle}>Node</div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>購買份數（每份 100 USDT）：</label>
              <input 
                style={styles.input}
                type="number"
                min="1"
                step="1"
                value={nodeCnt}
                onChange={e => setNodeCnt(Number(e.target.value))}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ ...styles.button, width: '50%' }}>購買</button>
              <button style={{ ...styles.button, width: '50%' }}>提現</button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <p style={{ color: '#aba7a7', fontSize: '14px', fontStyle: 'italic' }}>
              ※ 需先在錢包對 USDT 合約進行 approve。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SimpleApp;