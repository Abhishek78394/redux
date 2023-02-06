import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice/userSlice'
import imageReducer from './imageSlice/imageSlice'
export const store = configureStore({
  reducer: {
users:userReducer,
images:imageReducer,

  },
})