import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <div className="flex py-4 items-center">
        <div className="">
            <img src={logo} alt="" />
        </div>
        <div className="mx-auto">
            <ul className='flex gap-x-8'>
                <li className='text-[#767676] font-dm hover:text-black transition-transform duration-200 ease-in-out hover:scale-110'><Link to="/">Home</Link></li>
                <li className='text-[#767676] font-dm hover:text-black transition-transform duration-200 ease-in-out hover:scale-110'>
                  <Link to="/product">Shop</Link>
                </li>
                <li className='text-[#767676] font-dm hover:text-black transition-transform duration-200 ease-in-out hover:scale-110'><a href="#">About</a></li>
                <li className='text-[#767676] font-dm hover:text-black transition-transform duration-200 ease-in-out hover:scale-110'><a href="#">Contacts</a></li>
                <li className='text-[#767676] font-dm hover:text-black transition-transform duration-200 ease-in-out hover:scale-110'><a href="#">Journal</a></li>
            </ul>
        </div>
      </div>           

    </Container>
  )
}

export default Header