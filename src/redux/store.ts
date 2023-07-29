import { configureStore } from "@reduxjs/toolkit";
import { api } from "./API/apiSlice";
import BuildPcReducer from "./features/buildPc/BuildPc";
// ...

export const store = configureStore({
  reducer: {
    build: BuildPcReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
