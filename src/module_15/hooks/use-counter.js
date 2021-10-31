import { useState, useEffect } from 'react';

const useCounter = (forwords = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwords) {
				setCounter(prevState => prevState + 1);
			} else {
				setCounter(prevState => prevState - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return counter;
};

export default useCounter;
