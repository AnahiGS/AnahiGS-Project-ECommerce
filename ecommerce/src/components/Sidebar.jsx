import React from 'react';
import { Stack , Card, Container, Row} from 'react-bootstrap';

const SidebarSearch = () => {
    return (
        <>
        <h3>Categories</h3>
        <Container fluid className='product-details m-3'>
            <Row>             
                <div className='card-stack'>
                    <Stack direction="horizontal" gap={3}>
                        <div className="bg-light border"><Card.Title>Health</Card.Title>
                        </div>
                        <div className="bg-light border"><Card.Title>Outdoors</Card.Title>
                        </div>
                        <div className="bg-light border"><Card.Title>Grocery</Card.Title>
                        </div>
                        <div className="bg-light border"><Card.Title>Sports</Card.Title>
                        </div>
                        <div className="bg-light border"><Card.Title>Kids</Card.Title>
                        </div>
                        <div className="bg-light border"><Card.Title>Jewerly</Card.Title>
                        </div>    
                    </Stack>
                </div>
            </Row>
        </Container>
        
        </>
    );
};

export default SidebarSearch;