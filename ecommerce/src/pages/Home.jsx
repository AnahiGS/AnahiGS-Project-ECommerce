import React from 'react'
import CarouselPrincipal from "../components/CarouselPrincipal";
import ProductsList from "../components/ProductsList";

const Home = () => {
  return (
    
         <div className='Home'>
            <CarouselPrincipal/>
            <ProductsList/>
        </div>
    
  );
}

export default Home