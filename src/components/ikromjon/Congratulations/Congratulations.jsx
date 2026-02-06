import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img from './images/img.png';

const Congratulations = () => {
  const navigate = useNavigate();

  return (
    <div className="finish-container fade-in" style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1 className="finish-title" style={{ fontSize: '32px', marginBottom: '10px' }}>Congratulations!</h1>
      <p className="finish-text" style={{ marginBottom: '30px' }}>
        Registration has been successfully completed. Welcome to Workify!
      </p>
      
      <div className="congrats-image" style={{ margin: '40px 0' }}>
      <img src={Img} alt="" />
      </div>

      <button 
        className="btn btn-green" 
        onClick={() => navigate('/')} 
        style={{ padding: '12px 40px', fontSize: '18px' }}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default Congratulations;