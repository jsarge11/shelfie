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
    }

    this.getProducts = this.getProducts.bind ( this );
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get(this.state.my_url).then((res)=> {
      this.setState({ inventoryList: res.data})
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard inventorylist={this.state.inventoryList} getProducts={this.getProducts} />
        <Header />
        <Form getProducts={this.getProducts}/>        
        
      </div>
    );
  }
}

export default App;
