import React from 'react';
import './App.css';
import Mashhura from './components/mashhura/Mashhura';
import SignIn from './components/muhammadqodir/signIn/SignIn';
import Muhammadyusuf from './components/muhammadyusuf/Muhammadyusuf';
import Ikromjon from './components/ikromjon/Ikromjon';

const App = () => {
  return (
    <div>
      <Mashhura />
      <SignIn />
      <Muhammadyusuf />
      <Ikromjon />
    </div>
  );
};

export default App;
