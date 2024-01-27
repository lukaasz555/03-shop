import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useCartLocalStorage } from '../../utils/helpers/useCartLocalStorage';
import { useEffect, useState } from 'react';

export const useCheckout = () => {
	const [isCardEmpty, setCardEmpty] = useState(false);

	const itemsInCart = useSelector(
		(state: RootState) => state.cartReducer.cartItems
	);

	const { saveCartToLs } = useCartLocalStorage();

	useEffect(() => {
		saveCartToLs();
		setCardEmpty(itemsInCart.length < 1);
	}, [itemsInCart]);

	return { itemsInCart, isCardEmpty };
};
