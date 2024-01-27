import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useCartLocalStorage } from '../../utils/helpers/useCartLocalStorage';
import { useEffect, useState } from 'react';
import { clearCart } from '../../store/cartSlice/cartReducer';

export const useCheckout = () => {
	const [isCardEmpty, setCardEmpty] = useState(false);
	const dispatch = useDispatch();

	const itemsInCart = useSelector(
		(state: RootState) => state.cartReducer.cartItems
	);

	const totalValue = useSelector(
		(state: RootState) => state.cartReducer.totalValue
	);

	const discount = useSelector(
		(state: RootState) => state.cartReducer.discount
	);

	const resetCart = () => dispatch(clearCart());

	const { saveCartToLs } = useCartLocalStorage();

	useEffect(() => {
		saveCartToLs();
		setCardEmpty(itemsInCart.length < 1);
	}, [itemsInCart]);

	return { itemsInCart, isCardEmpty, totalValue, discount, resetCart };
};
