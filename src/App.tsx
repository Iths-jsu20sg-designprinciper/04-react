import CartItem from './components/CartItem'
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1> Frontend test examples </h1>
				<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
				Learn React
				</a>
			</header>
			<main>
				<CartItem />
				<CartItem />
			</main>
		</div>
	);
}

export default App;
