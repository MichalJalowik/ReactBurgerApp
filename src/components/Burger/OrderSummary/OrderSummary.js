import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li> <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });

            return (

                <Aux>
                    
                    <h3>Your Order</h3>
                    <p>A delicious burger with fallowing ingredients:</p>
                    <ul>
                        {ingredientsSummary}
                    </ul>
                    <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
                    <p>Continue to checkout?</p>
                    <Button btnType="Danger" clicked={props.purchaseCanceled} >CANCEL</Button>
                    <Button btnType="Success" clicked={props.purchaseContinued} >CONTINUE</Button>

                </Aux>
            )

};

export default orderSummary;