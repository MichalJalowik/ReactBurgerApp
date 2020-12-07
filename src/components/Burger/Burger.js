import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIng from './BurgerIng/BurgerIng';


const burger = (props) => {

    const transformedIngs = Object.keys(props.ingredients).map(igKey => {
        console.log('   jestesmy w kluczu: ' + igKey)
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            //console.log('i: ' + i)
            //console.log(igKey + i)
            console.log(igKey)
            return <BurgerIng key={igKey + i} type ={igKey}></BurgerIng>
        })
    });

    console.log(transformedIngs)

    return (

        <div className={classes.Burger}>
            <BurgerIng type="bread-top"></BurgerIng>
            {transformedIngs}
            <BurgerIng type="bread-bottom"></BurgerIng>


        </div>

    );


}

export default burger;