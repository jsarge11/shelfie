import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
 constructor() {
  super() 

  this.state = {
   product_name : '',
   product_price : 0.00,
   user_image_url: '',
   image_url : 'https://www.endurasport.com/assets/images/prodbrowser/product_placeholder.jpg',
   selected_id : null,
   display_add : 'true',

  }
 }

 componentDidUpdate(oldprops) {
  if (oldprops.currently_selected !== this.props.currently_selected) {
   this.setState({ 
     selected_id : this.props.currently_selected,
     display_add : false
   })
  }
 }
 updateName(text) {
  this.setState({
   product_name: text
  })
 }
 updatePrice(num) {
  this.setState({
   product_price: num
  })
 }
 updateURL(text) {
  this.setState({
   user_image_url: text
  })
 }
 resetInput() {
  this.setState({
   product_name : '',
   product_price : 0.00,
   user_image_url : ''
  })
 }
 createProduct() {
  let img_url = this.state.user_image_url ? this.state.user_image_url : this.state.image_url

  let product = {
   name: this.state.product_name,
   price: this.state.product_price,
   img_url:  img_url,
  }
  axios.post('/api/product', { product }).then(() => {
    this.props.getProducts();
  })
 }
 
 render() {
   let add_to_inventory = <button onClick={()=>this.createProduct()}>Add to Inventory</button>
   let save_changes = <button onClick={()=>this.updateProduct()}>Save Changes</button>

  return( 
   <div className="formwrapper">
    <div>
     <img height="50px" src={this.state.image_url} alt='exampleimg'/>
    </div>
    <div className="inputwrapper">
     <input onChange={(e)=>this.updateURL(e.target.value)} type='text' placeholder="image url goes here ... " value={this.state.user_image_url}/>
     <input onChange={(e)=>this.updateName(e.target.value)} type='text' placeholder="product name goes here ... " value={this.state.product_name}/>
     <input onChange={(e)=>this.updatePrice(e.target.value)} type='text'placeholder="price goes here ... " value={this.state.product_price}/>
    </div>
    <div className="buttonwrapper">
     <button onClick={()=>this.resetInput()}>Cancel</button>
     {this.state.display_add ? add_to_inventory : save_changes} 
    </div>
   </div>
  )
 }
}