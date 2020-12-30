import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients)
        this.setState({ loading: true });
        //alert('You continue?');
        const order = {
            ingreadients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max',
                address: {
                    stret: 'teststreet',
                    zipCode: '30333',
                    country: 'POland'
                },
                email: 'xxx@gmail.com'
            },
            deliveryMethod: 'fastest'

        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false
                    
                })
            });
    }

    render() {
        let form = (
            <form>
            <input className={classes.Input} type="text" name="name" placeholder="your name"></input>
            <input className={classes.Input} type="text" name="email" placeholder="your email"></input>
            <input className={classes.Input} type="text" name="street" placeholder="your street"></input>
            <input className={classes.Input} type="text" name="postal" placeholder="your postal code"></input>
            <Button
                btnType="Success"
                clicked={this.orderHandler}
            >ORDER</Button>
        </form>
        );
        if(this.state.loading){
            form = <Spinner></Spinner>
        }
        return (

            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}

            </div>

        )
    }

}

export default ContactData;