import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Row, Col } from 'react-bootstrap';

const CardGrid = () => {
    const products = useSelector((state)=>state.allProducts.products)
    // const {id,name} = products[0];
 const renderList = products.map((product)=>{
        const {id,title,image,price,category,} =product;
  return (
    <Row xs={1} md={3} className="g-4">
      
        <Col key={id}>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{price}</Card.Text>
              <Card.Text>{category}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
     
    </Row>
  );
});
return(
    <><h1>{renderList}</h1></>
)

}


export default CardGrid;
