import { AxiosApi } from '../../models/AxiosApi';

export class FakeStoreService extends AxiosApi {
	constructor() {
		super('https://fakestoreapi.com');
	}
}
