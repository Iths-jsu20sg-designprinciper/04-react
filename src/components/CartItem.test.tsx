import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import CartItem from './CartItem'

describe('CartItem component', () => {

	it('smoke test (testing library', () => {
		render( <CartItem /> )
	})

	it('renders 1 item initially', () => {
		const wrapper = shallow(<CartItem/>)
		// <span> 1 </span>
		const expectedText = String(1)  // '1'
		const actualText = wrapper.find('span').text()
		expect(actualText).toBe(expectedText)
	})
})