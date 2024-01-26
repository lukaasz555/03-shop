import { useDispatch } from 'react-redux';
import { IProduct } from '../../../interfaces/IProduct';
import { addItem } from '../../../store/cartSlice/cartReducer';

export const useProductCard = (product: IProduct) => {
	const { id, image, title, price } = product;
	const dispatch = useDispatch();

	const addToCart = () => dispatch(addItem(product));
	const pushToProductPage = () => console.log('id: ', id);

	return { addToCart, pushToProductPage, id, image, title, price };
};
