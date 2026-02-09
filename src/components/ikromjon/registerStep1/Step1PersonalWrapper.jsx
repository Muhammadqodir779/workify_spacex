import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1Personal from './Step1PersonalWrapper';

const Step1PersonalWrapper = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userType: 'Talent',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'Male',
    birthDate: '',
    location: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goNext = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.password) newErrors.password = true;
    if (!formData.phone) newErrors.phone = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) navigate('/step2');
  };

  return (
    <div className="step-wrapper fade-in">
      <Step1Personal
        data={formData}
        onChange={handleChange}
        onSelect={handleSelect}
        errors={errors}
      />
      <div className="footer-nav">
        <div style={{ width: '120px' }}></div>
        <button className="btn btn-primary" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1PersonalWrapper;
