import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { useParams, useNavigate } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

import './Products.css'

const Producto = ({ product_name, image, price, _id, brand, description }) => {
    // console.log(product._id)
    const context =useProductContext()
    const navigate = useNavigate()
    const recoverProduct = (id) =>{
        console.log(id)
        navigate(`/detalles/${id}`)
    }
  return (
    <>
        <div className="col mb-3 " onClick={() => recoverProduct(_id)}>
            <Card style={{ width: 'auto', height: 'auto', cursor: 'pointer' }} className='card-product border border-success '>
                <Card.Img
                    
                    fluid
                    className='card-image'
                    variant="top" 
                    src={image}
                />
                <Card.Body>
                    <Card.Title>{product_name}</Card.Title>
                    <Card.Text className='brand-product'>
                        {brand}
                    </Card.Text>
                    <Card.Text className='priceProduct'>
                        <h5><b>${price} MXN</b></h5>
                        <Button className='btn btn-light btn btn-outline-success' style={{ width: '4rem'}} >
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