import React, {useState} from "react";
import { Card, Button, Row } from "react-bootstrap";
import SidebarSearch from './Sidebar';
import Producto from './Producto';
import './Products.css'
import { useProductContext } from "../context/ProductContext";

const ProductsList = () => {
  const context = useProductContext();
  const [currentPage, setCurrentPage] = useState(0)   

  const filteredProducts = () => {
    return context.productList.slice(currentPage, currentPage + 12)
  }

  const nextPage= () =>{
    setCurrentPage(currentPage + 12)
  }

  const prevPage= () =>{
    if(currentPage >0)
    setCurrentPage(currentPage - 12)
  }

  return (
    <>  
    <h1>All products</h1>
      <Row>
          
          <div className='col'>
            <div id='box-products' className='row row-cols-4'>
                { context.loading
                  ? <p className='textLoading py-2'>Cargando...</p>
                  : filteredProducts().filter(item => {
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
      <div className="container my-5">
        <Row>
          <button className="btn btn-primary" style={{width:'100px'}} onClick={prevPage}>Anteriores</button>
          &nbsp;
          <button className="btn btn-primary"style={{width:'100px'}} onClick={nextPage}>Siguientes</button>
        </Row>
      </div>
      
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