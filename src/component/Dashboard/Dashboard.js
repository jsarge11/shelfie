import React, {Component} from 'react'
import Product from '../Product/Product'


export default class Dashboard extends Component {
 render() {
  let products = this.props.inventorylist.map((item, i) => {
   return (
   <div key = {i + item} >
    <Product product={item}/>
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