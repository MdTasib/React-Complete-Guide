import React from 'react';

const MyParagrap = props => {
	console.log('My Paragrap runing');
	return <p>{props.children}</p>;
};

export default MyParagrap;
