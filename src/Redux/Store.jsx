// store.js
import { configureStore } from '@reduxjs/toolkit';

//Slices
import LangSlice from './Slices/LangSlice';
import modeSlice from './Slices/modeSlice';

const store = configureStore({
  reducer: {
    langSlice: LangSlice,
    modeSlice: modeSlice,
  },
});

export default store;