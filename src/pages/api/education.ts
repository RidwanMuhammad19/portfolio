import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const education = [
		{
			institute: 'Bootcamp React Js',
			website: 'https://refactory.id/',
			course: 'Refactory',
			endDate: '2021-02-6',
			place: 'boarding school',
			technologies: ['Javascript', 'React Js'],
		},
		{
			institute: 'Fundamental React Js',
			website: 'https://www.waktukita.com/',
			course: 'Waktu Kita',
			endDate: '2020-09-09',
			place: 'boarding school',
			technologies: ['HTML', 'CSS', 'Javascript', 'React Js'],
		},
		{
			institute: 'Bacelor Information System',
			website: 'https://home.amikom.ac.id/',
			course: 'Universitas Amikom Yogyakarta',
			endDate: '2019-11-10',
			place: 'Yogyakarta',
			technologies: ['VB.net', 'fundamental Website'],
		},
	];

	res.status(200).json({ education });
};
