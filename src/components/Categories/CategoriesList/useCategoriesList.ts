import { useEffect, useState } from 'react';
import { CategoriesService } from '../../../services/FakeStore/Categories/CategoriesService';

export const useCategoriesList = () => {
	const [categoriesList, setCategoriesList] = useState<string[]>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categoriesService = new CategoriesService();
				const res = await categoriesService.getCategories();
				setCategoriesList(res);
			} catch (err) {
				console.log('fetchCategories err ', err);
			}
		};
		fetchCategories();
	}, []);

	return { categoriesList };
};
