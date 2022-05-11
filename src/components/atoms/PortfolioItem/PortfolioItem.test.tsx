import { PortfolioItem } from '../PortfolioItem';
import { render } from '@testing-library/react';

describe('PortfolioItem', () => {
	const mockItem = {
		slug: 'directlab',
		title: 'Direct Lab',
		link: 'https://www.amvi.org.mx/',
		type: 'Web Development',
		technologies: ['React Js', 'Chakra UI'],
		content: 'Some text content',
	};

	it('renders correctly', () => {
		const { container } = render(<PortfolioItem item={mockItem} />);
		expect(container).toMatchSnapshot();
	});
});
