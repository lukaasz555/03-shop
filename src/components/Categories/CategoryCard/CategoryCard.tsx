import './CategoryCard.css';
import { useCategoryCard } from './useCategoryCard';

interface CategoryCardProps {
	categoryName: string;
}

export const CategoryCard = ({ categoryName }: CategoryCardProps) => {
	const { pushToCategoryProducts } = useCategoryCard(categoryName);

	return (
		<div className='category__item' onClick={pushToCategoryProducts}>
			{categoryName}
		</div>
	);
};
