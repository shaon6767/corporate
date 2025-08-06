import React from 'react'
import Container from './Container'
import ban from "../assets/banner.png"
import Slider from 'react-slick';

const Banner = () => {
    var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:"absolute",
          left:"3%",
          top:"50%",
          transform:"translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          borderRight: "2px white solid",
          color:"transparent",
          padding:"10px 0",
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (

    <section className='bg-[#F5F5F3]'>
      <Container>
  <div className="">
       <div className="relative">
        <div className="absolute top-25 left-45 z-10">
            <h1 className='text-[40px] font-dm text-shadow-lg/20'>Final Offer</h1>
            <p className='py-5 pb-[50px] text-shadow-lg/20 font-dm'>Up to <span className='text-[34px] px-1 font-dm'>50%</span>sale for all furniture items!</p>
           <a className=' bg-black px-9 py-4 text-white text-center font-dm'href="#">Shop Now</a>
        </div>
      <Slider {...settings}>
            <div className="">
                <img src={ban} alt="" />
            </div>
            <div className="">
                <img src={ban} alt="" />
            </div>
            <div className="">
                <img src={ban} alt="" />
            </div>
            <div className="">
                <img src={ban} alt="" />
            </div>
      </Slider>
     </div>
  </div>
  </Container>
    </section>
  )
}

export default Banner