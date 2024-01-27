import { useContext, useEffect, useState } from 'react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { CheckoutModalContext } from '../../../context/CheckoutModalContext';

export const useCartCounter = () => {
	const { setCheckoutVisible } = useContext(CheckoutModalContext);
	const [isCircleVisible, setCircleVisible] = useState(false);
	const [circleText, setCircleText] = useState('');

	const onCartClick = () => setCheckoutVisible(true);
	const items = useSelector((state: RootState) => state.cartReducer.cartItems);

	useEffect(() => {
		const itemsQty = items.reduce((acc, curr) => acc + curr.quantity, 0);

		setCircleText(itemsQty > 9 ? '9+' : itemsQty > 0 ? `${itemsQty}` : '');
		setCircleVisible(itemsQty > 0);
	}, [items]);

	return { isCircleVisible, onCartClick, circleText };
};
