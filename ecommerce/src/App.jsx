import React from "react";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import CarouselPrincipal from "./components/CarouselPrincipal";
// import NavbarComponent from "./components/Navbar";
// import ProductsList from "./components/ProductsList";
import Home from './pages/Home';
import NavbarComponent from './components/Navbar';

function App() {

  
  return (
    <div className="App">
      <NavbarComponent/>
      <Home/>
      
    </div>
  );
}


export default App
