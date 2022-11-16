import React, {useState} from 'react';
import { Stack , Card, Container, Row} from 'react-bootstrap';
// import { useProductContext } from '../context/ProductContext';


const SidebarSearch = () => {
    // const context = useProductContext()

    const cardTitle= (event) =>{
        // context.setCategories(event.target.name)
        console.log(event.target)
    }
    
    return (
        <> 
            <h1>Categories</h1>
            <Row>
            
            <Container>
                <Stack direction="horizontal" gap={3} onClick={cardTitle}>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} name='Health' ><Card.Title name='Health'>Health</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} name='Outdoors'><Card.Title>Outdoors</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} name='Grocery'><Card.Title>Grocery</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} name='Sports'><Card.Title>Sports</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} name='Kids'><Card.Title>Kids</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} name='Jewerly'><Card.Title>Jewerly</Card.Title>
                    </div>    
                </Stack>
            </Container>
        </Row>  
        </> 
    );
};

export default SidebarSearch;