import { useParams } from 'react-router-dom';
import { categories } from '../../utils/constants/categories';

export const useProductsList = () => {
	const { category } = useParams();

	const printInfo = () => console.log('cat: ', category);

	if (!category || !categories.includes(category)) {
		console.log('wrong category, should redirect');
	} else {
		console.log('should fetch products from ', category);
	}

	return { printInfo };
};
