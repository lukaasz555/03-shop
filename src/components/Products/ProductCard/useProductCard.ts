import { useDispatch } from 'react-redux';
import { IProduct } from '../../../interfaces/IProduct';
import { addItem } from '../../../store/cartSlice/cartReducer';
import { useNavigate } from 'react-router-dom';

export const useProductCard = (product: IProduct) => {
	const { id, image, title, price } = product;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addToCart = () => dispatch(addItem(product));
	const pushToProductPage = () => navigate(`/product/${id}`);

	return { addToCart, pushToProductPage, id, image, title, price };
};
