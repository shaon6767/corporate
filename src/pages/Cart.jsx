import React from 'react'
import Container from '../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { PiSmileySadLight } from 'react-icons/pi'
import { decrement, increment, productRemove } from '../components/slice/productSlice'

const Cart = () => {
  let data = useSelector((state) => state.product.cartItem)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let handleIncrement = (i)=>{
  dispatch(increment(i));
  }
  let handleDecrement = (i)=>{
  dispatch(decrement(i));
  }
  let handleRemove = (i)=>{
    dispatch(productRemove(i));
    
  }
   let handleCheckout = () => {
    navigate("/checkout")
  }


  let {totalPrice,totalQuantity} = data.reduce((acc, item)=>{
    acc.totalPrice += item.price * item.quantity
    acc.totalQuantity += item.quantity
    return acc;
  },{totalPrice:0,totalQuantity:0})


  return (
    <Container>
      <div className="mt-[100px]">
        <h2 className='text-[50px] font-semibold'>Cart</h2>
        <p className='text-[20px]'><Link to="/">Home</Link>/ <Link to="/cart">Cart</Link></p>
      </div>

      <div className="mt-[150px] mb-[50px]">
        <div className="">
          <div class="mx-auto">
            <div class="">
              <div class="mx-auto w-full">
                {data.length > 0 ? (
                  <>
                    <div className="bg-[#F5F5F3] p-1">
                      <div class=" grid grid-cols-6 gap-8">
                        <div className="ml-[20px]">
                          <h2 href="#" class="text-[20px] font-semibold">
                            Product
                          </h2>
                        </div>
                        <div className="flex justify-center">
                          <h2 href="#" class="text-[20px] font-semibold">
                            Title
                          </h2>
                        </div>
                        <div className="flex justify-center">
                         
                        </div>
                        <div class=" flex justify-end">
                          <p className='text-[20px] font-semibold mr-[55px]'>Price</p>
                        </div>
                        <div class="flex justify-center">
                          <h2 className='text-[20px] font-semibold ml-[55px]'>Quantity</h2>
                        </div>
                        <div class="flex justify-center mr-[25px]">
                          <p class="text-[20px] font-semibold text-gray-900 ml-[8px] dark:text-black">Total</p>
                        </div>

                      </div>
                    </div>

                    {data.map((item,i) => (
                      <div class="">
                        <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                          <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                            <div className="gap-8 items-center grid grid-cols-6">
                              <div className="flex justify-start">
                                <a href="#" class="shrink-0 md:order-1">
                                  <img className='w-[100px] h-[100px]' src={item.thumbnail} alt="" />
                                </a>
                              </div>
                              <div className="flex justify-start w-[200px]">
                                <Link
                                  to={`/product/${item.id}`}
                                  className="text-base text-[18px] font-medium text-gray-900 hover:underline dark:text-black"
                                >
                                  {item.title}
                                </Link>
                              </div>
                              <div onClick={() => handleRemove(i)} className="text-[25px] flex justify-center w-[200px] items-center ml-[40px]">
                                <RiDeleteBinLine />
                              </div>
                              <div class="">
                                <p class="text-base font-bold flex justify-center text-gray-900 ml-[45px] dark:text-black">${item.price}</p>
                              </div>
                              <div className="">
                                <div class="flex items-center justify-start ml-[90px]">
                                  <button onClick={()=> handleDecrement(i)} type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                    </svg>
                                  </button>
                                  <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-black focus:outline-none focus:ring-0 dark:text-black" placeholder="" value={item.quantity} required />
                                  <button onClick={()=> handleIncrement(i)} type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                    <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div class="flex justify-start">
                                <p class="text-base font-bold text-gray-900 ml-[69px] relative left-[10px] dark:text-black">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="flex gap-2 items-center justify-center pb-[100px]">
                    <p className="text-[24px]">No data found </p>
                    <PiSmileySadLight className='text-[30px]' />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="mt-[100px] grid grid-cols-3 pb-[100px]">
      <div className=""></div>
      <div className=""></div>

      {data.length > 0 &&
      <div className="">
      <h2 className='flex justify-end text-[18px] font-bold pb-[20px]'>Cart Totals</h2>
      <div className="flex">
      <h2 className='w-1/2 px-10 py-3 border-1 border-[rgb(180,167,167)] font-bold'>Subtotal</h2>
      <p className='w-1/2 px-10 py-3 border-1 border-[rgb(180,167,167)] font-semibold'>{(totalPrice).toFixed(2)}$</p>
      </div>
      <div className="flex pb-[50px]">
      <h2 className='w-1/2 px-10 py-3 border-1 border-[rgb(180,167,167)] font-bold'>Quantity</h2>
      <p className='w-1/2 px-10 py-3 border-1 border-[rgb(180,167,167)] font-semibold'>{totalQuantity}</p>
      </div>

      <div className="flex justify-end">
        <button onClick={()=>handleCheckout()} className='text-black font-semibold border-black border-2 cursor-pointer h-[50px] w-[160px] text-[14px] hover:bg-black hover:text-white duration-300 ease-in-out'><a href="#">Proceed to Checkout</a></button>
      </div>

      </div>
      }
      </div>

    </Container>
  )
}

export default Cart