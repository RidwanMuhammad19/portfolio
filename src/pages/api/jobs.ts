import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const positions = [
		{
			company: 'Sandbox Indonesia',
			website: 'https://www.sandboxindonesia.id/',
			jobTitle: 'Front End Developer',
			startDate: '2020-03-10',
			endDate: null,
			place: 'Bareng Lor, Klaten Utara, Jawa Tengah, Indonesia',
			description: `* Joined Informa Studios (old name) as a junior frontend developer. (alongside research untill deployment)
			* Develop DESA PINTAR Landing Page for local governments.
			* Develop DESA PINTAR system for local governments.
			* Develop Landing Page for PITSPPD (PENGEMBANGAN DAN INOVASI TEKNOLOGI
				SURVEI DAN PEMETAAN PERTANAHAN DIGITAL).
			* Develop System for PITSPPD (PENGEMBANGAN DAN INOVASI TEKNOLOGI
				SURVEI DAN PEMETAAN PERTANAHAN DIGITAL).
			* Develop ACTIONS Landing Page for elementary school.
			* Develop ACTIONS system for elementary school.
			* Develop Desa Pintar Landing Page for internal system company.
			* Develop INSYST system for internal system company.`,
			technologies: [
				'HTML',
				'CSS Bootstrap',
				'CSS Chakra UI',
				'CSS Material UI',
				'javascript',
				'React Js',
				'Next Js',
				'.Net',
			],
		},
		{
			company: 'Direct Lab',
			website: 'https://dl.konsultasi.in/',
			jobTitle: 'Front-End Developer and Devop',
			startDate: '2021-10-07',
			endDate: null,
			place:
				'Kretek, Bantul, Yogyakarta, IndonesiaRuko Kencana Niaga D1 - 2N. Jl. Aries Utama IV No.7, RT.12/RW.8, Meruya Utara, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11620, Indonesia',
			description: `* Develop Direct Labs Landing Page for Labs for elementary school.
* Develop Direct Labs System for Labs.`,
			technologies: ['HTML', 'CSS Chakra UI', 'javascript', 'React Js'],
		},
		{
			company: 'Sinergy Auto Part & Workshop',
			website: null,
			jobTitle: 'Project Management',
			startDate: '2022-01-29',
			endDate: '2022-04-29',
			place: 'Jl. Kapt. Haryadi - Lojajar',
			description: `* Project Management for Information System Kasir.
* software installation`,
			technologies: ['VB.Net', 'SQL Server'],
		},
	];

	res.status(200).json({ positions });
};
