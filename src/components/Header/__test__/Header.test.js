import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
	// GET BY

	it('should render same text passed into title prop', async () => {
		render(<Header title='My Header' />);
		const headingElement = screen.getByText(/my header/i);
		expect(headingElement).toBeInTheDocument();
	});

	// FIND BY

	it('should render same text passed into title prop 1', async () => {
		render(<Header title='My Header' />);
		const headingElement = await screen.findByText(/my header/i);
		expect(headingElement).toBeInTheDocument();
	});

	// QUERY BY

	it('should render same text passed into title prop 2', async () => {
		render(<Header title='My Header' />);
		const headingElement = screen.queryByText(/dogs/i);
		expect(headingElement).not.toBeInTheDocument();
	});

	// it('should render same text passed into title prop 3', async () => {
	//   render(<Header title='My Header' />);
	//   const headingElement = screen.getAllByRole('heading');
	//   expect(headingElement).not.toBeInTheDocument();
	// });
});
