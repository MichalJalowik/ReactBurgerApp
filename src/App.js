import React, { Component } from 'react';
import Layout from '../src/components/Layout/Layout'
import BurregBulider from '../src/containers/BurgerBulider/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom';


class App extends Component {


  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}></Route>
            <Route path="/" exact component={BurregBulider}></Route>

          </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;
