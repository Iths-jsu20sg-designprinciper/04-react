import { useState } from 'react'
import './CartItem.css'

const CartItem = () => {
	const [amount, setAmount] = useState(1)

	return (
		<div className="cart-item">
			<h3>Snöskyffel</h3>
			<span> 60 kr </span>
			<span className="amount">{amount}</span>
			<button onClick={() => setAmount(amount + 1)}> Lägg till </button>
			<button> Ta bort </button>
		</div>
	)
}
// .cart-item
// .cart-item h3
// .cart-item button


export default CartItem
