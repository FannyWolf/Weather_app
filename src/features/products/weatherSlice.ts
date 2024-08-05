import { createSlice } from '@reduxjs/toolkit';
import { IWeatherData } from '../../types/weather';
import { getWeather } from './weatherAction';


interface IWeatherState{
  values: IWeatherData[];
  isLoading: boolean;
  error: string;
}

const initialState: IWeatherState = {
  values: [],
  isLoading: false,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = false
        state.values = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false
        state.values = []
        state.error = action.payload as string
      })
  },
});

export default weatherSlice;
//export const { } = productsSlice.actions