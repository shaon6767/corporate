import React, { useContext } from 'react'
import Container from '../components/Container'
import { IoMdGitCompare } from 'react-icons/io'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { ApiData } from '../components/ContextApi'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    let detail = useContext(ApiData)
  return (
    <Container>
     <>
          <div className="py-7 flex flex-wrap">
              {detail.map((item)=>(
            <div className="">
               <div className="">
                   <img src={item.thumbnail} alt="" />
               </div>
               <div className="flex">
                  <div className="">
                     <h3 className='text-[#1e8f80] font-dm text-[16px] font-bold mt-[10px]'>{item.title}</h3>
                     <p className='mt-[10px]'>Black</p>
                  </div>
                  <p className='mt-[10px] pr-5 text-green-600'>${item.price}</p>
               </div>
            </div>
            ))}
          </div>
     </>
    </Container>
  )
}

export default ProductDetails