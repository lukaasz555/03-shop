import { useProductsList } from './useProductsList';

export const ProductsList = () => {
	const { productsList } = useProductsList();

	return <div>products goes here...</div>;
};
