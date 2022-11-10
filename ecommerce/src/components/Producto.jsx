import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { useParams, useNavigate } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

import './Products.css'

const Producto = ({product}) => {
    // console.log(product._id)
    const context =useProductContext()
    const navigate = useNavigate()
    const recoverProduct = (id) =>{
        console.log(id)
        navigate(`/detalles/${id}`)
    }
  return (
    <>
        <div className="col mb-3" onClick={() => recoverProduct(product._id)}>
            <Card style={{ width: '15rem', height: '25rem', cursor: 'pointer' }} className='card-product'>
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
                        <Button style={{ width: '4rem'}} >
                        Ver
                        </Button>
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