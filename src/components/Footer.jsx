import React from 'react'
import Container from './Container'
import logo from "../assets/logobig.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='bg-[#F5F5F3]'>
     <Container>
        <div className="pt-8">
          <div className="flex">
            <div className="w-2/5 flex bg-[#F5F5F3]">
            <div className="w-1/3">
            <h2 className='font-dm font-semibold pb-4'>MENU</h2>
            <ul>
                <li className='font-dm py-1'><a href="#">Home</a></li>
                <li className='font-dm py-1'><a href="#">Shop</a></li>
                <li className='font-dm py-1'><a href="#">About</a></li>
                <li className='font-dm py-1'><a href="#">Contact</a></li>
                <li className='font-dm py-1'><a href="#">Journal</a></li>
            </ul>
            </div>
            <div className="w-1/3">
            <h2 className='font-dm font-semibold pb-4'>MENU</h2>
            <ul>
                <li className='font-dm py-1'><a href="#">Category 1</a></li>
                <li className='font-dm py-1'><a href="#">Category 2</a></li>
                <li className='font-dm py-1'><a href="#">Category 3</a></li>
                <li className='font-dm py-1'><a href="#">Category 4</a></li>
                <li className='font-dm py-1'><a href="#">Category 5</a></li>
            </ul>
            </div>
            <div className="w-1/3">
            <h2 className='font-dm font-semibold pb-4'>HELP</h2>
            <p className='font-dm py-1'>Privacy Policy</p>
            <p className='font-dm py-1'>Terms & Conditions</p>
            <p className='font-dm py-1'>Special E-shop</p>
            <p className='font-dm py-1'>Shipping</p>
            <p className='font-dm py-1'>Secure Payments</p>
            </div>
            </div>
            <div className="w-1/5 bg-[#F5F5F3] pl-[30px]">
            <h2 className='font-dm font-semibold '>(052) 611-5711</h2>
            <h3 className='font-dm font-semibold '>company@domain.com</h3>
            <p className='pt-[30px]'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className="w-2/5 bg-[#F5F5F3] pl-[90px]">
            <img src={logo} alt="" />
            </div>
          </div>
        </div>

        <div className="flex pt-[50px] pb-6">
            <div className="w-3/5 flex gap-x-5 items-center">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            </div>
            <div className="w-2/5 text-end">
            <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </div>
     </Container>
    </section>
  )
}

export default Footer