import { useProductsList } from './useProductsList';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductsList.css';

export const ProductsList = () => {
	const { productsList } = useProductsList();

	return (
		<div className='list__container'>
			{productsList.map(
				({ id, price, title, description, rating, category, image }) => (
					<ProductCard
						key={id}
						id={id}
						price={price}
						category={category}
						description={description}
						image={image}
						rating={rating}
						title={title}
					/>
				)
			)}
		</div>
	);
};
