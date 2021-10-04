import React from 'react';

const MyParagrap = props => {
	console.log('MyParagrap runing');
	return <p>{props.children}</p>;
};

export default MyParagrap;
