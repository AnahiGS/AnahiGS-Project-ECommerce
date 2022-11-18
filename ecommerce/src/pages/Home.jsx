import React from 'react'
import CarouselPrincipal from "../components/CarouselPrincipal";
import ProductsList from "../components/ProductsList";
import SidebarSearch from '../components/Sidebar';

const Home = () => {
  return (
    
         <div className='Home'>
            <CarouselPrincipal/>
            <div className="container m-5">
              <SidebarSearch/>
            </div>
            <div className='container box-products'>
              <ProductsList/>
            </div>
        </div>
    
  );
}

export default Home