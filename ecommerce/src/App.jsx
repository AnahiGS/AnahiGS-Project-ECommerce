import React from "react";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import CarouselPrincipal from "./components/CarouselPrincipal";
// import NavbarComponent from "./components/Navbar";
// import ProductsList from "./components/ProductsList";
import NavbarComponent from './components/Navbar';
import RoutesIndex from "./routes/index";
import { ProductProvider } from "./context/ProductContext";

function App() {

  
  return (
    <ProductProvider>
      <div className="App">
        <NavbarComponent/>
        <RoutesIndex />   
      </div>
    </ProductProvider>
  );
}


export default App
