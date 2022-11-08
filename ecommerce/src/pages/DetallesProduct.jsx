import React from 'react'

const DetallesProduct = ({}) => {
  return (
    <>
        <div className="col mb-3" >
            <Container>
                <Image 
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
            </Container> 
        </div>
    </>
  )
}

export default DetallesProduct