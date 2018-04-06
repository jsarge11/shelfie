import React from 'react'

export default function Product(props) {
 return (
  
  <div className="productwrapper">
   <div className="imgwrapper">
    {console.log(props.product.url)}
    <img height="50px" src={props.product.url} alt={props.product.name + ' product'}/>
   </div>
   Name: {props.product.name}
   Price: {props.product.price}
  </div>
 );
}