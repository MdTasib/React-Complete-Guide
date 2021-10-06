import { useState, useCallback } from 'react';
import './module_12.css';
import Button from './components/UI/Button.js';
import DemoOutput from './components/Demo/DemoOutput';

const Module_12 = () => {
	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);

	console.log('APP RUNNING');

	const toggleParagraphHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph(prevShowParagraph => !prevShowParagraph);
		}
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAllowToggle(true);
	};

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			<DemoOutput show={false} />
			<Button onClick={allowToggleHandler}>Allow Toggle Button</Button>
			<Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
		</div>
	);
};

export default Module_12;
