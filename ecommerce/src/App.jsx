import React from "react";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import CarouselPrincipal from "./components/CarouselPrincipal";
// import NavbarComponent from "./components/Navbar";
// import ProductsList from "./components/ProductsList";
import NavbarComponent from './components/Navbar';
import RoutesIndex from "./routes/index";
import { ProductProvider } from "./context/ProductContext";
import {AuthProvider} from './context/AuthContext'

function App() {

  
  return (
    <AuthProvider>
      <ProductProvider>
        <div className="App">
          <NavbarComponent
          />
          <RoutesIndex />   
        </div>
      </ProductProvider>
    </AuthProvider>
  );
}


export default App
