import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {/*<NavigationItem link="/burger-proj" exact>Burger Builder</NavigationItem> only for when hosted online (Remove the below NavigationItem for Burger Builder and use this commented one) */} 
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>
);

export default NavigationItems;