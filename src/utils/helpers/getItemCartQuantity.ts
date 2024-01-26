import { store } from '../../store/store';

export const getItemCartQuantity = (productId: number | string) => {
	return store
		.getState()
		.cartReducer.cartItems.filter((x) => x.id === productId).length;
};
