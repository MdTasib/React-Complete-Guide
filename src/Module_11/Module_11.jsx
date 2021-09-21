import React, { Fragment, useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

const Module_11 = () => {
	const [cartIsShow, setCartIsShow] = useState(false);

	const showCartHandler = () => {
		setCartIsShow(true);
	};

	const hideCartHandler = () => {
		setCartIsShow(false);
	};

	return (
		<Fragment>
			{cartIsShow && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
};

export default Module_11;
