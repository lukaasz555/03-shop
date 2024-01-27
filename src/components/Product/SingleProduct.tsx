import { useSingleProduct } from './useSingleProduct';
import './SingleProduct.css';

export const SingleProduct = () => {
	const { product } = useSingleProduct();

	return (
		<div>
			<h1>{product?.title}</h1>
			<h2>{product?.price}</h2>
		</div>
	);
};
