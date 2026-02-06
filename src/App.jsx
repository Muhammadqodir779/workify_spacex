import React from 'react';
import './App.css';
import Mashhura from './components/mashhura/Mashhura';
import SignIn from './components/muhammadqodir/signIn/SignIn';
// import Register from './components/ikromjon/Register/RegistrationWizard';
import RegisterStep1 from './components/ikromjon/registerStep1/Step1PersonalWrapper';
import RegisterStep2 from './components/ikromjon/registerStep2/Step2SkillsWrapper';
import RegisterStep3 from './components/ikromjon/registerStep3/Step3PreferencesWrapper';
import RegisterStep4 from './components/ikromjon/registerStep4/Step4FinishWrapper';
import Congratulations from './components/ikromjon/Congratulations/Congratulations';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mashhura />} />
        <Route path="/sign_in" element={<SignIn />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/registerStep1" element={<RegisterStep1 />} />
        <Route path="/registerStep2" element={<RegisterStep2 />} />
        <Route path="/registerStep3" element={<RegisterStep3 />} />
        <Route path="/registerStep4" element={<RegisterStep4 />} />
        <Route path="/congratulations" element={<Congratulations />} />
      </Routes>
    </div>
  );
};

export default App;
