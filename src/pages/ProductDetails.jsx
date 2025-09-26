import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { IoMdGitCompare } from 'react-icons/io'
import { FaCircle, FaHeart, FaPlus, FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { ApiData } from '../components/ContextApi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { GoPlus } from 'react-icons/go'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
  let navigate = useNavigate()

  let productId = useParams()

  let [singleProduct, setSingleProduct] = useState([])

  // console.log(productId);

  let getProductId = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleProduct(response.data)
    })
  }

  useEffect(() => {
    getProductId()
  }, [])

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    return (
      singleProduct.rating > index + 1 ? <FaStar className='text-[gold]' /> : singleProduct.rating > number ? <FaStarHalfAlt className='text-[#d3bc39]' /> : <FaRegStar />
    )
  })


  let [dropdown, setDropdown] = useState(false)
  let [dropdowntwo, setDropdownTwo] = useState(false)
  let dropRef = useRef()
  let droptwoRef = useRef()

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (dropRef.current.contains(e.target)) {
        setDropdown(!dropdown)

      } else {
        setDropdown(false)
      }

      if (droptwoRef.current.contains(e.target)) {
        setDropdownTwo(!dropdowntwo)

      } else {
        setDropdownTwo(false)
      }

    })


  }, [dropdown, dropdowntwo])


  let [count, setCount] = useState(1)

  let discount = (singleProduct.price * singleProduct.discountPercentage) / 100

  let mainPrice = singleProduct.price - discount

  let handleCart = () => {
    toast("Successfully Added!");
    setTimeout(() => {
      navigate("/cart")
    }, 1500)
  }

  let reviewers = singleProduct?.reviews || [];


  return (
    <Container>
      <div className="py-5">
        <div className="">
          <div className="flex justify-center w-[700px] h-[600px] mx-auto">
            <img src={singleProduct.thumbnail} alt="" />
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center">
              <h3 className='text-[#1e8f80] font-dm text-[46px] font-bold mt-[10px] w-[500px]'>{singleProduct.title}</h3>
            </div>
            <div className="flex justify-center items-center gap-5">
              <p className='mt-[30px] text-[30px] text-green-600'>${singleProduct.price}</p>
              <p className='mt-[30px] text-[30px] font-dm font-bold'>Black</p>
            </div>
          </div>
        </div>

        <h2 className='text-[34px] mt-[50px] font-dm'>Product</h2>

        <div className="pt-[10px] flex items-center gap-3">
          <div className="flex">
            {clientRating}
            {/* <FaStar />
         <FaStarHalfAlt />
         <FaRegStar /> */}
          </div>
          <div className="">
            <p className='text-[20px] font-dm'>Review</p>
          </div>
        </div>
        <div className="flex mt-5 gap-5 items-center border-b-1 border-[#26262622]">
          <p className='line-through text-[20px] font-dm pb-5'>${singleProduct.price}</p>
          <p className=' text-[24px] font-dm font-semibold pb-5'>${mainPrice.toFixed(2)}</p>
        </div>

        <div className="flex gap-8 mt-[25px] items-center">
          <div className="">
            <h3 className='text-[18px] font-dm font-semibold'>COLOR :</h3>
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <FaCircle className='text-[26px] text-[rgba(0,0,0,0.22)] inline-block transition-transform duration-200 ease-in-out hover:scale-140' />
              <FaCircle className='text-[26px] text-[#FF8686] inline-block transition-transform duration-200 ease-in-out hover:scale-140' />
              <FaCircle className='text-[26px] text-[#7ED321] inline-block transition-transform duration-200 ease-in-out hover:scale-140' />
              <FaCircle className='text-[26px] text-[#f03a3a] inline-block transition-transform duration-200 ease-in-out hover:scale-140' />
              <FaCircle className='text-[26px] text-[#15CBA5] inline-block transition-transform duration-200 ease-in-out hover:scale-140' />
            </div>
          </div>
        </div>

        <div className="mt-[20px]">
          <label className='text-[18px] font-dm font-semibold pr-[30px]' htmlFor="">Size:</label>
          <select name="" id="" className='py-2 px-10 border-1 border-[#cac5c5] text-[#767676]'>
            <option className='text-black' value="">S</option>
            <option className='text-black' value="">M</option>
            <option className='text-black' value="">L</option>
            <option className='text-black' value="">XXL</option>
          </select>
        </div>
{/* 
        <div className="mt-[20px] flex items-center">
          <label className='text-[18px] font-dm font-semibold pr-[30px]' htmlFor="">QUANTITY:</label>
          <div className="px-5 py-2 border-1">
            <p className='flex items-center'><GoPlus onClick={() => setCount(count + 1)} /> <span className='px-5'>{count}</span> <HiOutlineMinusSmall onClick={() => setCount(Math.max(1, count - 1))} /></p>
          </div>
        </div> */}

        <div className="flex gap-5 mt-[30px] pb-10">
          <button className='px-10 py-3 border-1 border-[#2626264d] text-[16px] text-[#262626] font-dm font-semibold hover:bg-[#262626] hover:text-[white] duration-200 ease-in-out'>Add to Wish List</button>
          <button className='px-15 py-3 border-1 border-[#2626264d] text-[16px] text-[#262626] font-dm font-semibold hover:bg-[#262626] hover:text-[white] duration-200 ease-in-out' onClick={handleCart}>Add to Cart</button>
        </div>
        <ToastContainer />

        <div className="py-5 border-t-1 border-[#26262622]">
          <div className="border-b-1 border-[#26262622]">
            <div className="flex justify-between pb-5">
              <h2 className='text-[16px] font-dm font-semibold'>FEATURES  & DETAILS</h2>
              <FaPlus ref={dropRef} />
            </div>
            {dropdown &&
              <div className="">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            }
          </div>
        </div>

        <div className="py-5 border-t-1 border-[#26262622]">
          <div className="border-b-1 border-[#26262622]">
            <div className="flex justify-between pb-5">
              <h2 className='text-[16px] font-dm font-semibold'>SHIPPING & RETURNS</h2>
              <FaPlus ref={droptwoRef} />
            </div>
            {dropdowntwo &&
              <div className="">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            }
          </div>
        </div>

        <div className="">
          <div className="flex gap-12">
            <h2 className='text-[24px]'>Description</h2>
            <h2 className='text-[24px]'>Reviews</h2>
          </div>
          <div className="mt-[30px] border-t-1 border-b-1 w-full border-[#26262622]">
            <div className="py-5 text-[18px]">
              <div>
                {reviewers && reviewers.length > 0 ? (
                  reviewers.map((review) => (
                    <div key={review.id} className='flex gap-[40px]'>
                      <p>{review.reviewerName} :</p>
                      <h2>{review.comment}</h2>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            </div>
            <div className="pb-[30px]">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>

        </div>

        <div className="py-8">
          <h2 className='text-[24px]'>Add a Review</h2>
          <div className="mt-[50px]">
            <div className="text-[18px] pb-3">
              <label htmlFor="Name" className="font-semibold">
                Name
              </label>
            </div>
            <div className="text-[18px]">
              <input
                type="text"
                placeholder="Your name here"
                className="px-8 py-4 bg-[rgba(38,38,38,0.06)]" />
            </div>
          </div>
          <div className="mt-[50px]">
            <div className="text-[18px] pb-3">
              <label htmlFor="Email" className="font-semibold">
                Email
              </label>
            </div>
            <div className="text-[18px]">
              <input
                type="text"
                placeholder="Your email here"
                className="px-8 py-4 bg-[rgba(38,38,38,0.06)]" />
            </div>
          </div>

          <div className="mt-[50px]">
            <div className="text-[18px] pb-3 font-semibold">
              <label htmlFor="Review">Review</label>
            </div>
          <div className="">
            <textarea name="" id="" placeholder='Write your review' className='w-[500px] h-[150px] px-4 py-4 text-[18px] bg-[rgba(38,38,38,0.06)]'></textarea>
          </div>
          </div>

          <div className="mt-[50px]">
             <button className='px-15 py-3 border-1 text-center border-[#2626264d] text-[16px] font-dm font-semibold bg-[#262626] text-[white] cursor-pointer'>Send</button>
          </div>

        </div>




      </div>
    </Container>
  )
}

export default ProductDetails