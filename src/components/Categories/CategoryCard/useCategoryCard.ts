import { useNavigate } from 'react-router-dom';

export const useCategoryCard = (categoryName: string) => {
	const navigate = useNavigate();

	const pushToCategoryProducts = () => {
		navigate(`/products/${categoryName}`);
	};

	return {
		pushToCategoryProducts,
	};
};
