import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BulidControls from '../../components/Burger/BulidControls/BuildControls';

const ING_Prices = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBulider extends Component {

    // constructor() {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
           salad: 0,
           bacon: 0,
           cheese: 0,
           meat: 1 
        },
        totalPrice: 4

    }


addIngredientHandler = (type) => {
const oldCount = this.state.ingredients[type];
const updatedCount = oldCount + 1;
const updatedingredients = {
    ...this.state.ingredients
};
updatedingredients[type] = updatedCount;
const priceAddition = ING_Prices[type];
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice + priceAddition;
this.setState({totalPrice: newPrice, ingredients: updatedingredients})


}

removeIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
if(oldCount <= 0){
    return;
}


    const updatedCount = oldCount - 1;
    const updatedingredients = {
        ...this.state.ingredients
    };
    updatedingredients[type] = updatedCount;
    const priceDeduction = ING_Prices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedingredients})
    

}



    render () {
        const disabledInfo = {
...this.state.ingredients
        };

        for(let key in disabledInfo) {
             disabledInfo[key] = disabledInfo[key] <= 0
        }


        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                
                <BulidControls
                ingAdd={this.addIngredientHandler}
                ingRemove={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                />
            </Aux>
        );
    }

}

export default BurgerBulider;