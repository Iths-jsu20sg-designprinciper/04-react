import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import CartItem from './CartItem'

describe('CartItem component', () => {

	it('smoke test (testing library)', () => {
		render( <CartItem /> )
	})

	it('renders 1 item initially', () => {
		const wrapper = shallow(<CartItem/>)
		// <span> 1 </span>
		const expectedText = String(1)  // '1'
		const actualText = wrapper.find('.amount').text()
		expect(actualText).toBe(expectedText)
	})

	it('renders 2 after clicking on "Lägg till" once', () => {
		// Arrange
		const wrapper = shallow(<CartItem />)
		const expectedText = '2'
		const button = wrapper.find('button').at(0)

		// Act
		button.simulate('click')
		const actualText = wrapper.find('.amount').text()

		// Assert
		expect(actualText).toBe(expectedText)
	})

	// ökar antalet med 1 när man klickar på "Lägg till" <- formulerat som en programmerare
	// texten ska ändras till 2 när man klickar en gång på "Lägg till" <- formulerat ur användarens perspektiv
})