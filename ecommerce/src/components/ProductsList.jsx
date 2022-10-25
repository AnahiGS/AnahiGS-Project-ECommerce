import React, {useEffect,useState} from "react";
import axios from "axios";
import { Card, Button, Row } from "react-bootstrap";
import SidebarSearch from './Sidebar';
import Producto from './Producto';
import './Products.css'

const ProductsList = () => {
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
      <Row>
          <div className="col-2">
              <SidebarSearch/>
          </div>
          <div className='col'>
            <div id='box-products' className='row row-cols-4'>
                { ProductsArray.length===0 ? (<h3>cargando productos</h3>)
                  : (ProductsArray.map((item,index) => (
                      item.image !== undefined &&(
                        <Producto
                          product={item}
                          key={index}
                        />
                      )             
                    ) 
                  )) 
                }  
            </div>
          </div>
      </Row>
    </>
  ); 
};

export default ProductsList;



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

{/* <div className="Card p-5" key={item.id}>
                    <img src={item.image} style={{ width: '13rem' }}/>
                    <div className="card-body">
                      <h4 className="card-title">{item.product_name}</h4>
                      <p className="card-text text-secondary ">{item.description} </p>
                      <Button variant="primary">Agregar al carrito</Button>
                    </div>
                  </div>  */}