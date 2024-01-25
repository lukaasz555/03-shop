import { IProduct } from '../../../interfaces/IProduct';
import './ProductCard.css';

type ProductCardProps = IProduct;

export const ProductCard = ({ id, price, title, image }: ProductCardProps) => {
	const pushToProductPage = () => console.log('id: ', id);

	return (
		<div className='card__wrapper'>
			<header onClick={pushToProductPage}>
				<img src={image} alt={title} />
			</header>
			<section className='card__details'>
				<div className='card__details--top'>
					<h3 onClick={pushToProductPage}>{title}</h3>
					<h4>${price}</h4>
				</div>
				<div className='card__details--bottom'>
					<button>to cart</button>
				</div>
			</section>
		</div>
	);
};
