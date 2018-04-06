import React, {Component} from 'react'
import Product from '../Product/Product'
import Form from '../Form/Form'
import axios from 'axios'
import './dashboard.css'


export default class Dashboard extends Component {
 constructor() {
  super();

  this.state = { 
   inventoryList : [],
 }
  this.deleteProduct = this.deleteProduct.bind ( this ); 
  this.getProducts = this.getProducts.bind ( this );
 }

 componentDidMount() {
  this.getProducts();
}

getProducts() {
  axios.get('/api/inventory').then((res)=> {
    console.log(res.data);
    this.setState({ inventoryList: res.data})
  })
}

 deleteProduct(id) {
  axios.delete('/api/product/' + id).then(()=> {
   this.getProducts();
  })
 }
 render() {
  let products = this.state.inventoryList.map((item, i) => {
   return (
   <div className="products" key = {i + item} >
    <Product deleteProduct={this.deleteProduct} 
             product={item}
             />
   </div>
   );
  })
  return( 
   <div>
   
        <div className="App">
          <div className="productWrapper">
          {products}
        </div>
         <div>
         <Form getProducts={this.getProducts}
               currently_selected={this.state.currently_selected}
         />        
         </div>
    
    </div>
   </div>
  )
 }
}