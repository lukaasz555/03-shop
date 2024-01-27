import { useState, useEffect } from 'react';
import { useCartLocalStorage } from '../../utils/helpers/useCartLocalStorage';

export const useLayout = () => {
	const [isCheckoutVisible, setCheckoutVisible] = useState(false);
	const { getCartFromLs } = useCartLocalStorage();

	useEffect(() => {
		getCartFromLs();
	}, []);

	return { isCheckoutVisible, setCheckoutVisible };
};
