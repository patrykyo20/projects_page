import { configureStore } from '@reduxjs/toolkit';
import { projectApi } from './slices/projects/projectsApi';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [projectApi.reducerPath]: projectApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(projectApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
