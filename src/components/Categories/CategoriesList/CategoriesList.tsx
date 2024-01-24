import { CategoryCard } from '../CategoryCard/CategoryCard';
import './CategoriesList.css';

const mock = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

export const CategoriesList = () => {
	return (
		<div className='categories__list'>
			{mock.map((c, idx) => (
				<CategoryCard key={idx} categoryName={c} />
			))}
		</div>
	);
};
