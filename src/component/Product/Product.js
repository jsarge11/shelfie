import React from 'react'

export default function Product(props) {
 return (
  <div className="productwrapper">
   <div className="imgwrapper">
    <img height="50px" src={props.product.img_url} alt={props.product.name + ' product'}/>
   </div>
   Name: {props.product.name}
   Price: {props.product.price}
   <button onClick={()=>props.deleteProduct(props.product.product_id)}>delete</button>
   <button>edit</button>
  </div>
 );
}