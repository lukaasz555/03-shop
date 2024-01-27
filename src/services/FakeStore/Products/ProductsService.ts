import { IProduct } from '../../../interfaces/IProduct';
import { FakeStoreService } from '../FakeStoreService';

export class ProductsService extends FakeStoreService {
	getProducts(): Promise<IProduct[]> {
		return this.getData<IProduct[]>('/products');
	}

	getProductById(productId: number): Promise<IProduct> {
		return this.getData<IProduct>(`/products/${productId}`);
	}

	getProductsByCategory(categoryName: string): Promise<IProduct[]> {
		return this.getData<IProduct[]>(`/products/category/${categoryName}`);
	}
}
