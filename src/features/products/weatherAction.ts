import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeather = createAsyncThunk(
  'getWeather',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95abbc8a327ef422700ea93c6cee52f3');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

