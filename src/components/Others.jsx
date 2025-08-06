import React from 'react'
import Container from './Container'
import bottle from "../assets/bottle.png"
import bagone from "../assets/bagwhite.png"
import bagtwo from "../assets/bagblck.png"
import cup from "../assets/cup.png"
import clock from "../assets/clock.png"
import cap from "../assets/cap.png"
import table from "../assets/table.png"
import earphone from "../assets/earphone.png"
import sunglass from "../assets/sunglass.png"




const Others = () => {
  return (
   <section>
    <Container>
      <div className="relative">
            <div className="flex gap-x-10 pt-[100px]">
            <div className="w-1/4">
              <img src={bottle} alt="" />
            </div>
            <div className="w-1/4">
              <img src={bagone} alt="" />
            </div>
            <div className="w-1/4">
              <img src={cup} alt="" />
            </div>
            <div className="w-1/4">
              <img src={bagtwo} alt="" />
            </div>
            </div>

                <div className="">
              <div className="absolute top-[110px] left-3 z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
              <div className="absolute top-[110px] left-[350px] z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
              <div className="absolute top-[110px] left-[685px] z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
              <div className="absolute top-[110px] left-[1020px] z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
             </div>

        </div>

            <div className="flex">
                  
                <div className="w-1/4 flex pt-2 gap-x-[90px] items-baseline">
                  <div className="">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                     <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                <div className="w-1/4 flex pt-2 gap-x-[90px]">
                  <div className="pl-[12px]">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                      <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                <div className="w-1/4 flex pt-2 gap-x-[90px]">
                  <div className="pl-[20px]">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                      <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                <div className="w-1/4 flex pt-2 gap-x-[90px]">
                  <div className="pl-[30px]">
                     <h2 className='font-dm font-semibold w-[160px]'>Basic Crew Neck Tee</h2>
                      <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                 </div>

                 <div className="pt-[120px] relative">
                    <div className="w-full">
                    <img src={clock} alt="" />
                    </div>
                    <div className="absolute top-[40%] left-[70%] translate-x-[-70%] ">
                      <h2 className='text-[39px] font-semibold font-dm py-4'>Phone of the year</h2>
                      <p className='pb-8 w-[511px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                      <button className='py-2 bg-[black] px-4 text-[#fff] cursor-pointer'>Shop Now</button>
                    </div>
                 </div>

                 <div className="relative pt-[100px]">
                    <div className="">
                        <h2 className='text-[38px] font-semibold font-dm py-4'>Special Offers</h2>
                    </div>
                    <div className="flex gap-x-5">
                        <div className="w-1/4">
                        <img src={cap} alt="" />
                        </div>
                        <div className="w-1/4">
                        <img src={table} alt="" />
                        </div>
                        <div className="w-1/4">
                        <img src={earphone} alt="" />
                        </div>
                        <div className="w-1/4">
                        <img src={sunglass} alt="" />
                        </div>
                    </div>
                <div className="">
              <div className="absolute top-[200px] left-3 z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
              <div className="absolute top-[200px] left-[343px] z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
              <div className="absolute top-[200px] left-[673px] z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
              <div className="absolute top-[200px] left-[1004px] z-10">
                <h2 className='bg-[#262626] text-[white] font-dm py-2 px-9 '>New</h2>
              </div>
             </div>
                 </div>

                <div className="flex pb-[140px]">
                  
                <div className="w-1/4 flex pt-2 gap-x-[90px] items-baseline">
                  <div className="">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                     <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                <div className="w-1/4 flex pt-2 gap-x-[90px]">
                  <div className="pl-[5px]">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                      <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                <div className="w-1/4 flex pt-2 gap-x-[90px]">
                  <div className="pl-[11px]">
                     <h2 className='font-dm font-semibold'>Basic Crew Neck Tee</h2>
                      <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                <div className="w-1/4 flex pt-2 gap-x-[90px]">
                  <div className="pl-[16px]">
                     <h2 className='font-dm font-semibold w-[160px]'>Basic Crew Neck Tee</h2>
                      <p className='pt-2 font-dm'>Black</p>
                  </div>
                  <div className="">
                     <p className='font-dm'>$44.00</p>
                  </div>
                </div>
                 </div>
    </Container>
   </section>
  )
}

export default Others