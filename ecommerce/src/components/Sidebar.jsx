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
                <Row>
                    <div className="col-12">
                        
                        <h1>Categories</h1>
                        
                    </div>
                </Row>

                <Row>
                <div className='container py-4 px-4 justify-content-center bg-light'>
                    <Swiper
                    FreeMode={true}
                    grabCursor={true}
                    modules={[FreeMode]}
                    className='mySwiper'
                    slidesPerView={5}
                    spaceBetween={8}
                    >
                        <SwiperSlide>
                            <h1 style={{ cursor: 'pointer', fontSize: '30px' }} name='Health' >Health
                            </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 style={{ cursor: 'pointer', fontSize: '30px' }} name='Outdoors'>Outdoors
                            </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 style={{ cursor: 'pointer', fontSize: '30px' }} name='Grocery'>Grocery
                            </h1>  
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 style={{ cursor: 'pointer', fontSize: '30px' }} name='Sports'>Sports
                            </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 style={{ cursor: 'pointer', fontSize: '30px' }} name='Kids'>Kids
                            </h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1 style={{ cursor: 'pointer', fontSize: '30px' }} name='Jewerly'>Jewerly
                            </h1>
                        </SwiperSlide>
                        
                        
                            
                    </Swiper>
                </div>
                </Row>   
            </div>
        </div> 
    );
};

export default SidebarSearch;