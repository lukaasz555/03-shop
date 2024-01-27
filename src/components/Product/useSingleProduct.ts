import { useParams } from 'react-router-dom';
import { ProductsService } from '../../services/FakeStore/Products/ProductsService';
import { IProduct } from '../../interfaces/IProduct';
import { useEffect, useState } from 'react';

export const useSingleProduct = () => {
	const [product, setProduct] = useState<IProduct>();
	const { id } = useParams();

	const fetchProduct = async () => {
		try {
			if (id) {
				const productService = new ProductsService();
				const res = await productService.getProductById(+id);
				setProduct(res);
			}
		} catch (err) {
			console.log('fetchProduct err', err);
		}
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	return { product };
};
