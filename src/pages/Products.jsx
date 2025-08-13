import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { GoDotFill, GoPlus } from 'react-icons/go'
import { TiArrowSortedUp } from 'react-icons/ti'
import { IoGrid } from 'react-icons/io5'
import { FaListUl } from 'react-icons/fa'
import Post from '../components/Post'
import { ApiData } from '../components/ContextApi'
import Pagination from '../components/Pagination'

const Products = () => {
  let info = useContext(ApiData)
  let [perPage,setPerPage] = useState(12)
  let [currentPage,setCurrentPage] = useState(1)

  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage, lastPage)
  
  let pageNumber = []
  for(let i = 0; i < Math.ceil(info.length / perPage); i++){
    pageNumber.push(i)
  }
  console.log(pageNumber);


  
    
  return (
    <div>
      <Container>
        <div className="py-10">
          <h2 className='text-[#262626] font-dm text-[36px] font-bold'>Products</h2>
          <p><Link to="/">Home</Link> / <Link to="/product">Products</Link></p>
        </div>

        <div className="flex">
          <div className="w-[20%] py-8">
           <h2 className='text-[#262626] font-dm text-[16px] font-bold'>Shop by Category</h2>
           <div className="pt-6">
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm flex items-center justify-between py-4'><span>Category 1</span><GoPlus />
</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>Category 2</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm flex items-center justify-between py-4'><span>Category 3</span><GoPlus />
</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>Category 4</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>Category 5</p>
           </div>
  {/* 1st */}
          <div className="py-4">
           <h2 className='text-[#262626] font-dm text-[16px] font-bold pt-4 flex justify-between items-center'><span>Shop by Color</span><TiArrowSortedUp />
</h2>
                <div className="pt-6">
            <p className='border-b-1 border-[#cac5c5] py-4 text-[#767676] font-dm flex items-center'><span className='text-[black] inline-block pr-1'><GoDotFill/></span> Color 1</p>
            <p className='border-b-1 border-[#cac5c5] py-4 text-[#767676] font-dm  flex items-center'><span className='text-[#FF8686] inline-block pr-1'><GoDotFill/></span> Color 2</p>
            <p className='border-b-1 border-[#cac5c5] py-4 text-[#767676] font-dm  flex items-center'><span className='text-[#7ED321] inline-block pr-1'><GoDotFill/></span> Color 3</p>
            <p className='border-b-1 border-[#cac5c5] py-4 text-[#767676] font-dm  flex items-center'><span className='text-[#B6B6B6] inline-block pr-1'><GoDotFill/></span> Color 4</p>
            <p className='border-b-1 border-[#cac5c5] py-4 text-[#767676] font-dm  flex items-center'><span className='text-[#15CBA5] inline-block pr-1'><GoDotFill/></span> Color 5</p>

           </div>
          </div>
{/* 2nd */}
          <div className="py-4">
           <h2 className='text-[#262626] font-dm text-[16px] font-bold pt-4 flex justify-between items-center'><span>Shop by Brand</span><TiArrowSortedUp />
</h2>
           <div className="pt-6">
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>Brand 1</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>Brand 2</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>Brand 3</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>Brand 4</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>Brand 5</p>
           </div>
          </div>
          {/* last */}
          <div className="py-4">
           <h2 className='text-[#262626] font-dm text-[16px] font-bold pt-4 flex justify-between items-center'><span>Shop by Price</span><TiArrowSortedUp />
</h2>
                <div className="pt-6">
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>$0.00 - $9.99</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>$10.00 - $19.99</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>$20.00 - $29.99</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>$30.00 - $39.99</p>
            <p className='border-b-1 border-[#cac5c5] text-[#767676] font-dm py-4'>$40.00 - $69.99</p>
           </div>
          </div>

          </div>
          <div className="w-[80%] pl-[50px] py-8 font-dm">
           <div className="flex justify-between items-center">
            <div className="">
             <div className="flex gap-2">
              <IoGrid/>
              <FaListUl/>
             </div>
            </div>
             <div className="text-end">
           <label className='text-[#767676] pr-2' htmlFor="">Sort by:</label>
            <select name="" id="" className='py-2 px-9 border-1 border-[#cac5c5] text-[#767676]'>
              <option className='text-black' value="">Featured</option>
              <option className='text-black' value="">Brand</option>
              <option className='text-black' value="">Color</option>
              <option className='text-black' value="">Price</option>
            </select>
            <label className='text-[#767676] pr-2 pl-8' htmlFor="">Show:</label>
            <select name="" id="" className='py-2 px-9 border-1 border-[#cac5c5] text-[#767676]'>
              <option className='text-black' value="">10</option>
              <option className='text-black' value="">20</option>
              <option className='text-black' value="">30</option>
              <option className='text-black' value="">40</option>
            </select>
           </div>
           </div>
           <Post allPage={allPage}/>
           <Pagination pageNumber={pageNumber}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Products