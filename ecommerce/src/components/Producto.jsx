import React from "react";
import { Card, Button, Row } from "react-bootstrap";

import './Products.css'

const Producto = ({product}) => {

  return (
    <>
        <div className="col mb-3" >
            <Card style={{ width: '15rem', height: '25rem', cursor: 'pointer'}} className='card-product'>
                <Card.Img
                    fluid
                    className='card-image'
                    variant="top" 
                    src={product.image}
                />
                <Card.Body>
                    <Card.Title>{product.product_name}</Card.Title>
                    <Card.Text className='brand-product'>
                        {product.brand}
                    </Card.Text>
                    <Card.Text className='priceProduct'>
                        <h5><b>${product.price} MXN</b></h5>
                    </Card.Text>
                </Card.Body>
            </Card> 
        </div>
    </>
);   
};

export default Producto;



// {ProductsArray.length===0 ? (<h3>cargando productos</h3>)
//       : (ProductsArray.map((item,index) => (
//         <div key={index}>        
//             <Card>
//               <Card.Img variant="top" src={item.image} 
//               <Card.Body>
//                 <Card.Title>{item.product_name}</Card.Title>
//                 <Card.Text>
//                   {item.description}
//                 </Card.Text>
//                 <Button variant="primary">Agregar al carrito</Button>
//               </Card.Body>
//             </Card>
//        </div> 
//        ))
//       )} 