import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice/productsReducer';
import globalReducer from './globalSlice/globalReducer';

export const store = configureStore({
	reducer: {
		global: globalReducer,
		products: productsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
