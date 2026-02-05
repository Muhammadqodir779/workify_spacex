import React, { useState } from 'react';
import './SignIn.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../header/Header';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Iltimos, bo'sh joylarni to'ldiring!", {
        autoClose: 3000,
      });
      return;
    }

    // Misol uchun email va password tekshiruvi
    if (email === 'Forexaplae@mail.ru' && password === '12345') {
      navigate('/sign_in');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <ToastContainer position="top-center" />
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <div className={`input-box ${error ? 'error' : ''}`}>
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Forexaplae@mail.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label>Password</label>
            <div className={`input-box ${error ? 'error' : ''}`}>
              <FaLock className="icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="options">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <p
                className="forgot"
                onClick={() => navigate('/forgot_password')}
              >
                Forgot password?
              </p>
            </div>

            {error && <p className="error-text">Incorrect email or password</p>}

            <button type="submit" className="sign-in-btn">
              Sign in
            </button>

            <p className="register">
              Have no account yet?{' '}
              <span
                className="register-link"
                onClick={() => navigate('/register')}
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
