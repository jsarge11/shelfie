import React from 'react'
import {Link} from 'react-router-dom'

export default function Product(props) {
 return (
  <div className="productwrapper">
   <div className="imgwrapper">
    <img height="50px" src={props.product.img_url} alt={props.product.name + ' product'}/>
   </div>
   Name: {props.product.name}<br/>
   Price: {props.product.price} <br/>
   <button onClick={()=>props.deleteProduct(props.product.product_id)}>delete</button>
   <Link to={`/edit/${props.product.product_id}`}><button>edit</button></Link>
  </div>
 );
}