import React from "react";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselPrincipal from "./components/CarouselPrincipal";
import NavbarComponent from "./components/Layer";
import Productos from "./components/Productos";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <CarouselPrincipal />
      <Productos />
    </div>
  );
}


export default App
