interface MainRoute {
	path: string;
	text: string;
}

export const mainRoutes: MainRoute[] = [
	{
		path: '/',
		text: 'Home',
	},
	{
		path: '/products',
		text: 'Products',
	},
	{
		path: '/categories',
		text: 'Categories',
	},
	{
		path: '/contact',
		text: 'Contact',
	},
];
