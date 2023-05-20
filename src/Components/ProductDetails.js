import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../Redux/Actions/productActions';
import "./MyCart.css"

function ProductDetails() {
  const {productId} = useParams()
  console.log(productId);
  const product = useSelector(state=>state.product)
  const { image, title, price, category, description } = product;
  const dispatch=  useDispatch()
  console.log(product)

  const fetchproductDetail =async ()=>{
    const response =  await axios.get(`https://fakestoreapi.com/products/${productId}`)
       .catch(err=>{console.log("error",err)})
       dispatch(selectedProduct(response.data))
    }



useEffect(()=>{
  if(productId && productId!=="")  fetchproductDetail();
  return () => {
    dispatch(removeSelectedProduct());}},[productId]
)


  return (
    <div
    className='container'>
         {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
      <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img className="img-fluid" src={image} alt="Product Image" style={{maxHeight:"450px",marginTop:"50px"}}/>
    </div>
    <div className="col-md-6 text-box">
      <h3>{title}</h3>
      <h2><span className="badge bg-teal text-dark">${price}</span></h2>
      <h3 className="text-brown">{category}</h3>
      <p>{description}</p>
      <button className="btn btn-primary" type="button">
        <i className="fas fa-shopping-cart me-2"></i>
        Add to Cart
      </button>
    </div>
  </div>
</div>
      )}
    </div>
  )
}

export default ProductDetails