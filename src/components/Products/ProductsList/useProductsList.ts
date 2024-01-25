import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ProductsService } from '../../../services/FakeStore/Products/ProductsService';
import { store } from '../../../store/store';
import { setProducts } from '../../../store/productsSlice/productsReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export const useProductsList = () => {
	const { category } = useParams();
	const products = useSelector((state: RootState) => state.products.products);

	const fetchProducts = async () => {
		try {
			const productService = new ProductsService();
			const res = category
				? await productService.getProductsByCategory(category)
				: await productService.getProducts();
			store.dispatch(setProducts(res));
		} catch (err) {
			console.log('fetchProducts err ', err);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return { productsList: products };
};
