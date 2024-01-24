import { CategoryCard } from '../CategoryCard/CategoryCard';
import { useCategoriesList } from './useCategoriesList';
import './CategoriesList.css';

export const CategoriesList = () => {
	const { categoriesList } = useCategoriesList();

	return (
		<div className='categories__list'>
			{categoriesList.map((c, idx) => (
				<CategoryCard key={idx} categoryName={c} />
			))}
		</div>
	);
};
