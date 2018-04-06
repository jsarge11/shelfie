import React, { Component } from 'react';
import axios from 'axios'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      inventoryList : [],
      my_url : '/api/inventory',
      currently_selected : {},
    }

    this.getProducts = this.getProducts.bind ( this );
    this.setSelectedProduct = this.setSelectedProduct.bind ( this );
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get(this.state.my_url).then((res)=> {
      this.setState({ inventoryList: res.data})
    })
  }
  setSelectedProduct(product) { 
    console.log('changing some shiz');
    this.setState({ currently_selected : product })

  }

  render() {
    return (
      <div className="App">
      {console.log(this.state.currently_selected)}
        <Dashboard inventorylist={this.state.inventoryList}
                   getProducts={this.getProducts} 
                   setSelectedProduct={this.setSelectedProduct}
                   />
        <Header />
        <Form getProducts={this.getProducts}
              currently_selected={this.state.currently_selected}
        />        
        
      </div>
    );
  }
}

export default App;
