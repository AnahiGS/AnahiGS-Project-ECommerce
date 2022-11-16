import React from 'react';
import { Stack , Card, Container, Row} from 'react-bootstrap';
import { useProductContext } from '../context/ProductContext';
import Producto from './Producto';
// import { useProductContext } from '../context/ProductContext';


const SidebarSearch = () => {
    const context = useProductContext()
    

    const filterResult= (catItem) =>{
        // context.setCategories(event.target.name)
        context.productList.filter((item) =>{
            return item.category === catItem
        })
    }
    
    return (
        <> 
            <h1>Categories</h1>
            <Row>
            
            <Container>
                <Stack direction="horizontal" gap={3} >
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} onClick={() => filterResult('Health')} ><Card.Title >Health</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} onClick={() => filterResult('Outdoors')}><Card.Title>Outdoors</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} onClick={() => filterResult('Grocery')}><Card.Title>Grocery</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} onClick={() => filterResult('Sports')}><Card.Title>Sports</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} onClick={() => filterResult('Kids')}><Card.Title>Kids</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} onClick={() => filterResult('Jewerly')}><Card.Title>Jewerly</Card.Title>
                    </div>    
                </Stack>
            </Container>
        </Row>  
        <Row>
          
          <div className='col'>
            <div id='box-products' className='row row-cols-4'>
                { context.loading
                  ? <p className='textLoading py-2'>Cargando...</p>
                  : context.productList.map((item, index) => ((
                        <div key={index} className='cardP '>

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

export default SidebarSearch;