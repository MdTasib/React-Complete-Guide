import { useState } from 'react';
import './module_12.css';
import Button from './components/UI/Button.js';
import DemoOutput from './components/Demo/DemoOutput';

const Module_12 = () => {
	const [showParagraph, setShowParagraph] = useState(false);

	console.log('Toggle');

	const toggleParagraphHandler = () => {
		setShowParagraph(prevShowParagraph => !prevShowParagraph);
	};

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			<DemoOutput show={false} />
			<Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
		</div>
	);
};

export default Module_12;
