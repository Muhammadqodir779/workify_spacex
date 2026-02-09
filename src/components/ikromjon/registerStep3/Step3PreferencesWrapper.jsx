import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step3Preferences from './Step3PreferencesWrapper';

const Step3PreferencesWrapper = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employmentType: 'Full time',
    workplaceType: 'Onsite',
    salary: '',
    city: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name, value) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const goNext = () => {
    let newErrors = {};
    if (!formData.city) newErrors.city = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) navigate('/step4');
  };
  const goBack = () => navigate('/step2');

  return (
    <div className="step-wrapper fade-in">
      <div>
        <Step3Preferences
          data={formData}
          onChange={handleChange}
          onSelect={handleSelect}
          errors={errors}
        />
        <div className="footer-nav">
          <button className="btn btn-outline" onClick={goBack}>
            Back
          </button>
          <button className="btn btn-primary" onClick={goNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3PreferencesWrapper;
