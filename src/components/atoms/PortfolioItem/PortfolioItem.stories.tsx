import { PortfolioItem, PortfolioItemProps } from './PortfolioItem';

export default {
	title: 'atoms/PortfolioItem',
	component: PortfolioItem,
};

export const PortfolioItemStory = (args: PortfolioItemProps) => (
	<PortfolioItem {...args} />
);

PortfolioItemStory.storyName = 'PortfolioItem';
PortfolioItemStory.args = {
	item: {
		slug: 'direct-lab',
		title: 'Direct Lab',
		link: 'https://dl.konsultasi.in/',
		type: 'Web Development',
		technologies: [
			'Gatsby',
			'TypeScript',
			'Styled-Components',
			'REST APIs',
			'GraphQL',
		],
	},
};
