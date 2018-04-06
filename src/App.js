import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      inventoryList : [{name: 'shirt', price: 9.99, url: 'https://www.endurasport.com/assets/images/prodbrowser/product_placeholder.jpg' }, {name: 'socks', price: 3.99, url: 'https://www.endurasport.com/assets/images/prodbrowser/product_placeholder.jpg'}, {name: 'hat', price: 19.99, url: 'https://www.endurasport.com/assets/images/prodbrowser/product_placeholder.jpg'}],
    }
  }
  render() {
    return (
      <div className="App">
        <Dashboard inventorylist={this.state.inventoryList}/>
        <Header />
        <Form />        
        
      </div>
    );
  }
}

export default App;
