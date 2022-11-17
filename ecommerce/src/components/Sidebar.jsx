import React, {useState} from 'react';
import { Stack , Card, Container, Row} from 'react-bootstrap';
import '../styles/index.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode} from 'swiper'
import 'swiper/css'
import "swiper/css/free-mode"
// import { useProductContext } from '../context/ProductContext';


const SidebarSearch = () => {
    // const context = useProductContext()

    const cardTitle= (event) =>{
        // context.setCategories(event.target.name)
        console.log(event.target)
    }
    
    return (
        <div className="col-12 d-flex align-content-center justify-content-center">
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-head-style-one">
                    <h1>Categories</h1>
                    </div>
                </div>
                </div>

                
                <div className='container py-4 px-4 justify-content-center bg-light'>
                    <Swiper
                    FreeMode={true}
                    grabCursor={true}
                    modules={[FreeMode]}
                    className='mySwiper'
                    slidesPerView={5}
                    spaceBetween={10}
                    >
                        <SwiperSlide>
                            <h1 style={{ cursor: 'pointer' }} name='Health' >Health
                            </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 style={{ cursor: 'pointer' }} name='Outdoors'>Outdoors
                            </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                        <h1 style={{ cursor: 'pointer' }} name='Grocery'>Grocery
                        </h1>  
                        </SwiperSlide>
                        <SwiperSlide>
                        <h1 style={{ cursor: 'pointer' }} name='Sports'>Sports
                        </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                        <h1 style={{ cursor: 'pointer' }} name='Kids'>Kids
                        </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                        <h1 style={{ cursor: 'pointer' }} name='Jewerly'>Jewerly
                        </h1>
                        </SwiperSlide>
                        
                        
                            
                    </Swiper>
                </div>
                   
            </div>
        </div> 
    );
};

export default SidebarSearch;