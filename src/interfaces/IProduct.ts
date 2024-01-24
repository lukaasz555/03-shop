export interface IProduct {
	id: number;
	price: number;
	rating: {
		rate: number;
		count: number;
	};
	title: string;
	description: string;
	category: string; // enum, const?;
	image: string;
}
