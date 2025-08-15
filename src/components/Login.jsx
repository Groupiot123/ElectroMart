import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice'; // adjust path if needed
 
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
 
  const [form, setForm] = useState({ username: '', password: '' });
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(form));
    if (loginUser.fulfilled.match(result)) {
      navigate('/dashboard'); // redirect after successful login
    }
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
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
          </div>
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
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
 
 
 
// priya.mehta , priya@321