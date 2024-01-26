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
		setCircleText(
			items.length > 9 ? '9+' : items.length > 0 ? `${items.length}` : ''
		);
		setCircleVisible(items.length > 0);
	}, [items]);

	return { isCircleVisible, onCartClick, circleText };
};
