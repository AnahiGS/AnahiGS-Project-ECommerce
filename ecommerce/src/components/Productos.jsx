import React from "react";
import { Card, Button } from "react-bootstrap";

const Productos = () => {
  return (
    <div>
      <h1>Productos</h1>
      <h3>Kids</h3>
      <h3>Shoes</h3>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Productos;
