import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1Personal from './Step1Personal';
import Step2Skills from './Step2Skills';
import Step3Preferences from './Step3Preferences';
import Step4Finish from './Step4Finish';
import '../styles/Step1Person.css';
import '../styles/Step2Skills.css';
import '../styles/Step3Preferences.css';
import '../styles/Step4Finish.css';
// import './Header.css';
// import './Footer.css';

import Step1Personal from '../registerStep1/Step1PersonalWrapper';
import Step2Skills from '../registerStep2/Step2SkillsWrapper';
import Step3Preferences from '../registerStep3/Step3PreferencesWrapper';
import Step4Finish from '../registerStep4/Step4FinishWrapper';
import '../styles/App.css';

const RegistrationWizard = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(2);
  const [errors, setErrors] = useState({});
  const [telegramCode, setTelegramCode] = useState('');
  const [loading, setLoading] = useState(false);

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
    occupation: '',
    specialty: '',
    skills: [{ name: '', exp: '' }],
    languages: [{ name: '', level: '' }],
    employmentType: 'Full time',
    workplaceType: 'Onsite',
    salary: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSelect = (name, value) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  // -------- SKILLS --------
  const addSkill = () =>
    setFormData((prev) => ({
      ...prev,
      skills: [{ name: '', exp: '' }, ...prev.skills],
    }));

  const removeSkill = (index) =>
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));

  // -------- LANGUAGES --------
  const addLanguage = () =>
    setFormData((prev) => ({
      ...prev,
      languages: [{ name: '', level: '' }, ...prev.languages],
    }));

  const removeLanguage = (index) =>
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index),
    }));

  // -------- VALIDATION --------
  const validateStep = () => {
    let newErrors = {};

    if (step === 2) {
      const validSkills = formData.skills.filter(
        (s) => s.name && s.name.trim() !== ''
      );

      if (validSkills.length === 0) {
        newErrors.skills = true;
        alert('Kamida bitta skill kiriting!');
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // -------- FINISH --------
  const handleFinish = async () => {
    if (telegramCode.length !== 6) return;

    setLoading(true);
    try {
      const res = await fetch(
        'https://telegrambot-c32w.onrender.com/api/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            verifyCode: telegramCode,
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: formData.userType,
          }),
        }
      );

      const data = await res.json();
      if (data.success) navigate('/success');
      else alert(data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wizard-card fade-in">
      {step === 1 && (
        <Step1Personal
          data={formData}
          onChange={handleChange}
          onSelect={handleSelect}
          errors={errors}
        />
      )}
      {step === 2 && (
        <Step2Skills
          data={formData}
          onChange={handleChange}
          addSkill={addSkill}
          removeSkill={removeSkill}
          addLanguage={addLanguage}
          removeLanguage={removeLanguage}
          errors={errors}
        />
      )}
      {step === 3 && (
        <Step3Preferences
          data={formData}
          onChange={handleChange}
          onSelect={handleSelect}
          errors={errors}
        />
      )}
      {step === 4 && <Step4Finish onCodeChange={setTelegramCode} />}

      <div className="footer-nav">
        {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
        {step < 4 ? (
          <button onClick={() => validateStep() && setStep(step + 1)}>
            Next
          </button>
        ) : (
          <button disabled={loading} onClick={handleFinish}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default RegistrationWizard;
