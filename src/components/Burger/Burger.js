import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIng from './BurgerIng/BurgerIng';


const burger = (props) => {
    return (

        <div className={classes.Burger}>
            <BurgerIng type="bread-top"></BurgerIng>
            <BurgerIng type="chease"></BurgerIng>
            <BurgerIng type="meat"></BurgerIng>
            <BurgerIng type="salad"></BurgerIng>
            <BurgerIng type="bread-bottom"></BurgerIng>


        </div>

    );


}

export default burger;