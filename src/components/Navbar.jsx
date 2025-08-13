import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import img from "../assets/Image.png"
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
    let [category, setCategory] = useState(false)
    let [accShow, setAccShow] = useState(false)
    let [cart, setCart] = useState(false)
    let cateRef = useRef()
    let accRef = useRef()
    let cartRef = useRef()

    useEffect(()=>{
            document.addEventListener("click", (e)=>{
          if(cateRef.current.contains(e.target)){
           setCategory(!category)
           
          }else{
            setCategory(false)       
          } 

          if(accRef.current.contains(e.target)){
          setAccShow(!accShow)
          
          }else{
          setAccShow(false)
          }

          if(cartRef.current.contains(e.target)){
          setCart(!cart)
          
          }else{
          setCart(false)
          }
          

    })
    },[category,accShow,cart])

  return (
    <section className='bg-[#F5F5F3]'>
     <Container>
    <div className="flex items-center py-6">
        <div className="w-1/4 relative z-20">
        <div className="flex items-center cursor-pointer" ref={cateRef}> 
            <FaBars />
            <h2 className='pl-2 font-dm text-[16px]'>Shop by Category</h2>
        </div>
         {category &&
         <div className="bg-[#262626] py-3 absolute top-15 left-0 w-full cursor-pointer">
            <ul>
                <li className='font-dm pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] text-[rgba(255,255,255,0.72)] py-3'><a href="#">Accesories</a></li>
                <li className='font-dm pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] text-[rgba(255,255,255,0.72)] py-3'><a href="#">Furniture</a></li>
                <li className='font-dm pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] text-[rgba(255,255,255,0.72)] py-3'><a href="#">Electronics</a></li>
                <li className='font-dm pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] text-[rgba(255,255,255,0.72)] py-3'><a href="#">Clothes</a></li>
                <li className='font-dm pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] text-[rgba(255,255,255,0.72)] py-3'><a href="#">Bags</a></li>
                <li className='font-dm pl-3 hover:pl-6 duration-300 ease-in-out hover:text-[#fff] text-[rgba(255,255,255,0.72)] py-3'><a href="#">Home appliances</a></li>
            </ul>
         </div>
         }
        </div>
        <div className="w-2/4">
        <div className="relative">
            <input className='w-full border-1 border-white bg-white px-3 py-3 text-[#C4C4C4]' type="search" placeholder='Search Products'  />
            <div className="absolute top-[50%] right-3 translate-y-[-50%]">
                <IoSearch />
            </div>
        </div>
        </div>
        <div className="w-1/4 relative">
        <div className="flex justify-end">
         <div className="flex pr-10" ref={accRef}>
            <FaUser />
            <IoMdArrowDropdown />
         </div>
         <div className="pr-2" ref={cartRef}>
            <FaShoppingCart />
         </div>
        </div>
          
        {accShow &&
         <div className="w-[200px] absolute top-14 left-[56px] z-30">
          <ul>
           <li className='font-dm text-center py-2 text-[rgba(255,255,255,0.73)] bg-[#262626] hover:bg-white hover:text-[#262626] duration-300 ease-in-out'><a href="#">My Acoount</a></li>
           <li className='font-dm text-center py-2 text-[rgba(255,255,255,0.73)] bg-[#262626] hover:bg-white hover:text-[#262626] duration-300 ease-in-out'><a href="#">Log Out</a></li>
          </ul>
         </div>
        }
        
        {cart &&
       <div className="">
         <div className="flex items-center absolute top-20 left-[40px] w-[280px] bg-[#F5F5F3] z-40">
          <div className="">
           <img src={img} alt="" />
          </div>
          <div className="px-6">
           <h2 className='font-dm text-[14px] font-semibold py-2'>Black Smart Watch</h2>
           <h2 className='font-dm text-[16px] font-semibold'>$44.00</h2>
          </div>
          <div className="">
           <RxCross2/>
          </div>
        </div>

        <div className="absolute top-40 left-[40px] w-[280px] bg-white z-50">
          <div className="py-3">
            <h2>Subtotal: <span className='font-dm text-[18px] font-semibold'>$44.00</span></h2>
          </div>
          <div className="flex gap-6">
            <button className='text-black font-semibold border-black border-2 text-[14px] px-8 py-3 hover:bg-black hover:text-white duration-300 ease-in-out'>View Cart</button>
            <button className='text-black font-semibold border-black border-2 text-[14px] px-8 py-3 hover:bg-black hover:text-white duration-300 ease-in-out'>Checkout</button>
          </div>
        </div>
       </div>
        }

        </div>
    </div>
         
     </Container>
    </section>
  )
}

export default Navbar