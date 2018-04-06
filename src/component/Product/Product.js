import React from 'react'

export default function Product(props) {
 return (
  
  <div className="productwrapper">
   <div className="imgwrapper">
    <img height="50px" src={props.product.img_url} alt={props.product.name + ' product'}/>
   </div>
   Name: {props.product.name}
   Price: {props.product.price}
  </div>
 );
}