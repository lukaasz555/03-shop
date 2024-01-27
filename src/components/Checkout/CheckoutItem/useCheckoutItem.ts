import { useDispatch } from 'react-redux';
import { IProduct } from '../../../interfaces/IProduct';
import { addItem, removeItem } from '../../../store/cartSlice/cartReducer';

export const useCheckoutItem = (item: IProduct) => {
	const dispatch = useDispatch();
	const addToCart = () => dispatch(addItem(item));
	const removeFromCart = () => dispatch(removeItem(item));

	return { addToCart, removeFromCart };
};
