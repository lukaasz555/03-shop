import { IProduct } from '../interfaces/IProduct';
import { AxiosApi } from '../models/AxiosApi';

export class FakeStoreService extends AxiosApi {
	constructor() {
		super('https://fakestoreapi.com');
	}

	getCategories(): Promise<string[]> {
		return this.getData<string[]>('/products/categories');
	}

	getProducts(): Promise<IProduct[]> {
		return this.getData<IProduct[]>('/products');
	}

	getProductsByCategory(categoryName: string): Promise<IProduct[]> {
		return this.getData<IProduct[]>(`/products/category/${categoryName}`);
	}
}
