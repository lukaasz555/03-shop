import './ProductCard.css';
import { IProduct } from '../../../interfaces/IProduct';

type ProductCardProps = IProduct;

export const ProductCard = ({ id, price, title }: ProductCardProps) => {
	return (
		<div>
			{id} - {price} = {title}
		</div>
	);
};
