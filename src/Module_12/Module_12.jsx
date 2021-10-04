import { useState } from 'react';
import './module_12.css';
import Button from './components/UI/Button.js';

const Module_12 = () => {
	const [showParagraph, setShowParagraph] = useState(false);

	console.log('Toggle');

	const toggleParagraphHandler = () => {
		setShowParagraph(prevShowParagraph => !prevShowParagraph);
	};

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			{showParagraph && <p>This is new!</p>}
			<Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
		</div>
	);
};

export default Module_12;
