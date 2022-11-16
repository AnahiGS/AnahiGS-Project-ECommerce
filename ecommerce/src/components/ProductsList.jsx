import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import SidebarSearch from './Sidebar';
import Producto from './Producto';
import './Products.css'
import { useProductContext } from "../context/ProductContext";

const ProductsList = () => {
  const context = useProductContext()


  return (
    <>  
    <h1>Productos</h1>
      <Row>
          
          <div className='col'>
            <div id='box-products' className='row row-cols-4'>
                { context.loading
                  ? <p className='textLoading py-2'>Cargando...</p>
                  : context.productList.filter(item => {
                    if (context.search === '') {
                      return item
                    } else if (item.product_name.toLowerCase().includes(context.search.toLowerCase()) ) {
                      return item
                    }
                    return null
                  })
                    .map((item, index) => ((
                        <div key={index} className='cardProduct '>

                            <Producto
                            {...item}/>
                        </div>
                      )             
                    ) 
                  )
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