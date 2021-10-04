import React from 'react';
import MyParagrap from './MyParagrap';

const DemoOutput = props => {
	console.log('demo output');
	return <MyParagrap>{props.show ? 'This is new!' : ''}</MyParagrap>;
};

export default DemoOutput;
