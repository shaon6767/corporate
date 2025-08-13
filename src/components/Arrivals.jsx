import React, { useContext } from 'react'
import Container from './Container'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { IoMdGitCompare } from 'react-icons/io'
import { ApiData } from './ContextApi'
import Slider from 'react-slick'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-0 top-[50%] z-40 bg-[rgba(0,0,0,0.35)] h-[40px] w-[41px] translate-y-[-50%] text-center leading-[35px] rounded-full text-[#fff]"
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
      className="absolute left-0 top-[50%] z-40 bg-[rgba(0,0,0,0.35)] h-[40px] w-[41px] translate-y-[-50%] text-center leading-[35px] rounded-full text-[#fff]"
      onClick={onClick}
    >
     <GrLinkPrevious className='inline-block'/>
    </div>
  );
}

const Arrivals = () => {

   let data = useContext(ApiData)

    var Products = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
   
  return (
    <div>
      <Container>
         <h2 className='text-[#262626] font-dm text-[36px] font-bold'>New Arrivals</h2>
         

         <div className="">
            <Slider {...Products}>
            {data.map((item)=>(
            <div className="w-[24%]">
               <div className="relative group">
                <Link to="/product">
                  <img src={item.thumbnail} alt="" />
                </Link>
               <div className="bg-[white] absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-100 duration-300">
                  <ul className='pr-2 pt-4 pb-4'>
                     <li className='flex items-center justify-end gap-3'> <span>Add to wish List </span><FaHeart /></li>
                     <li className='flex items-center justify-end gap-3 py-2'> <span>Compare </span><IoMdGitCompare /></li>
                     <li className='flex items-center justify-end gap-3'> <span>Add to Cart </span><FaShoppingCart /></li>
                  </ul>
               </div>
               </div>
               <div className="flex justify-between">
                  <div className="">
                     <h3 className='text-[#1e8f80] font-dm text-[16px] font-bold mt-[10px]'>{item.title}</h3>
                     <p className='mt-[10px]'>Black</p>
                  </div>
                  <p className='mt-[10px] pr-5 text-green-600'>${item.price}</p>
               </div>
            </div>
            ))}
            </Slider>
         </div>
      </Container>

    </div>
  )
}

export default Arrivals