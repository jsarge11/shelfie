import React, {Component} from 'react'


export default class Form extends Component {
 constructor() {
  super() 

  this.state = {
   product_name : '',
   product_price : 0.00,
   user_image_url: '',
   image_url : 'https://www.endurasport.com/assets/images/prodbrowser/product_placeholder.jpg'
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
 
 render() {
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
     <button>Add to Inventory</button>
    </div>
   </div>
  )
 }
}