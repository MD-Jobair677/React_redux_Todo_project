

import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    
    // themeSetting: themeSettingSlice,
    // sidebarSlice: sidebarSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
