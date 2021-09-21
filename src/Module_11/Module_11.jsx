import React, { Fragment } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

const Module_11 = () => {
	return (
		<Fragment>
			<Cart />
			<Header />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
};

export default Module_11;
