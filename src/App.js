import React, { Component } from 'react';
import Layout from '../src/components/Layout/Layout'
import BurregBulider from '../src/containers/BurgerBulider/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'



class App extends Component {


  render() {
    return (
      <div>
        <Layout>
          <BurregBulider>bb</BurregBulider>
          <Checkout></Checkout>
        </Layout>
      </div>
    );
  }
}

export default App;
