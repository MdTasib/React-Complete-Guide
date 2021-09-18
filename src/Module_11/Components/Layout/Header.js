import { Fragment } from 'react';
import meals from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartIcon from './HeaderCartIcon';

const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartIcon />
			</header>
			<div className={classes['main-image']}>
				<img src={meals} alt='A food table' />
			</div>
		</Fragment>
	);
};

export default Header;
