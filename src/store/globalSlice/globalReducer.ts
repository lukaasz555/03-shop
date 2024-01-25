import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
	isLoading: boolean;
}

const initialState = (): GlobalState => ({
	isLoading: false,
});

const globalSlice = createSlice({
	name: 'globalStore',
	initialState,
	reducers: {
		setLoading: (state: GlobalState, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setLoading } = globalSlice.actions;
export default globalSlice.reducer;
