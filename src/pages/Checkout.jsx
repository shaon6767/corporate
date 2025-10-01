import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Checkout = () => {
  let data = useSelector((state) => state.product.cartItem)
  
  let {totalPrice} = data.reduce((acc, item)=>{
    acc.totalPrice += item.price * item.quantity
    return acc;
  },{totalPrice:0})

  return (

  <Container>
      <section className='py-8'>
      <div className="max-w-6xl mx-auto">
        <h2 className='font-dm text-[36px] ml-[15px] font-bold'>Checkout</h2>
        <p className='mb-8 ml-[15px]'> <Link to = "/">Home</Link>/<Link to = "/checkout">Checkout</Link></p>
        
        <div className="">
          <div className="">
            <div className="bg-white p-6 mb-6">
              <h3 className='font-dm text-[20px] font-bold mb-4'>Shipping Address</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name" className="w-full border border-[#F0F0F0] px-4 py-3" />
                    <input type="text" placeholder="Last Name" className="w-full border border-[#F0F0F0] px-4 py-3" />
                </div>
                <input type="text" placeholder="Country" className="w-full border border-[#F0F0F0] px-4 py-3" />
                <input type="text" placeholder="Address" className="w-full border border-[#F0F0F0] px-4 py-3" />
                <div className="flex gap-4">
                  <input type="text" placeholder="City" className="w-1/2 border border-[#F0F0F0] px-4 py-3" />
                  <input type="text" placeholder="Postal Code" className="w-1/2 border border-[#F0F0F0] px-4 py-3" />
                </div>
                <input type="text" placeholder="Phone" className="w-full border border-[#F0F0F0] px-4 py-3" />
                <input type="text" placeholder="Email Address" className="w-full border border-[#F0F0F0] px-4 py-3" />
              </div>
            </div>

            <div className="bg-white p-6">
              <h3 className='font-dm text-[20px] font-bold mb-4'>Payment Method</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Card Number" className="w-full border border-[#F0F0F0] px-4 py-3" />
                <div className="flex gap-4">
                  <input type="text" placeholder="MM/YY" className="w-1/2 border border-[#F0F0F0] px-4 py-3" />
                  <input type="text" placeholder="CVV" className="w-1/2 border border-[#F0F0F0] px-4 py-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="">
            <div className="bg-white p-6 top-4">
              <h3 className='font-dm text-[20px] font-bold mb-4'>Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {data.map((item, i) => (
                  <div key={i} className="flex gap-3 border-b border-[#F0F0F0] pb-4">
                    <img className='h-[60px] w-[60px]' src={item.thumbnail} alt="" />
                    <div>
                      <h4 className='font-dm text-[14px] font-bold'>{item.title}</h4>
                      <p className='font-dm text-[12px] text-[#767676]'>Qty: {item.quantity}</p>
                      <p className='font-dm text-[16px] font-bold'>${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-[#F0F0F0] pt-4">
                <div className="flex justify-between">
                  <span className='font-dm text-[14px]'>Subtotal</span>
                  <span className='font-dm text-[14px]'>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className='font-dm text-[14px]'>Shipping</span>
                  {data.length > 0 ? 
                  <span className='font-dm text-[14px]'>$5.00</span>
                  : <span className='font-dm text-[14px]'>$0.00</span> }
                </div>

                <div className="flex justify-between border-t pb-[40px] border-[#F0F0F0] pt-2">
                  <span className='font-dm text-[16px] font-bold'>Total</span>
                  <span className='font-dm text-[16px] font-bold'>${(totalPrice).toFixed(2)}</span>
                </div>
              </div>

              <div className="pb-[20px] flex justify-end">
                <button className='text-black font-semibold border-black border-2 cursor-pointer h-[50px] w-[180px] text-[14px] hover:bg-black hover:text-white duration-300 ease-in-out'>
                PLACE ORDER
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
  )
}

export default Checkout