import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProduct';

interface ProductsState {
	products: IProduct[];
	product: IProduct | null;
}

const initialState = (): ProductsState => ({
	products: [],
	product: null,
});

const productsSlice = createSlice({
	name: 'productsStore',
	initialState,
	reducers: {
		setProducts: (state: ProductsState, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload;
		},
		getProductById: (state: ProductsState, action: PayloadAction<number>) => {
			const product = state.products.find((x) => x.id === action.payload);
			if (product) {
				state.product = product;
			}
		},
	},
});

export const { setProducts, getProductById } = productsSlice.actions;
export default productsSlice.reducer;
