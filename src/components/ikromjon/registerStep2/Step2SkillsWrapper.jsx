import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step2Skills from './Step2SkillsWrapper';

const Step2SkillsWrapper = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    skills: [{ name: '', exp: '' }],
    languages: [{ name: '', level: '' }],
    occupation: '',
    specialty: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (Array.isArray(formData[name])) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addSkill = () =>
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { name: '', exp: '' }],
    }));
  const removeSkill = (index) =>
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  const addLanguage = () =>
    setFormData((prev) => ({
      ...prev,
      languages: [...prev.languages, { name: '', level: '' }],
    }));
  const removeLanguage = (index) =>
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index),
    }));

  const validateStep = () => {
    let newErrors = {};
    if (!formData.occupation) newErrors.occupation = true;
    const filledSkills = formData.skills.filter(
      (s) => s.name && s.name.trim() !== ''
    );
    if (filledSkills.length === 0) {
      newErrors.skills = true;
      alert('Kamida bitta skill kiriting!');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (validateStep()) navigate('/step3');
  };
  const goBack = () => navigate('/step1');

  return (
    <div className="step-wrapper fade-in">
      <div>
        <Step2Skills
          data={formData}
          onChange={handleChange}
          addSkill={addSkill}
          removeSkill={removeSkill}
          addLanguage={addLanguage}
          removeLanguage={removeLanguage}
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

export default Step2SkillsWrapper;
