import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, render as renderEnzyme, mount } from 'enzyme'
import App from './App';

describe('App component', () => {
	it('renders without errors (smoke test)', () => {
		render(<App />);
	})

	test('renders learn react link', () => {
		render(<App />);
		const linkElement = screen.getByText(/learn react/i);
		expect(linkElement).toBeInTheDocument();
	});

    it('renders without errors (smoke test) (Enzyme shallow)', () => {
        const wrapper = shallow(<App />)
    })
    it('renders without errors (smoke test) (Enzyme mount)', () => {
        const wrapper = mount(<App />)
    })
	// shallow, render as renderEnzyme, mount
	// shallow rendering: bara komponenten, hoppar över child components
	// mount: full (deep) rendering
	// render: static rendering
})