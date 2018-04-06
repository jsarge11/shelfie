import React, { Component } from 'react';
import axios from 'axios'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'


import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.setSelectedProduct = this.setSelectedProduct.bind ( this );
  }

  
  // setSelectedProduct(product) { 
  //   console.log('changing some shiz');
  //   this.setState({ currently_selected : product })

  // }

  render() {
    return (
      <div>
      
      </div>
    );
  }
}

export default App;
