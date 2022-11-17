import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css"
import imagen from '../assets/depositphotos_110819108-stock-illustration-grocery-shopping-discount-banner.jpg'

const CarouselPrincipal = () => {
  const BASE_URL = "https://ecomerce-master.herokuapp.com/api/v1/";

//   const [ProductsInfo, setProductsInfo] = useState({});

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}items`)
//       .then(({ data }) => setProductsInfo(data))
//       .catch((error) => console.log("error calling SWAPI"));
//   }, []);

  return (
    
      <Carousel >
        <Carousel.Item>
          <img
            
            className="d-block w-100"
            src={imagen}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
  );
};

export default CarouselPrincipal;