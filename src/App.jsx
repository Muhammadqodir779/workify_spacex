import React from 'react';
import './App.css';
import Mashhura from './components/mashhura/Mashhura';
import SignIn from './components/muhammadqodir/signIn/SignIn';
import Muhammadyusuf from './components/muhammadyusuf/Muhammadyusuf';
import Ikromjon from './components/ikromjon/Ikromjon';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Mashhura />
      <Routes>
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
      <Muhammadyusuf />
      <Ikromjon />
    </div>
  );
};

export default App;
