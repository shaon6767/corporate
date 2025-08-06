import React from 'react'
import Container from './Container'
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import { MdFavorite } from 'react-icons/md'
import { TfiReload } from 'react-icons/tfi'
import { FaShoppingCart } from 'react-icons/fa'
import Slider from 'react-slick'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-[30px] top-[50%] z-40 bg-[rgba(0,0,0,0.35)] h-[40px] w-[41px] translate-y-[-50%] text-center leading-[35px] rounded-full text-[#fff]"
      onClick={onClick}
    >
     <GrLinkNext className='inline-block'/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
       className="absolute top-[50%] left-0 z-40 bg-[rgba(0,0,0,0.35)] h-[40px] w-[41px] translate-y-[-50%] text-center leading-[35px] rounded-full text-[#fff]"
      onClick={onClick}
    >
     <GrLinkPrevious className='inline-block'/>
    </div>
  );
}

const Arrivals = () => {
     var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className='py-6'>
        <Container>
            <h2 className='font-dm font-[700] text-[38px] pt-[70px]'>New Arrivals</h2>
            <div className="">
                  <div className="relative"> 
                    {/* 1st */}
                    <div className="absolute top-[200px] bg-white  opacity-0 hover:opacity-100 duration-400 ease-in-out z-50">
                     <ul className='flex items-center'>
                        <li className='ml-[140px] py-2'><a className='px-3 hover:font-semibold' href="#">Add to Wish List</a></li>
                        <MdFavorite /> 
                     </ul>
                     <ul className='flex items-center'>
                        <li className='ml-[195px]'><a className='px-2.5 hover:font-semibold' href="#">Compare</a></li>
                        <TfiReload /> 
                     </ul>
                     <ul className='flex items-center'>
                        <li className='ml-[188px] py-2'><a className='px-1 hover:font-semibold' href="#">Add to Cart</a></li>
                        <FaShoppingCart /> 
                     </ul>
                    </div>
                    {/* 2nd */}
                    <div className="absolute top-[200px] left-[326px] bg-white  opacity-0 hover:opacity-100 duration-400 ease-in-out z-50">
                     <ul className='flex items-center'>
                        <li className='ml-[140px] py-2'><a className='px-3 hover:font-semibold' href="#">Add to Wish List</a></li>
                        <MdFavorite /> 
                     </ul>
                     <ul className='flex items-center'>
                        <li className='ml-[195px]'><a className='px-2.5 hover:font-semibold' href="#">Compare</a></li>
                        <TfiReload /> 
                     </ul>
                     <ul className='flex items-center'>
                        <li className='ml-[188px] py-2'><a className='px-1 hover:font-semibold' href="#">Add to Cart</a></li>
                        <FaShoppingCart /> 
                     </ul>
                    </div>
                    {/* 3rd */}
                    <div className="absolute top-[200px] left-[652px] bg-white  opacity-0 hover:opacity-100 duration-400 ease-in-out z-50">
                     <ul className='flex items-center'>
                        <li className='ml-[140px] py-2'><a className='px-3 hover:font-semibold' href="#">Add to Wish List</a></li>
                        <MdFavorite /> 
                     </ul>
                     <ul className='flex items-center'>
                        <li className='ml-[195px]'><a className='px-2.5 hover:font-semibold' href="#">Compare</a></li>
                        <TfiReload /> 
                     </ul>
                     <ul className='flex items-center'>
                        <li className='ml-[188px] py-2'><a className='px-1 hover:font-semibold' href="#">Add to Cart</a></li>
                        <FaShoppingCart /> 
                     </ul>
                    </div>
                    {/* 4th */}
                    <div className="absolute top-[200px] left-[977px] bg-white  opacity-0 hover:opacity-100 duration-400 ease-in-out z-50">
                     <ul className='flex items-center'>
                        <li className='ml-[140px] py-2'><a className='px-3 hover:font-semibold' href="#">Add to Wish List</a></li>
                        <MdFavorite /> 
                     </ul>
                     <ul className='flex items-center'>
                        <li className='ml-[195px]'><a className='px-2.5 hover:font-semibold' href="#">Compare</a></li>
                        <TfiReload /> 
                     </ul>
                     <ul className='flex items-center'>
                        <li className='ml-[188px] py-2'><a className='px-1 hover:font-semibold' href="#">Add to Cart</a></li>
                        <FaShoppingCart /> 
                     </ul>
                    </div>

              {/* New */}
             <div className="">
              <div className="absolute top-[20px] left-3 z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>10%</h2>
              </div>
              <div className="absolute top-[20px] left-[340px] z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
              <div className="absolute top-[20px] left-[665px] z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
              <div className="absolute top-[20px] left-[990px] z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
             </div>

            <Slider {...settings}>
                    <img className='pr-8' src={one} alt="" />
                    <img className='pr-8' src={two} alt="" />
                    <img className='pr-8' src={three} alt="" />
                    <img className='pr-8' src={four} alt="" />
            </Slider>
                </div>

                 <div className="flex">
                  
                <div className="w-1/4 flex pt-2 gap-x-[90px] items-baseline">
                  <div className="">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                <div className="w-1/4 flex pt-2 gap-x-[90px]">
                  <div className="">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                      <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                <div className="w-1/4 flex pt-2 gap-x-[90px]">
                  <div className="">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                      <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                <div className="w-1/4 flex pt-2 gap-x-[90px]">
                  <div className="">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                      <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                 </div>
            
            </div>
        </Container>
    </section>
  )
}

export default Arrivals