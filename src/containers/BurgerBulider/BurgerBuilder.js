import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BulidControls from '../../components/Burger/BulidControls/BuildControls';


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
        }
    }


    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                
                <BulidControls/>
            </Aux>
        );
    }

}

export default BurgerBulider;