import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProduct';

interface CartState {
	cartItems: IProduct[];
	totalValue: number;
	discount: number;
}

const initialState = (): CartState => ({
	discount: 0,
	cartItems: [],
	totalValue: 0,
});

const cartSlice = createSlice({
	name: 'cartStore',
	initialState,
	reducers: {
		clearCart: (state: CartState) => {
			state.cartItems = [];
			state.discount = 0;
			state.totalValue = 0;
		},

		calcTotalValue: (state: CartState) => {
			state.totalValue = state.cartItems.reduce(
				(acc, curr) => acc + curr.price,
				0
			);
		},

		addItem: (state: CartState, action: PayloadAction<IProduct>) => {
			state.cartItems.push(action.payload);
			cartSlice.actions.calcTotalValue();
		},
		removeItem: (state: CartState, action: PayloadAction<IProduct>) => {
			const index = state.cartItems.findIndex(
				(x) => x.id === action.payload.id
			);
			if (index > -1) {
				state.cartItems = [
					...state.cartItems.slice(0, index),
					...state.cartItems.slice(index + 1),
				];
				cartSlice.actions.calcTotalValue();
			}
		},
	},
});

export const { clearCart, calcTotalValue, addItem, removeItem } =
	cartSlice.actions;
export default cartSlice.reducer;
