import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import weatherSlice from "../features/products/weatherSlice"
import authSlice from "../features/auth/authSlice"


export const store = configureStore({
  reducer: {
   values: weatherSlice.reducer,
   user: authSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>