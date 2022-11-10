import React from 'react';
import { Stack , Card, Container, Row} from 'react-bootstrap';

const SidebarSearch = () => {
    return (
        <> 
            <h1>Categories</h1>
            <Row>
            
            <Container>
                <Stack direction="horizontal" gap={3} >
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }} ><Card.Title>Health</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }}><Card.Title>Outdoors</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }}><Card.Title>Grocery</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }}><Card.Title>Sports</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }}><Card.Title>Kids</Card.Title>
                    </div>
                    <div className="bg-light border rounded" style={{ cursor: 'pointer' }}><Card.Title>Jewerly</Card.Title>
                    </div>    
                </Stack>
            </Container>
        </Row>  
        </> 
    );
};

export default SidebarSearch;