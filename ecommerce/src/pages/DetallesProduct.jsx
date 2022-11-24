import React, {useEffect, useState, useContext} from 'react'
import { useProductContext } from '../context/ProductContext'
import { Container, Image, Card, Row, Button } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext'


const DetallesProduct = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const context = useProductContext()
    const {isAuth, logout } =useContext(AuthContext)
    // const { isAuth } = useContext(AuthContext)
    
    const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/'
    const [product, setProduct] = useState({
        product_name: '',
        image: '',
        description: '',
        brand: '',
        price:''
    })
    
  
    useEffect(() => {
      axios
        .get(`${BASE_URL}item/${id}`)
        .then(({ data }) => {
          setProduct(data)
          
        })
        .catch((error) => console.log(error))
      
    }, [])
    return (
      <Container fluid className='product-details m-3 d-flex align-content-center'>
        
            <Card border='light' className='card-product-details'>
              
              <Card.Body>
                <Row>
                  <div className='col-5 align-self-center' style={{width:'30%'}}>
                    <Card.Img
                      fluid
                      className='product-image'
                      src={product.image}     
                    />
                  </div>
                  <div className='col-7'>
                  <Card.Header as='h5'>{product.product_name}</Card.Header>
                    <Card.Title className='card-product-details__title mb-5'>{product.category}</Card.Title>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Card.Text>
                      Brand: {product.brand}
                    </Card.Text>
                    <Card.Title className='fs-4' id='product-price'>${product.price} MXN</Card.Title>
                    <Card.Title className='card-product-details__shipping fs-5 '>Free shipping!</Card.Title>
                    <Card.Text>
                      <i className='bi bi-truck' style={{ color: 'rgb(0, 10, 59)', fontSize: '20px' }} />
                      Estimated delivery on <b>Dec 16</b>
                    </Card.Text>
                    <Row>
                      <div className='col-12 align-self-end'>
                        {
                          !isAuth
                            ? (
                              <>
                                <Button variant='success' size='sm' disabled>Buy now</Button>{' '}
                                <Button variant='outline-success' size='sm' disabled>Add to cart</Button>{' '}
                                <Card.Text className='text-muted'>
                                  Please log in or sign up to enjoy all the features we offer!
                                </Card.Text>
                              </>
                              )
                            : (
                              <>
                                <ul id="lista">
                                  <li>
                                    <Button size='sm'><i className={FaMinusCircle} data="disminuir" ></i></Button>
                                    <input className="input__number" type="number" value="0"></input>
                                    <Button  size='sm'><i className={FaPlusCircle} data="aumentar" ></i></Button>                 
                                  </li> 
                                </ul>
                                <Button variant='success' size='sm'>Buy now</Button>{' '}
                                <Button variant='outline-success' size='sm'>Add to cart</Button>{' '}
                              </>
                              )
                        }
                      </div>
                    </Row>
                  </div>
                </Row>
              </Card.Body>
            </Card>
            
      </Container>
    )
    
}

export default DetallesProduct