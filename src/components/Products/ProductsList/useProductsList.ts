import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IProduct } from '../../../interfaces/IProduct';
import { ProductsService } from '../../../services/FakeStore/Products/ProductsService';

export const useProductsList = () => {
	const [productsList, setProductsList] = useState<IProduct[]>([]);
	const { category } = useParams();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const productService = new ProductsService();
				const res = category
					? await productService.getProductsByCategory(category)
					: await productService.getProducts();
				setProductsList(res);
			} catch (err) {
				console.log('fetchProducts err ', err);
			}
		};
		fetchProducts();
	}, []);

	return { productsList };
};
