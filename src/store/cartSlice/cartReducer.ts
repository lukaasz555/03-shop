import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProduct';

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
		},
		removeItem: (state: CartState, action: PayloadAction<IProduct>) => {
			const itemInCartIndex = state.cartItems.findIndex(
				(x) => x.product.id === action.payload.id
			);
			if (itemInCartIndex > -1) {
				state.cartItems[itemInCartIndex].quantity--;
			}
		},

		setCartItems: (state: CartState, action: PayloadAction<CartItem[]>) => {
			state.cartItems = action.payload;
		},
	},
});

export const { clearCart, addItem, removeItem, setCartItems } =
	cartSlice.actions;
export default cartSlice.reducer;
