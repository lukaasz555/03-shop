import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FakeStoreService } from '../../../services/FakeStoreService';
import { IProduct } from '../../../interfaces/IProduct';

export const useProductsList = () => {
	const [productsList, setProductsList] = useState<IProduct[]>([]);
	const { category } = useParams();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const fakeStoreService = new FakeStoreService();
				const res = category
					? await fakeStoreService.getProductsByCategory(category)
					: await fakeStoreService.getProducts();
				setProductsList(res);
			} catch (err) {
				console.log('fetchProducts err ', err);
			}
		};
		fetchProducts();
	}, []);

	return { productsList };
};
