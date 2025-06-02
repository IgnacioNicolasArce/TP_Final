import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';

const Register = () => {
  return (
    <div className="form-container">
      <div className="form">
        <h2 className="form-title">Registro</h2>
        <form>
          <div className="form-group">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Apellido</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-input" />
          </div>
          <button type="submit" className="button">Registrarse</button>
        </form>
        <p className="text-center text-sm text-gray mt-4">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="link">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register; 