import React, {useState, useEffect} from "react";
import { Card, Button, Row } from "react-bootstrap";
import axios from 'axios';
import './Products.css'

const Producto = () => {
  const BASE_URL = "https://ecomerce-master.herokuapp.com/api/v1/";
  const [ProductsArray, setProductsArray] = useState([]);
  const [ProductsInfo, setProductsInfo] = useState({})

  
  useEffect(() => {

    axios
      .get(`${BASE_URL}item`)
      .then((data) => setProductsArray(data.data))
      .catch((error) => console.log("error calling API"));
  }, []);


  return <div> 
    <h1>Productos</h1>
    {
      ProductsArray.map(item => {
        return (
          <div key={item.id}>
            <div className="Card">
              <img src={item.image} style={{ width: '18rem' }}/>
              <div className="card-body">
                <h4 className="card-title">{item.product_name}</h4>
                <p className="card-text text-secondary">{item.description} </p>
                <Button variant="primary">Agregar al carrito</Button>
              </div>
            </div>
          </div>
        )
      })
    } 
    
    
    
  </div>    
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