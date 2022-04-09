import { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const handleCount = val => {
		setCount(count + val);
	};

	const mulDouble = () => {
		setCount(count * 2);
	};
	return (
		<div className='app'>
			<Counter
				intValue={count}
				handleCount={handleCount}
				mulDouble={mulDouble}
			/>
		</div>
	);
}

export default App;
