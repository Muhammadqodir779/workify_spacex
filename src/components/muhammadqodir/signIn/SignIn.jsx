import React, { useState } from 'react';
import './SignIn.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { loginTalent } from '../../../api/auth';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  // 🔹 LOGIN so‘rovi
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warning("Iltimos, bo'sh joylarni to'ldiring!", {
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await loginTalent(email, password);

      // ✅ Backend muvaffaqiyatli javob qaytarsa
      if (response.status === 200) {
        toast.success('Kirish muvaffaqiyatli bajarildi ✅', {
          autoClose: 2000,
        });

        // (Ixtiyoriy) Foydalanuvchi ma’lumotlarini saqlash
        localStorage.setItem('talent', JSON.stringify(response.data.talent));

        // 2 soniyadan keyin sahifaga yo‘naltirish
        setTimeout(() => {
          navigate('/dashboard'); // kerakli sahifangizga o‘zgartiring
        }, 2000);
      }
    } catch (error) {
      setError(true);

      if (error.response) {
        toast.error(error.response.data.message || 'Login muvaffaqiyatsiz 😕', {
          autoClose: 3000,
        });
      } else {
        toast.error('Serverga ulanib bo‘lmadi ❌', { autoClose: 3000 });
      }
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
      <Footer />
    </>
  );
};

export default SignIn;
