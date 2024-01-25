import { FakeStoreService } from '../FakeStoreService';

export class CategoriesService extends FakeStoreService {
	getCategories(): Promise<string[]> {
		return this.getData<string[]>('/products/categories');
	}
}
