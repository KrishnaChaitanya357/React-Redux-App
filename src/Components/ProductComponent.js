import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MyCart.css"

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
     let cardTitle;
    if(title.length<=18){
       cardTitle=title
    }else{
      cardTitle=title.slice(0,18)
    } 

    let Capcategory =category.toUpperCase()
 
    return (
   
    <div className="col" >
       <Link to={`/product/${id}` } style={{textDecoration:"none"}}>
      <div className="card" key={id} >
    <img className="card-img-top" src={image} alt="Card image"  />
    <div className="card-body">
      <h4 className="card-title  text-dark">{cardTitle}</h4>
      <h4 className="card-price"> ${price}</h4>
      <h4 className="card-category"> {Capcategory}</h4>
    </div>
    </div>
    </Link>
    </div> 

    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;