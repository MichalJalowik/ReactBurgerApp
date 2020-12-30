import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIng from './BurgerIng/BurgerIng';
import {withRouter} from 'react-router-dom'

const burger = (props) => {

    console.log('burgerProps below')
    console.log(props)

    let transformedIngs = Object.keys(props.ingredients).map(igKey => {
        console.log('   jestesmy w kluczu: ' + igKey)
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            //console.log('i: ' + i)
            //console.log(igKey + i)
            console.log(igKey)
            return <BurgerIng key={igKey + i} type ={igKey}></BurgerIng>
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);


if(transformedIngs.length === 0) {
    transformedIngs = <p>please pick up some ingredients!</p>
}


    console.log(transformedIngs)

    return (

        <div className={classes.Burger}>
            <BurgerIng type="bread-top"></BurgerIng>
            {transformedIngs}
            <BurgerIng type="bread-bottom"></BurgerIng>


        </div>

    );


}

export default withRouter(burger) ;