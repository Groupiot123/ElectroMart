import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8082/users/register', userData, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Registration failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    registrationSuccess: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.registrationSuccess = false;
    },
    resetRegistration: (state) => {
      state.registrationSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.registrationSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.registrationSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.registrationSuccess = false;
      });
  },
});

export const { logout, resetRegistration } = authSlice.actions;
export default authSlice.reducer;
