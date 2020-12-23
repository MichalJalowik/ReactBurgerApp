import React, { Component } from 'react';
import Layout from '../src/components/Layout/Layout'
import BurregBulider from '../src/containers/BurgerBulider/BurgerBuilder'



class App extends Component {


  render() {
    return (
      <div>
        <Layout>
          <BurregBulider>bb</BurregBulider>
        </Layout>
      </div>
    );
  }
}

export default App;
