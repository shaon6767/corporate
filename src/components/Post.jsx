import React from 'react'
import Container from './Container'
import one from "../assets/one.png"
import { Link } from 'react-router-dom'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { IoMdGitCompare } from 'react-icons/io'

const Post = ({allPage}) => {
        
    return (
        <div>
            <Container>
            <div className="flex flex-wrap justify-between">
                    {allPage.map((item)=>(
                    <div className="w-[32%] py-[60px]">
                        <div className="relative group">
                            <Link to={`/product/${item.id}`}>
                                <img src={item.thumbnail} alt="" />
                            </Link>
                            <div className="bg-[white] absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-100 duration-300">
                                <ul className='pr-2 pt-4 pb-4'>
                                    <li className='flex items-center justify-end gap-3'> <span>Add to wish List </span><FaHeart /></li>
                                    <li className='flex items-center justify-end gap-3 py-2'> <span>Compare </span><IoMdGitCompare /></li>
                                    <li className='flex items-center justify-end gap-3'> <span>Add to Cart </span><FaShoppingCart /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="">
                                <h3 className='text-[#1e8f80] font-dm text-[16px] font-bold mt-[10px] w-[200px]'>{item.title}</h3>
                                <p className='mt-[10px]'>Black</p>
                            </div>
                            <p className='mt-[10px] pr-5 text-green-600'>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            </Container>
        </div>
    )
}

export default Post