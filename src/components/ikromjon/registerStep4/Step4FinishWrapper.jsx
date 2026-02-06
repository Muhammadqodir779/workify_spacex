import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step4Finish from './Step4Finish';

const Step4FinishWrapper = () => {
  const navigate = useNavigate();
  const [telegramCode, setTelegramCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFinish = async () => {
    if (!telegramCode || telegramCode.length !== 6) {
      alert("Iltimos, verify code-ni to'liq kiriting");
      return;
    }
    setLoading(true);
    try {
      // Bu yerga API call qo‘yish mumkin
      navigate('/success');
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => navigate('/step3');

  return (
    <div>
      <Step4Finish onCodeChange={setTelegramCode} />
      <div className="footer-nav">
        <button className="btn btn-outline" onClick={goBack}>Back</button>
        <button className="btn btn-primary" onClick={handleFinish} disabled={telegramCode.length < 6}>
          {loading ? "Sending..." : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default Step4FinishWrapper;
