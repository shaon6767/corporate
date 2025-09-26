import React, { useContext, useEffect, useState } from 'react'
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
  let [perPage,setPerPage] = useState(6)
  let [currentPage,setCurrentPage] = useState(1)
  let [categories,setCategories] = useState([])
  let [brand,setBrand] = useState([])
  let [filterShow, setFilterShow] = useState([])
  let [listItem, setListItem] = useState("")
  let [low, setLow] = useState({})
  let [high, setHigh] = useState({})

  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage, lastPage)
  
  let pageNumber = []
  for(let i = 0; i < Math.ceil(info.length / perPage); i++){
   pageNumber.push(i)
  }
 
  let paginate = (index)=>{
   setCurrentPage(index + 1) 
  }

  let next = ()=>{
    if(currentPage < pageNumber.length){
      setCurrentPage((state)=>state + 1)
    }
  }
  
  let previous = ()=>{
    if(currentPage > 1){
    setCurrentPage((state)=>state - 1);
    }
  }

  let handlePerPageChange = (e)=>{
    setPerPage(e.target.value);
    
  }

  useEffect(()=>{
   setCategories([...new Set(info.map((item)=>item.category))])
   setBrand([...new Set(info.map((item)=>item.brand))])
  },[info])


  let handleCategory = (citem)=>{
   let cateFilter = info.filter((item)=>item.category == citem)
    setFilterShow(cateFilter);
  }
  let handleAll = ()=>{
    setFilterShow("")
  }
  
  let handleListItem = ()=>{
    setListItem("active");
    
  }
  
  let handleBrand = (bitem)=>{
   let brandFilter = info.filter((item)=>item.brand == bitem)
   setFilterShow(brandFilter)
  }

  let handlePrice =(value)=>{
    setLow(value.low);
    setHigh(value.high); 
    let priceShow = info.filter((item)=>item.price > value.low && item.price < value.high)
    setFilterShow(priceShow);
  }
  
  
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
           <div className="">
            <ul>
              <li onClick={()=>handleAll()} className='font-dm text-[#767676] capitalize py-4 cursor-pointer'>Show All</li>
            {categories.map((item)=>(
            <li onClick={()=>handleCategory(item)} className='font-dm text-[#767676] capitalize py-4 cursor-pointer'>{item}</li>
            ))}
           </ul>
           </div>
           <div className="">
            <h2 className='text-[#262626] font-dm text-[16px] font-bold pt-[50px] pb-[20px]'>Shop by Brand</h2>
            <ul>
              {brand.map((item)=>(
              <li className='font-dm text-[#767676] capitalize py-4 cursor-pointer' onClick={()=>handleBrand(item)}>{item}</li>
              ))}
            </ul>
           </div>

           <div className="">
            <h2 className='text-[#262626] font-dm text-[16px] font-bold pt-[40px] pb-[20px]'>Shop by Price</h2>
            <ul>
              <li  className='font-dm text-[#767676] py-4 cursor-pointer' onClick={()=>handlePrice({low:0,high:10})}>$0 - $9.99</li>
              <li  className='font-dm text-[#767676] py-4 cursor-pointer' onClick={()=>handlePrice({low:10,high:20})}>$10 - $19.99</li>
              <li  className='font-dm text-[#767676] py-4 cursor-pointer' onClick={()=>handlePrice({low:20,high:30})}>$20 - $29.99</li>
              <li  className='font-dm text-[#767676] py-4 cursor-pointer' onClick={()=>handlePrice({low:30,high:40})}>$30 - $39.99</li>
            </ul>
           </div>

           </div>

          </div>
          <div className="w-[80%] pl-[50px] py-8 font-dm">
           <div className="flex justify-between items-center">
            <div className="">
             <div className="flex gap-2">
              <div className={`${listItem == "active" ?'' :'bg-[#262626] text-white' }`} onClick={()=>setListItem("")}>
                <div className="p-2">
                  <IoGrid/>
                </div>
              </div>
              <div onClick={handleListItem} className={`${listItem == "active" ?'bg-[#262626] text-white' :'' }`}>
                <div className="p-2">
                  <FaListUl/>
                </div>
              </div>
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
            <select onChange={handlePerPageChange} name="" id="" className='py-2 px-9 border-1 border-[#cac5c5] text-[#767676]'>
              <option className='text-black' value="6">6</option>
              <option className='text-black' value="9">9</option>
              <option className='text-black' value="12">12</option>
              <option className='text-black' value="18">18</option>
            </select>
           </div>
           </div>
           <Post allPage={allPage} filterShow={filterShow} listItem={listItem}/>
           <Pagination pageNumber={pageNumber} paginate={paginate} next={next} previous={previous} currentPage={currentPage} filterShow={filterShow}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Products