import React from "react";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import CarouselPrincipal from "./components/CarouselPrincipal";
// import NavbarComponent from "./components/Navbar";
// import ProductsList from "./components/ProductsList";
import NavbarComponent from './components/Navbar';
import RoutesIndex from "./routes/index";

function App() {

  
  return (
    <div className="App">
      <NavbarComponent/>
      <RoutesIndex />
      
    </div>
  );
}


export default App
