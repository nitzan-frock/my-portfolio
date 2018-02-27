import React, { Component } from 'react';
import Portfolio from './containers/Portfolio/Portfolio';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Portfolio />
        </Layout>
      </div>
    );
  }
}

export default App;
