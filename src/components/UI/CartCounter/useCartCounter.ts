import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

export const useCartCounter = () => {
	const [isCircleVisible, setCircleVisible] = useState(false);
	const [circleText, setCircleText] = useState('');
	const navigate = useNavigate();

	const pushToCheckout = () => navigate('/checkout');
	const items = useSelector((state: RootState) => state.cartReducer.cartItems);

	useEffect(() => {
		setCircleText(
			items.length > 9 ? '9+' : items.length > 0 ? `${items.length}` : ''
		);
		setCircleVisible(items.length > 0);
	}, [items]);

	return { isCircleVisible, pushToCheckout, circleText };
};
