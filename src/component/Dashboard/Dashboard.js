import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'


export default class Dashboard extends Component {
 constructor() {
  super();

  this.deleteProduct = this.deleteProduct.bind ( this ); 
 }

 deleteProduct(id) {
  axios.delete('/api/product/' + id).then(()=> {
   this.props.getProducts();
  })
 }
 render() {
  let products = this.props.inventorylist.map((item, i) => {
   return (
   <div key = {i + item} >
    <Product deleteProduct={this.deleteProduct} product={item}/>
   </div>
   );
  })
  return( 
   <div>
    {products}
   </div>
  )
 }
}