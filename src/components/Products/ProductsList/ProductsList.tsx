import { useProductsList } from './useProductsList';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductsList = () => {
	const { productsList } = useProductsList();

	return (
		<div>
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
