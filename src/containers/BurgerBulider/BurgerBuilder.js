import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'

class BurgerBulider extends Component {
    render () {
        return (
            <Aux>
                <Burger></Burger>
                
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBulider;