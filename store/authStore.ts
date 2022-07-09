// import { configureStore, combineReducers } from '@reduxjs/toolkit'

// const rootReducer = combineReducers({
//     toolkit:
// })

// export const authStore = configureStore({
//     reducer: rootReducer,
// })

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
	reducer: {
		userProfile: authReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
