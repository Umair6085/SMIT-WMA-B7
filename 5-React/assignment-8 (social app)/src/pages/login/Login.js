import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let user = { email, password };
    dispatch(login(user));
  };

  const handleRegister = () => {
    navigate('/signup');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form className="formData p-4">
            <h2 className="text-center mb-4">Login</h2>
            <div className="card py-3">
              <div className="card-body d-flex flex-column gap-2">
                
                <input
                  type="email"
                  className={`form-control m-1 ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                <input
                  type="password"
                  className={`form-control m-1 ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}

                <button type="submit" onClick={handleLogin} className="btn btn-primary mt-4">Login</button>
                <button type="button" onClick={handleRegister} className="btn btn-secondary mt-4">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
