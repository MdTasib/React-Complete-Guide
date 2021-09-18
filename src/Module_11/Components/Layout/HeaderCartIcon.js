import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartIcon.module.css';

const HeaderCartIcon = () => {
	return (
		<button className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>3</span>
		</button>
	);
};

export default HeaderCartIcon;
