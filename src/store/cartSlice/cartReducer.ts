import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProduct';
import { getDiscount } from '../../utils/helpers/getDiscount';

interface CartItem {
	product: IProduct;
	quantity: number;
}

interface CartState {
	cartItems: CartItem[];
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

		addItem: (state: CartState, action: PayloadAction<IProduct>) => {
			const itemInCartIndex = state.cartItems.findIndex(
				(x) => x.product.id === action.payload.id
			);
			if (itemInCartIndex > -1) {
				state.cartItems[itemInCartIndex].quantity++;
			} else state.cartItems.push({ product: action.payload, quantity: 1 });

			state.totalValue = state.cartItems.reduce(
				(acc, curr) => acc + curr.product.price * curr.quantity,
				0
			);
			state.discount = getDiscount(state.totalValue);
		},
		removeItem: (state: CartState, action: PayloadAction<IProduct>) => {
			const itemInCartIndex = state.cartItems.findIndex(
				(x) => x.product.id === action.payload.id
			);
			if (itemInCartIndex > -1) {
				state.cartItems[itemInCartIndex].quantity--;
			}
			state.totalValue = state.cartItems.reduce(
				(acc, curr) => acc + curr.product.price * curr.quantity,
				0
			);
			state.cartItems = state.cartItems.filter((x) => x.quantity > 0);
			state.discount = getDiscount(state.totalValue);
		},

		setCartItems: (state: CartState, action: PayloadAction<CartItem[]>) => {
			state.cartItems = action.payload;
			state.totalValue = state.cartItems.reduce(
				(acc, curr) => acc + curr.product.price * curr.quantity,
				0
			);
			state.discount = getDiscount(state.totalValue);
		},
	},
});

export const { clearCart, addItem, removeItem, setCartItems } =
	cartSlice.actions;
export default cartSlice.reducer;
