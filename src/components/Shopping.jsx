import React from 'react'
import Container from './Container'
import { MdLocalShipping } from 'react-icons/md'
import { IoReloadOutline } from 'react-icons/io5'
import phone from "../assets/phone.png"
import electronic from "../assets/electronic.png"
import furniture from "../assets/furniture.png"

const Shopping = () => {
  return (
    <section>
        <Container>
           <div className="">
            <div className="flex py-4">
             <div className="w-1/3 items-center">
             <p className=''><span className='text-[25px] font-dm px-3'>2</span>Two years warranty</p>
             </div>
             <div className="w-1/3 justify-center flex items-center pr-[60px]">
             <MdLocalShipping />
             <h2 className='pl-3'>Free shipping</h2>
             </div>
             <div className="w-1/3 justify-center flex items-center">
             <IoReloadOutline />
             <p className='pl-3'>Return policy in 30 days</p>
             </div>
            </div>
            <div className="border-b-1 border-[#26262640] pt-2"></div>

            <div className="flex pt-[200px] gap-x-[60px]">
             <div className="w-[580px] h-auto relative">
                <img src={phone} alt=""/>
                <div className="absolute top-[350px] left-10">
            <h1 className='text-[40px] font-dm text-shadow-lg/20'>Phones Sale</h1>
            <p className='py-5 pb-[50px] text-shadow-lg/20 font-dm'>Up to <span className='text-[34px] px-1 font-dm'>30%</span>sale for all phones!</p>
           <a className=' bg-black px-9 py-4 text-white text-center font-dm'href="#">Shop Now</a>
        </div>
             </div>
             <div className="w-[580px] h-auto relative">
                <img src={electronic} alt="" className=''/>
                                <div className="absolute top-[40px] left-5">
            <h1 className='text-[40px] font-dm text-shadow-lg/20'>Electronics Sale</h1>
            <p className='py-5 pb-[50px] text-shadow-lg/20 font-dm text-[14px]'>Up to <span className='text-[34px] px-1 font-dm'>70%</span>sale for all electronics items!</p>
           <a className=' bg-black px-9 py-4 text-white text-center font-dm'href="#">Shop Now</a>
        </div>
                 <img src={furniture} alt="" className='py-[30px]'/>

                                 <div className="absolute top-[345px] left-5">
            <h1 className='text-[40px] font-dm text-shadow-lg/20'>Furniture Sale</h1>
            <p className='py-5 pb-[50px] text-shadow-lg/20 font-dm text-[14px]'>Up to <span className='text-[34px] px-1 font-dm'>50%</span>sale for all furniture items!</p>
           <a className=' bg-black px-9 py-4 text-white text-center font-dm'href="#">Shop Now</a>
        </div>
             </div>
            </div>
           </div>
        </Container>
    </section>
  )
}

export default Shopping