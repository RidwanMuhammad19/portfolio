import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'HTML',
		'CSS Bootstrap',
		'CSS Chakra UI',
		'CSS Material UI',
		'javascript',
		'React Js',
		'Next Js',
		'VB.Net',
	];
	const frameworks = ['React Js', 'Next Js'];
	const databases = null;
	const cms = ['WordPress', 'Statamic'];
	const various = ['SEO', 'Scrum', 'Agile', 'Jira', 'Confluence'];
	const design = ['Canva', 'Gravit', 'Figma'];
	const softSkills = [
		'Leadership',
		'Problem solving',
		'Creative thinking',
		'Flexible and adaptive',
		'Team player',
	];
	const languages = [
		{
			language: 'Indonesian',
			level: 'bilingual',
			icon: '🇮🇩',
		},
		{
			language: 'English',
			level: 'basic',
			icon: '🇬🇧',
		},
	];

	res.status(200).json({
		technologies,
		frameworks,
		// databases,
		// cms,
		various,
		design,
		softSkills,
		languages,
	});
};
