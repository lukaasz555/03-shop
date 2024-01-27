import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setCartItems } from '../../store/cartSlice/cartReducer';

export const useCartLocalStorage = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(
		(state: RootState) => state.cartReducer.cartItems
	);

	const saveCartToLs = () =>
		localStorage.setItem('app-cart', JSON.stringify(cartItems));

	const getCartFromLs = () => {
		const cartItems = localStorage.getItem('app-cart');
		if (cartItems?.length) {
			dispatch(setCartItems(JSON.parse(cartItems)));
		}
	};

	return {
		saveCartToLs,
		getCartFromLs,
	};
};
