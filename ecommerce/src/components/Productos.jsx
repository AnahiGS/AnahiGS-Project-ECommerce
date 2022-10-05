import React, {useState, useEffect} from "react";
import { Card, Button, Row } from "react-bootstrap";
import axios from 'axios';

const Productos = () => {
  const BASE_URL = "https://ecomerce-master.herokuapp.com/api/v1/";
  const [ProductsArray, setProductsArray] = useState([]);
  const [ProductsInfo, setProductsInfo] = useState({})

  
  useEffect(() => {

    axios
      .get(`${BASE_URL}item`)
      .then((data) => setProductsArray(data.data))
      .catch((error) => console.log("error calling API"));
  }, []);

  return (
    <>
      {ProductsArray.length===0 ? (<h3>cargando productos</h3>)
      : (ProductsArray.map((item,index) => (
        
        <div key={index}> 
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.product_name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Row>
       </div> 
      ))
      )}
    </>
  );
};

export default Productos;
