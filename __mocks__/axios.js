const mockResponse = {
	data: {
		results: [
			[
				{
					name: {
						first: 'غزل',
						last: 'یاسمی',
					},
					email: 'gzl.ysmy@example.com',
					login: {
						uuid: '8f910cf6-3795-4c2e-bd99-6332c2df616f',
						username: 'organicgoose324',
					},
					picture: {
						large: 'https://randomuser.me/api/portraits/women/73.jpg',
					},
				},
				{
					name: {
						first: 'Teodósio',
						last: 'Almeida',
					},
					email: 'teodosio.almeida@example.com',
					login: {
						uuid: 'e1b59918-6f15-4e03-8d82-ec562b37fabe',
						username: 'sadswan941',
					},
					picture: {
						large: 'https://randomuser.me/api/portraits/men/0.jpg',
					},
				},
				{
					name: {
						first: 'Karl',
						last: 'Salte',
					},
					email: 'karl.salte@example.com',
					login: {
						uuid: '40a00228-5139-4c53-bf08-da3c37b529e8',
						username: 'bigtiger999',
					},
					picture: {
						large: 'https://randomuser.me/api/portraits/men/66.jpg',
					},
				},
				{
					name: {
						first: 'Jose',
						last: 'Rodriguez',
					},
					email: 'jose.rodriguez@example.com',
					login: {
						uuid: '9c5301a9-1efc-44ad-89d2-7768fa0300de',
						username: 'organicswan589',
					},
					picture: {
						large: 'https://randomuser.me/api/portraits/men/92.jpg',
					},
				},
				{
					name: {
						first: 'Holger',
						last: 'Horst',
					},
					email: 'holger.horst@example.com',
					login: {
						uuid: '09cd0bc3-64fc-47d7-9df9-d883e37eb547',
						username: 'silvertiger395',
					},
					picture: {
						large: 'https://randomuser.me/api/portraits/men/41.jpg',
					},
				},
			],
		],
	},
};

export default {
	get: jest.fn().mockResolvedValue(mockResponse),
};
