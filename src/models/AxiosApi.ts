import axios, { AxiosInstance } from 'axios';

export class AxiosApi {
	#api: AxiosInstance;

	constructor(baseURL: string) {
		this.#api = axios.create({
			baseURL,
		});
	}

	async getData<T>(route: string, body?: Record<string, unknown>): Promise<T> {
		try {
			const apiRes = await this.#api.get(route, body);
			return apiRes.data;
		} catch (err) {
			throw Error('GetData error');
		}
	}
}
