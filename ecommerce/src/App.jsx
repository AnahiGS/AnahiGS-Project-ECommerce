import React from "react";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselPrincipal from "./components/CarouselPrincipal";
import NavbarComponent from "./components/Layer";
import ProductsList from "./components/ProductsList";


function App() {

  
  return (
    <div className="App">
      <NavbarComponent />
      <CarouselPrincipal />
      {/* <Producto /> */}
      <ProductsList/>
    </div>
  );
}


export default App
