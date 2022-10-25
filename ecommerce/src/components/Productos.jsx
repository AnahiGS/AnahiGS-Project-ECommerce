import React from 'react'
import Producto from './Producto'


const Productos = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <Producto/>
            </div>
            {/* <div className="col-md-4">
                <Producto/>
            </div>
            <div className="col-md-4">
                <Producto/>
            </div> */}
        </div>
    </div>
  )
}

export default Productos