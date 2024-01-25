import axios, { AxiosInstance } from 'axios';
import { store } from '../store/store';
import { setLoading } from '../store/globalSlice/globalReducer';

export class AxiosApi {
	#api: AxiosInstance;

	constructor(baseURL: string) {
		this.#api = axios.create({
			baseURL,
		});
	}

	async getData<T>(route: string, body?: Record<string, unknown>): Promise<T> {
		store.dispatch(setLoading(true));

		try {
			const apiRes = await this.#api.get(route, body);
			return apiRes.data;
		} catch (err) {
			throw Error('GetData error');
		} finally {
			store.dispatch(setLoading(false));
		}
	}
}
