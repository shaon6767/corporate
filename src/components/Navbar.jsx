import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import img from "../assets/Image.png"
import { RxCross2 } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartDelete } from './slice/productSlice'

const Navbar = () => {
  let navigate = useNavigate()
  let data = useSelector((state) => state.product.cartItem)
  let [category, setCategory] = useState(false)
  let [accShow, setAccShow] = useState(false)
  let [cart, setCart] = useState(false)
  let cateRef = useRef()
  let accRef = useRef()
  let cartRef = useRef()
  let cartDropdownRef = useRef()

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateRef.current.contains(e.target)) {
        setCategory(!category)

      } else {
        setCategory(false)
      }

      if (accRef.current.contains(e.target)) {
        setAccShow(!accShow)

      } else {
        setAccShow(false)
      }

      if (cartRef.current.contains(e.target)) {
        setCart(!cart)
      } else if (cartDropdownRef.current && !cartDropdownRef.current.contains(e.target)) {
        setCart(false)
      }

    })
  }, [category, accShow, cart])


  let handleCart = () => {
    navigate("/cart")
  }

  let dispatch = useDispatch()

  let handleDelete = (i,e) => {
    e.stopPropagation();
    dispatch(cartDelete(i));
  }
  let { totalPrice } = data.reduce((acc, item) => {
    acc.totalPrice += item.price * item.quantity
    return acc;
  }, { totalPrice: 0 })

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
              <input className='w-full border-1 border-white bg-white px-3 py-3 text-[#C4C4C4]' type="search" placeholder='Search Products' />
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
              <div className="pr-2 flex relative" ref={cartRef}>
                {data.length > 0 &&
                  <>
                    <div className="absolute top-[-20px] right-[-5px] h-[20px] w-[20px] bg-red-600 text-center leading-[20px] rounded-full">
                      <h2 className='text-[white] text-[18px] font-semibold'>{data.length}</h2>
                    </div>
                  </>
                }
                <div className="">
                  <FaShoppingCart />
                </div>
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
            {data.length > 0 &&
              <>
                {cart &&
                
                  <div className="">
                    <div className="items-center absolute top-20 left-[40px] w-[280px] z-40" ref={cartDropdownRef}>
                      {data.map((item, i) => (
                        <div className='grid grid-cols-7 gap-2 bg-[#F5F5F3] items-center justify-center py-2'>
                          <div className="col-span-2">
                            <img className='h-[50px] w-[50px]' src={item.thumbnail} alt="" />
                          </div>
                          <div className="col-span-4">
                            <h2 className='font-dm text-[14px] font-semibold py-2'>{item.title}</h2>
                            <h2 className='font-dm text-[16px] font-semibold'>${item.price}</h2>
                          </div>
                          <div className="col-span-1">
                            <div onClick={(e) => handleDelete(i,e)} className="">
                              <RxCross2 />
                            </div>
                          </div>
                        </div>

                      ))}

                      <div className=" w-[280px] bg-[white] z-50">
                        <div className="py-2">
                          <h2>Subtotal: <span className='font-dm text-[18px] font-semibold'>${(totalPrice).toFixed(2)}</span></h2>
                        </div>
                        <div className="flex gap-10">
                          <button onClick={handleCart} className='text-black font-semibold border-black border-2 h-[50px] w-[130px] text-[14px] cursor-pointer hover:bg-black hover:text-white duration-300 ease-in-out'>View Cart</button>
                          <Link to="/checkout"><button className='text-black font-semibold border-black border-2 cursor-pointer h-[50px] w-[120px] text-[14px] hover:bg-black hover:text-white duration-300 ease-in-out'>Checkout</button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </>
            }

          </div>
        </div>

      </Container>
    </section>
  )
}

export default Navbar