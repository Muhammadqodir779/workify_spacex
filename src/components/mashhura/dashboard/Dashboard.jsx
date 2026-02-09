import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
   
      <Sidebar />

   
      <main className="main-content">
      
        <header className="page-header">
          <h1 className="page-title">Dashboard</h1>
        </header>

        
        <div className="dashboard-content">
       
          <div className="dashboard-card profile-completion-card">
            <h3 className="card-title">Profile completed</h3>
            <div className="progress-container">
              <svg className="progress-ring" width="140" height="140">
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#c084fc', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle
                  className="progress-ring-bg"
                  cx="70"
                  cy="70"
                  r="60"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="10"
                />
                <circle
                  className="progress-ring-fill"
                  cx="70"
                  cy="70"
                  r="60"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="10"
                  strokeDasharray="377"
                  strokeDashoffset="283"
                  strokeLinecap="round"
                  transform="rotate(-90 70 70)"
                />
              </svg>
              <div className="progress-text">
                <span className="progress-percent">25%</span>
                <span className="progress-label">Complete</span>
              </div>
            </div>
            <p className="card-description">
              Complete all parts of your profile and increase your chances of finding a job
            </p>
          </div>

          {/* Profile Views Card */}
          <div className="dashboard-card profile-views-card">
            <div className="card-header">
              <h3 className="card-title">Profile views</h3>
              <div className="tab-buttons">
                <button className="tab-btn active">This week</button>
                <button className="tab-btn">This month</button>
              </div>
            </div>
            <div className="chart-container">
              <div className="bar-chart">
                <div className="bar-wrapper">
                  <div className="bar" style={{ height: '60%' }}></div>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ height: '45%' }}></div>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ height: '75%' }}></div>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ height: '55%' }}></div>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ height: '85%' }}></div>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ height: '95%' }}></div>
                </div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ height: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Offers Card */}
          <div className="dashboard-card job-offers-card">
            <div className="card-header">
              <h3 className="card-title">Job offers</h3>
              <div className="tab-buttons">
                <button className="tab-btn active">This week</button>
                <button className="tab-btn">This month</button>
              </div>
            </div>
            <div className="area-chart-container">
              <svg className="area-chart" viewBox="0 0 500 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#34d399', stopOpacity: 0.4 }} />
                    <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 0.05 }} />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d="M 0 120 Q 70 100, 140 110 T 280 85 T 420 70 L 500 90 L 500 200 L 0 200 Z"
                  fill="url(#areaGradient)"
                />
                {/* Line */}
                <path
                  d="M 0 120 Q 70 100, 140 110 T 280 85 T 420 70 L 500 90"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="3"
                />
              </svg>
              <div className="job-badge">
                <span>3 New job offers</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;