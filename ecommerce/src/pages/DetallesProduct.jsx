import React from 'react'
import { useProductContext } from '../context/ProductContext'

const DetallesProduct = () => {
    const context = useProductContext()

    return (
        <>
            {context.selectedProduct.product_name
                ?   <div className="col mb-3" >
                        <Container>
                            <Image 
                                src={context.selectedProduct.image}
                            />
                            <h1>{context.selectedProduct.product_name}</h1>
                            <h4>{context.selectedProduct.brand}</h4>
                            <h6>{context.selectedProduct.price}</h6>
                        </Container> 
                    </div>:
            }
                
        </>
    )
}

export default DetallesProduct