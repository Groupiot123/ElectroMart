import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = 'Username is required';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 5) newErrors.password = 'Password must be at least 5 characters';
    else if (!/^.*(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/.test(form.password)) {
      newErrors.password = 'Password must contain a number, special character, and a capital letter';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with login logic
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#11383c]">Login to ElectroMart</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#11383c]"
              placeholder="Username"
            />
            {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#11383c]"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#11383c] text-white py-2 rounded-md hover:bg-[#0e2f2a] transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <a href="/signup" className="text-[#11383c] hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
