import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    username: '',
    password: '',
    mobileno: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.username.trim()) newErrors.username = 'Username is required';
    if (!form.password) newErrors.password = 'Password is required';
    else if (
      !/^.*(?=.{5,})(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/.test(form.password)
    ) {
      newErrors.password =
        'Password must be 5+ chars, include a number, special char, and a capital letter';
    }
    if (form.mobileno && !/^\d{10}$/.test(form.mobileno)) {
      newErrors.mobileno = 'Mobile number must be exactly 10 digits';
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
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#11383c]">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#11383c]"
              placeholder="First Name"
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#11383c]"
              placeholder="Last Name"
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#11383c]"
              placeholder="Address"
            />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>
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
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Mobile No</label>
            <input
              type="text"
              name="mobileno"
              value={form.mobileno}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#11383c]"
              placeholder="Mobile Number"
              maxLength={10}
            />
            {errors.mobileno && <p className="text-red-500 text-xs">{errors.mobileno}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#11383c] text-white py-2 rounded-md hover:bg-[#0e2f2a] transition"
          >
            Sign Up
          </button>
        </form>
        {submitted && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            <p className="text-green-700 font-semibold">Signup Successful!</p>

          </div>
        )}
        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="text-[#11383c] hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
