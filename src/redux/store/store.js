import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

export const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
