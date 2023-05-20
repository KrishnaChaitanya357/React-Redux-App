import React,{useEffect} from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../Redux/Actions/productActions'
import CardGrid from './BootstrapCards'
// import "../App.css"
import "./MyCart.css"


function ProductListing() {
const products = useSelector((state)=>state)
const dispatch =useDispatch();
// console.log(products)



const fetchProducts =async ()=>{
 const response  = await axios.get("https://fakestoreapi.com/products")
 .catch(err=>{console.log("Error",err)})
 dispatch(setProducts(response.data))

}


useEffect(()=>{
fetchProducts();

},[])
console.log("Products",products)

  return (
    <div className="container-md-4">
     <div className='row'>
      
        <ProductComponent />
        </div>
    </div>
  )
}

export default ProductListing