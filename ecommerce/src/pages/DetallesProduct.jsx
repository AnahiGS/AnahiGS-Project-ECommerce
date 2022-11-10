import React from 'react'
import { useProductContext } from '../context/ProductContext'
import { Container, Image } from "react-bootstrap";

const DetallesProduct = ({product}) => {
    

    return (
        <>
             <div className="col mb-3" >
                  <Container>
                      <Image 
                          src={product.image}
                      />
                      <h1>{product.product_name}</h1>
                      <h4>{product.descripcion}</h4>
                      <h6>{product.price}</h6>
                  </Container> 
                </div>
                   
        </>
    )
}

export default DetallesProduct