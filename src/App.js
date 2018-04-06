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
        <Dashboard inventorylist={this.state.inventoryList}/>
        <Header />
        <Form />        
        
      </div>
    );
  }
}

export default App;
