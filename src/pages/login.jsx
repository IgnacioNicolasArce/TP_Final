// /pages/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';

const Login = () => {
  return (
    <div className="form-container">
      <div className="form">
        <h2 className="form-title">Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-input" />
          </div>
          <button type="submit" className="button">Iniciar Sesión</button>
        </form>
        <p className="text-center text-sm text-gray mt-4">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="link">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

