import { store } from '../../store/store';

export const getItemCartQuantity = (productId: number) => {
	return store
		.getState()
		.cartReducer.cartItems.filter((x) => x.id === productId).length;
};
