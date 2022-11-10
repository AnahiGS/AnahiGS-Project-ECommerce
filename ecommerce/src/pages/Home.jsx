import React from 'react'
import CarouselPrincipal from "../components/CarouselPrincipal";
import ProductsList from "../components/ProductsList";
import SidebarSearch from '../components/Sidebar';

const Home = () => {
  return (
    
         <div className='Home'>
            <CarouselPrincipal/>
            <div className="col-2">
              <SidebarSearch/>
          </div>
            <ProductsList/>
        </div>
    
  );
}

export default Home