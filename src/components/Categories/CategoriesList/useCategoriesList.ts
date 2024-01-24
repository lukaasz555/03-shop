import { useEffect, useState } from 'react';
import { FakeStoreService } from '../../../services/FakeStoreService';

export const useCategoriesList = () => {
	const [categoriesList, setCategoriesList] = useState<string[]>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const fakeStoreService = new FakeStoreService();
				const res = await fakeStoreService.getCategories();
				setCategoriesList(res);
			} catch (err) {
				console.log('fetchCategories err ', err);
			}
		};
		fetchCategories();
	}, []);

	return { categoriesList };
};
